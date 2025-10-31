import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import supabase from "@/lib/supabase";
import { RealtimeChannel } from "@supabase/supabase-js";
import { useRoll } from "./arc2RollContext";
import { GroupRoll, GroupRollMember } from "@/types/roll";
import { useCharacterSheet } from "./arc2CharacterSheetContext";
import { nanoid } from "@/lib/nanoid";

interface GroupRollContextProps {
  groupRoll: GroupRollMember[];
  groupRollDialogOpen: boolean;
  groupRollAlert: boolean;
  setGroupRollDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGroupRollAlert: React.Dispatch<React.SetStateAction<boolean>>;
  handleGroupRollAlert: () => void;
  loadGroupRoll: () => void;
  joinGroupRoll: (charName: string) => void;
  handleChangeGroupRollLeader: (charName: string, leader?: boolean) => void;
  handleGroupRollLock: (charName: string, lockedIn: boolean) => void;
  handleRemoveGroupRollMember: (charName: string) => void;
  handleGroupRoll: (rollType: "action" | "project") => void;
}

const GROUP_ROLL_ID = "arc2";

const GroupRollContext = createContext<GroupRollContextProps | undefined>(
  undefined
);

export const useGroupRoll = () => {
  const context = useContext(GroupRollContext);
  if (!context) {
    throw new Error(
      "useGroupRollContext must be used within a GroupRollProvider"
    );
  }
  return context;
};

export default function GroupRollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { name } = useCharacterSheet();
  const {
    doRoll,
    rollLeft,
    rollRight,
    bonusDiceRed,
    bonusDiceBlue,
    isEmotional,
    setRollLeft,
    setRollRight,
    setBonusDiceRed,
    setBonusDiceBlue,
  } = useRoll();

  const [groupRoll, setGroupRoll] = useState<GroupRollMember[]>([]);
  const [groupRollDialogOpen, setGroupRollDialogOpen] = useState(false);
  const [groupRollAlert, setGroupRollAlert] = useState(false);
  const [channel, setChannel] = useState<RealtimeChannel>();

  const handleGroupRollEvent = useCallback(
    async (gr: GroupRoll) => {
      const groupRollMember = gr.members.find(
        (member) => member.charName === name
      );
      if (!groupRollMember) return;
      if (!groupRollMember.lockedIn) return;
      setGroupRollDialogOpen(false);
      await doRoll(
        gr.type,
        groupRollMember.rollLeft,
        groupRollMember.rollRight,
        [`gr-${gr.id}`]
      );
    },
    [doRoll, name]
  );

  const handleGroupRollAlertEvent = useCallback(
    () => setGroupRollAlert(true),
    [setGroupRollAlert]
  );

  const handlersRef = useRef({
    handleGroupRoll: handleGroupRollEvent,
    handleGroupRollAlert: handleGroupRollAlertEvent,
  });

  useEffect(() => {
    handlersRef.current = {
      handleGroupRoll: handleGroupRollEvent,
      handleGroupRollAlert: handleGroupRollAlertEvent,
    };
  }, [handleGroupRollEvent, handleGroupRollAlertEvent]);

  useEffect(() => {
    const rollChannel = supabase.channel("rolls");

    rollChannel
      .on("broadcast", { event: "group-roll" }, (payload) => {
        const gr = JSON.parse(payload.payload);
        handlersRef.current.handleGroupRoll(gr);
      })
      .on("broadcast", { event: "group-roll-alert" }, () =>
        handlersRef.current.handleGroupRollAlert()
      )
      .subscribe();

    setChannel(rollChannel);

    return () => {
      rollChannel.unsubscribe();
      rollChannel.teardown();
    };
  }, []);

  useEffect(() => {
    const groupRollChannel = supabase
      .channel(`group_roll:${GROUP_ROLL_ID}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "group_rolls",
          filter: `id=eq.${GROUP_ROLL_ID}`,
        },
        (payload) => {
          if (payload.new && "state" in payload.new) {
            setGroupRoll(payload.new.state as GroupRollMember[]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(groupRollChannel);
    };
  }, []);

  const handleGroupRoll = async (rollType: "action" | "project") => {
    const gr: GroupRoll = {
      members: groupRoll,
      type: rollType,
      id: nanoid(),
    };

    if (channel) {
      channel.send({
        type: "broadcast",
        event: "group-roll",
        payload: JSON.stringify(gr),
      });
    }

    const isMember = gr.members.some((member) => member.charName === name);
    if (isMember) await doRoll(rollType, rollLeft, rollRight, [`gr-${gr.id}`]);

    updateGroupRoll(() => []);
    setGroupRollDialogOpen(false);
  };

  function handleGroupRollAlert() {
    if (channel) {
      channel.send({
        type: "broadcast",
        event: "group-roll-alert",
      });
    }
  }

  const loadGroupRoll = async () => {
    console.log("Fetching group roll persistent state");
    const { data, error } = await supabase
      .from("group_rolls")
      .select()
      .eq("id", GROUP_ROLL_ID)
      .limit(1)
      .single();
    if (error) {
      console.log("Error fetching group roll", error);
      return;
    }
    if (data?.state) {
      const members = data.state as GroupRollMember[];
      console.log("Group roll persistent state found.");
      setGroupRoll(members);
      const foundMember = members.find((member) => member.charName === name);
      if (foundMember) {
        if (foundMember.rollLeft) {
          setRollLeft(foundMember.rollLeft);
        }
        if (foundMember.rollRight) {
          setRollRight(foundMember.rollRight);
        }
        setBonusDiceRed(foundMember.bonusDiceRed);
        setBonusDiceBlue(foundMember.bonusDiceBlue);
      }
    } else {
      console.log("Group roll persistent state not found. Creating entry.");
      const { error } = await supabase
        .from("group_rolls")
        .insert({ id: GROUP_ROLL_ID, state: [] })
        .select()
        .single();
      if (error) {
        console.error("Error creating group roll:", error);
        return;
      }
    }
  };

  const joinGroupRoll = async (charName: string) => {
    const newMember: GroupRollMember = {
      charName,
      lockedIn: false,
      leader: false,
      rollLeft,
      rollRight,
      bonusDiceRed,
      bonusDiceBlue,
      emotional: isEmotional,
    };
    await updateGroupRoll((currentGroup) => {
      const updatedGroup = [...currentGroup, newMember];
      return updatedGroup;
    });
  };

  const updateGroupRoll = async (
    updater: (current: GroupRollMember[]) => GroupRollMember[]
  ) => {
    const newState = updater(groupRoll);

    const { error } = await supabase
      .from("group_rolls")
      .update({ state: newState, updated_at: new Date().toISOString() })
      .eq("id", GROUP_ROLL_ID);

    if (error) {
      console.error("Error updating persistent group_roll state", error);
    }

    setGroupRoll(newState);
  };

  async function handleChangeGroupRollLeader(
    charName: string,
    leader: boolean = true
  ) {
    const newLeader: GroupRollMember = {
      charName,
      leader: leader,
      // only relelvant if member not in group roll yet
      rollLeft,
      rollRight,
      bonusDiceRed,
      bonusDiceBlue,
      emotional: isEmotional,
      lockedIn: false,
    };

    await updateGroupRoll((currentGroup) => {
      const updatedGroup = currentGroup.map((member) => ({
        ...member,
        leader:
          member.charName === charName
            ? leader
            : !!leader
            ? false
            : member.leader,
        // undo lock if member gets swapped in or out of leader role
        lockedIn: member.charName === charName ? false : member.lockedIn,
      }));
      const newLeaderExists = currentGroup.some(
        (member) => member.charName === charName
      );
      if (!newLeaderExists) updatedGroup.push(newLeader);
      return updatedGroup;
    });
  }

  async function handleGroupRollLock(charName: string, lockedIn: boolean) {
    const modifiedMember: GroupRollMember = {
      charName,
      lockedIn,
      rollLeft,
      rollRight,
      bonusDiceRed,
      bonusDiceBlue,
      // only relelvant if member not in group roll yet
      emotional: isEmotional,
      leader: false,
    };

    await updateGroupRoll((currentGroup) => {
      const updatedGroup = currentGroup.map((member) => {
        if (member.charName === charName) {
          return {
            ...member,
            lockedIn,
            rollLeft,
            rollRight,
            bonusDiceRed,
            bonusDiceBlue,
            emotional: isEmotional,
          };
        }
        return member;
      });
      const modifiedMemberExists = currentGroup.some(
        (member) => member.charName === charName
      );
      if (!modifiedMemberExists) updatedGroup.push(modifiedMember);
      return updatedGroup;
    });
  }

  async function handleRemoveGroupRollMember(charName: string) {
    await updateGroupRoll((currentGroup) =>
      currentGroup.filter((member) => member.charName !== charName)
    );
  }

  return (
    <GroupRollContext.Provider
      value={{
        groupRoll,
        groupRollDialogOpen,
        groupRollAlert,
        setGroupRollDialogOpen,
        setGroupRollAlert,
        handleGroupRollAlert,
        loadGroupRoll,
        joinGroupRoll,
        handleChangeGroupRollLeader,
        handleGroupRollLock,
        handleRemoveGroupRollMember,
        handleGroupRoll,
      }}
    >
      {children}
    </GroupRollContext.Provider>
  );
}
