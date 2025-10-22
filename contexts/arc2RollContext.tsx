"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useToast } from "@/hooks/use-toast";
import { Rollable } from "@/types/game";
import { GroupRoll, GroupRollMember, Roll, RollType } from "@/types/roll";
import {
  blueHigher,
  getHighestRollColor,
  resultsMessage,
  ticksFromProject,
  dieVariants,
  getActionsFromTag,
} from "@/lib/roll";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useCharacterSheet } from "./arc2CharacterSheetContext";
import { Die } from "@/components/die";
import { useSession } from "next-auth/react";
import { RealtimeChannel } from "@supabase/supabase-js";
import supabase from "@/lib/supabase";
import { nanoid } from "@/lib/nanoid";
import { capitalizeFirstLetter } from "@/lib/utils";

interface RollContextProps {
  bonusDiceRed: number;
  bonusDiceBlue: number;
  currentDiceFilter: string;
  fetchNextPage: () => void;
  handleCurrentDiceFilterChange: (val: string) => void;
  hasNextPage: boolean;
  fortuneDice: number;
  rolls: Roll[];
  rollsArePending: boolean;
  isEmotional: boolean;
  isPrivate: boolean;
  groupRoll: GroupRollMember[];
  groupRollDialogOpen: boolean;
  groupRollAlert: boolean;
  connectionStatus: "connecting" | "connected" | "disconnected";
  setBonusDiceRed: React.Dispatch<React.SetStateAction<number>>;
  setBonusDiceBlue: React.Dispatch<React.SetStateAction<number>>;
  setFortuneDice: React.Dispatch<React.SetStateAction<number>>;
  setRolls: React.Dispatch<React.SetStateAction<Roll[]>>;
  refetchRolls: () => void;
  rollLeft: Rollable | undefined;
  rollRight: Rollable | undefined;
  setRollLeft: React.Dispatch<React.SetStateAction<Rollable | undefined>>;
  setRollRight: React.Dispatch<React.SetStateAction<Rollable | undefined>>;
  setIsEmotional: React.Dispatch<React.SetStateAction<boolean>>;
  setGroupRollDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGroupRollAlert: React.Dispatch<React.SetStateAction<boolean>>;
  handleGroupRollAlert: () => void;
  loadGroupRoll: () => void;
  joinGroupRoll: (charName: string) => void;
  handleChangeGroupRollLeader: (charName: string, leader?: boolean) => void;
  handleGroupRollLock: (charName: string, lockedIn: boolean) => void;
  handleRemoveGroupRollMember: (charName: string) => void;
  handleGroupRoll: (rollType: "action" | "project") => void;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  doRoll: (
    type: RollType,
    rollLeft: Rollable | undefined,
    rollRight: Rollable | undefined
  ) => void;
  handleFortuneRollButton: (numDice: number) => void;
}

const RollContext = createContext<RollContextProps | undefined>(undefined);
const PAGE_SIZE = 40;
const DICE_FILTER_LOCAL_STORAGE_KEY = "dicehistory.selectedfilter";

const GROUP_ROLL_ID = "arc2";

export const useRoll = () => {
  const context = useContext(RollContext);
  if (!context) {
    throw new Error("useRoll must be used within a RollProvider");
  }
  return context;
};

export default function RollProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  const { name } = useCharacterSheet();

  const [bonusDiceRed, setBonusDiceRed] = useState<number>(0);
  const [bonusDiceBlue, setBonusDiceBlue] = useState<number>(0);
  const [fortuneDice, setFortuneDice] = useState<number>(0);
  const queryClient = useQueryClient();
  const session = useSession();
  const [rolls, setRolls] = useState<Roll[]>([]);
  const [currentDiceFilter, setCurrentDiceFilter] = useState<string>("all");
  const [rollLeft, setRollLeft] = useState<Rollable>();
  const [rollRight, setRollRight] = useState<Rollable>();
  const [isEmotional, setIsEmotional] = useState<boolean>(false);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [groupRoll, setGroupRoll] = useState<GroupRollMember[]>([]);
  const [groupRollDialogOpen, setGroupRollDialogOpen] = useState(false);
  const [groupRollAlert, setGroupRollAlert] = useState(false);
  const [channel, setChannel] = useState<RealtimeChannel>();

  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");

  const { mutateAsync: saveDiceRoll } = useMutation({
    mutationFn: async (roll: Roll) => {
      const userId = session?.data?.user?.id;
      if (!userId) {
        return [];
      }
      roll.charName = name;
      roll.private = isPrivate;
      const response = await fetch(`/api/roll/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roll),
      });
      if (!response.ok) {
        console.error(`Failed to save roll. status: ${response.status}`);
        return response.json();
      }
      roll.userid = userId;
      roll.timestamp = new Date().toISOString();
      return response.json();
    },
    onError: (error) => {
      console.error("Failed to save roll", error);
      toast({
        title: "Error",
        description: "Failed to save roll history",
        variant: "destructive",
      });
    },
  });

  const rollPinkDie = useCallback((): number => {
    const PINK_DIE_SIDES = [1, 1, 1, 1, 6, 6];
    return PINK_DIE_SIDES[Math.floor(Math.random() * 6)];
  }, []);

  const diceToast = useCallback(
    (
      roll: Roll,
      action1: string | undefined = undefined,
      action2: string | undefined = undefined,
      username: string | undefined = undefined
    ) => {
      const resultText = resultsMessage(roll);

      let descNode: ReactNode;
      if (roll.type === "project") {
        const ticks = ticksFromProject(roll);
        descNode = (
          <div className="mt-1">
            <span>{resultText}</span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-center">
                <b>Limited:</b> {ticks[0]}
              </span>
              <span className="text-center">
                <b>Standard:</b> {ticks[1]}
              </span>
              <span className="text-center">
                <b>Great:</b> {ticks[2]}
              </span>
            </div>
          </div>
        );
      } else {
        descNode = (
          <div className="mt-1">
            <span>{resultText}</span>
          </div>
        );
      }

      // fortune doesn't have an action. Set the action to "Fortune" to make it simpler
      if (roll.type === "fortune") {
        action1 = "Fortune";
      }

      toast({
        variant: "grid",
        // @ts-expect-error todo
        title: (
          <div className="flex justify-between items-center w-full border-b border-border pb-1 pt-3 relative">
            {username && (
              <span className="absolute top-0 left-0 text-xs text-muted-foreground">
                {username}
              </span>
            )}

            <div className="mt-1.5">
              Rolled {action1}
              {action2 ? ` + ${action2}` : ""}
            </div>

            <div className="flex flex-wrap gap-1 justify-end">
              {roll.redDice.map((r, i) => (
                <Die key={i} roll={r} className="h-10 w-10 text-red-800" />
              ))}
              {roll.blueDice.map((r, i) => (
                <Die key={i} roll={r} className="h-10 w-10 text-blue-800" />
              ))}
              {roll.pinkDice?.map((r, i) => (
                <Die key={i} roll={r} className="h-10 w-10 text-pink-800" />
              ))}
            </div>
          </div>
        ),
        description: (
          <div className="flex items-center gap-4">
            {roll.result === "crit" ? (
              [
                roll.redDice
                  .filter((r) => r === 6)
                  .map((r, i) => (
                    <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                  )),
                roll.blueDice
                  .filter((r) => r === 6)
                  .map((r, i) => (
                    <Die
                      key={i}
                      roll={r}
                      className={"h-10 w-10 text-blue-800"}
                    />
                  )),
                roll.pinkDice
                  ?.filter((r) => r === 6)
                  .map((r, i) => (
                    <Die
                      key={i}
                      roll={r}
                      className={"h-10 w-10 text-pink-400"}
                    />
                  )),
              ]
            ) : (
              <Die
                roll={roll.resultDie}
                className={dieVariants({ type: getHighestRollColor(roll) })}
              />
            )}
            {descNode}
          </div>
        ),
      });
    },
    [toast]
  );

  const rollDice = useCallback(
    async (
      type: RollType,
      numRed: number,
      numBlue: number,
      numPink: number,
      tag?: string,
      metatags?: string[]
    ): Promise<Roll> => {
      numRed += bonusDiceRed;
      numBlue += bonusDiceBlue;

      const roll: Roll = {
        type: type,
        numRed: numRed,
        numBlue: numBlue,
        tag: tag,
        metatags,
      } as Roll;

      roll.redDice = [];
      roll.blueDice = [];
      roll.pinkDice = [];

      const takeLower = numRed + numBlue === 0;
      if (takeLower) {
        if (type === "fortune") {
          numBlue = 2;
        } else {
          if (numPink > 0) {
            numRed = Math.max(0, 2 - numPink);
          } else {
            numRed = 2;
          }
        }
      }

      // if there are pink dice, they'll randomly replace other dice
      if (numPink > 0) {
        for (let i = 0; i < numPink; i++) {
          const totalDice = numRed + numBlue;

          // Only replace if there are dice to replace
          if (totalDice > 0) {
            // Calculate probability based on proportion of red vs blue dice
            const redProbability = numRed / totalDice;

            if (Math.random() < redProbability) {
              if (numRed > 0) {
                numRed--;
              } else if (numBlue > 0) {
                numBlue--;
              }
            } else {
              if (numBlue > 0) {
                numBlue--;
              } else if (numRed > 0) {
                numRed--;
              }
            }
          }
        }
      }

      for (let i = 0; i < numRed; i++) {
        roll.redDice.push(Math.floor(Math.random() * 6) + 1);
      }
      for (let i = 0; i < numBlue; i++) {
        roll.blueDice.push(Math.floor(Math.random() * 6) + 1);
      }
      for (let i = 0; i < numPink; i++) {
        roll.pinkDice.push(rollPinkDie());
      }

      const redSixes = roll.redDice.filter((r) => r === 6).length;
      const blueSixes = roll.blueDice.filter((r) => r === 6).length;
      const pinkSixes = roll.pinkDice.filter((r) => r === 6).length;
      if (redSixes + blueSixes + pinkSixes >= 2) {
        roll.result = "crit";
        roll.effect = "improved";
        roll.resultDie = 6;
      } else {
        if (takeLower) {
          if (type == "fortune") {
            roll.resultDie = Math.min(...roll.blueDice);
          } else {
            roll.resultDie = Math.min(...roll.redDice, ...roll.pinkDice);
          }
          roll.effect = "reduced";
        } else {
          const bh = blueHigher(roll);
          roll.resultDie = bh
            ? Math.max(...roll.blueDice, ...roll.pinkDice) // pink dice count as normal effect
            : Math.max(...roll.redDice);
          roll.effect = bh ? "normal" : "reduced";
        }

        switch (roll.resultDie) {
          case 1:
          case 2:
          case 3:
            roll.result = "failure";
            break;
          case 4:
          case 5:
            roll.result = "partial";
            break;
          case 6:
            roll.result = "success";
            break;
        }
      }

      await saveDiceRoll(roll);
      if (channel) {
        channel.send({
          type: "broadcast",
          event: "roll",
          payload: JSON.stringify(roll),
        });
      }
      return roll;
    },
    [bonusDiceRed, bonusDiceBlue, rollPinkDie, saveDiceRoll, channel]
  );

  const rollActions = useCallback(
    async (
      type: RollType,
      action1?: Rollable,
      action2?: Rollable,
      metatags?: string[]
    ): Promise<Roll> => {
      const score1 = action1?.score || [0, 0];
      const score2 = action2?.score || [0, 0];
      const redRolls =
        score1.filter((r) => r === 1).length +
        score2.filter((r) => r === 1).length;
      const blueRolls =
        score1.filter((r) => r === 2).length +
        score2.filter((r) => r === 2).length;
      return await rollDice(
        type,
        redRolls,
        blueRolls,
        type === "action" && isEmotional ? 1 : 0,
        `${action1?.name}${action2 ? ` | ${action2.name}` : ""}`,
        metatags
      );
    },
    [isEmotional, rollDice]
  );

  const cleanupDice = useCallback(() => {
    setRollLeft(undefined);
    setRollRight(undefined);
    setBonusDiceRed(0);
    setBonusDiceBlue(0);
  }, []);

  const doRoll = useCallback(
    async (
      type: RollType,
      rollLeft: Rollable | undefined,
      rollRight: Rollable | undefined,
      metatags?: string[]
    ) => {
      if (!rollLeft && !rollRight) {
        const roll = await rollDice(
          type,
          0,
          0,
          type === "action" && isEmotional ? 1 : 0
        );
        diceToast(roll, capitalizeFirstLetter(type));
        cleanupDice();
        return;
      }
      if (!rollLeft) {
        const roll = await rollActions(type, rollRight, undefined, metatags);
        diceToast(roll, rollRight?.name);
      } else if (!rollRight) {
        const roll = await rollActions(type, rollLeft, undefined, metatags);
        diceToast(roll, rollLeft.name);
      } else {
        const roll = await rollActions(type, rollLeft, rollRight, metatags);
        diceToast(roll, rollLeft.name, rollRight.name);
      }
      cleanupDice();
    },
    [diceToast, rollActions, rollDice, isEmotional, cleanupDice]
  );

  const buildUrl = (val: string, cursor: number) => {
    const baseUrl = "/api/roll";
    const params = new URLSearchParams({
      cursor: cursor.toString(),
      page_size: PAGE_SIZE.toString(),
    });

    switch (val) {
      case "all":
        return `${baseUrl}?${params}`;
      case "own":
        const userid = session?.data?.user?.id ?? "";
        if (!userid) {
          throw new Error("current user has no id provided");
        }
        return `${baseUrl}/${session?.data?.user?.id}?${params}`;
      default:
        return `${baseUrl}/${val}?${params}`;
    }
  };

  const fetchRollData = async ({
    pageParam = 0,
    queryKey,
  }: {
    pageParam: number | undefined;
    queryKey: string[];
  }) => {
    if (queryKey[2] !== "true") {
      return [];
    }
    try {
      const response = await fetch(buildUrl(queryKey[1], pageParam));
      if (!response.ok) {
        console.error(`Failed to fetch roll data. status: ${response.status}`);
        return [];
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching roll data:", error);
      throw error;
    }
  };

  const isAuthenticated = !!session?.data?.user?.id;

  const {
    data: rollPages,
    fetchNextPage,
    hasNextPage,
    isPending: rollsArePending,
    refetch: refetchRolls,
  } = useInfiniteQuery({
    queryKey: ["rolls", currentDiceFilter, isAuthenticated.toString()],
    queryFn: fetchRollData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // If we got a full page of results, there might be more
      return lastPage.length === PAGE_SIZE ? allPages.flat().length : undefined;
    },
  });

  useEffect(() => {
    if (rollPages?.pages) {
      // Flatten all pages into a single array of rolls
      const allRolls = rollPages.pages.flat();
      setRolls(allRolls);
    }
  }, [rollPages, setRolls]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const df = localStorage.getItem(DICE_FILTER_LOCAL_STORAGE_KEY);
      if (!!df) {
        if (df === "own") {
          // If the saved filter is "own", set it to the current user's id
          // This is a pseudo-migration to align "yours" with the actual user id
          const userId = session?.data?.user?.id;
          if (userId) {
            setCurrentDiceFilter(userId);
            return;
          }
        }
        setCurrentDiceFilter(df);
      }
    }
  }, [session?.data?.user?.id]);

  const handleRollEvent = useCallback(
    (roll: Roll) => {
      console.log("roll data", roll);
      const [action1, action2] = getActionsFromTag(roll.tag ?? "");
      diceToast(roll, action1 || "", action2 || "", roll.charName);
      if (currentDiceFilter === "all" || currentDiceFilter === roll.userid) {
        setRolls((prev) => [roll, ...prev]);
      }
    },
    [currentDiceFilter, setRolls, diceToast]
  );

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
    handleRoll: handleRollEvent,
    handleGroupRoll: handleGroupRollEvent,
    handleAlert: handleGroupRollAlertEvent,
  });

  useEffect(() => {
    handlersRef.current = {
      handleRoll: handleRollEvent,
      handleGroupRoll: handleGroupRollEvent,
      handleAlert: handleGroupRollAlertEvent,
    };
  }, [handleRollEvent, handleGroupRollEvent, handleGroupRollAlertEvent]);

  useEffect(() => {
    setConnectionStatus("connecting");
    const rollChannel = supabase.channel("rolls");

    rollChannel
      .on("broadcast", { event: "roll" }, (payload) => {
        const roll = JSON.parse(payload.payload);
        handlersRef.current.handleRoll(roll);
      })
      .on("broadcast", { event: "group-roll" }, (payload) => {
        const gr = JSON.parse(payload.payload);
        handlersRef.current.handleGroupRoll(gr);
      })
      .on("broadcast", { event: "group-roll-alert" }, () =>
        handlersRef.current.handleAlert()
      )
      .subscribe();

    setChannel(rollChannel);
    setConnectionStatus("connected");

    return () => {
      rollChannel.unsubscribe();
      rollChannel.teardown();
      setConnectionStatus("disconnected");
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
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
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

  const handleCurrentDiceFilterChange = (val: string) => {
    queryClient.invalidateQueries({ queryKey: ["rolls", val] });
    setCurrentDiceFilter(val);
    localStorage.setItem(DICE_FILTER_LOCAL_STORAGE_KEY, val);
  };

  async function handleFortuneRollButton(numDice: number) {
    const roll = await rollDice("fortune", 0, numDice, 0);
    diceToast(roll);
    setFortuneDice(0);
  }

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
    <RollContext.Provider
      value={{
        bonusDiceRed,
        bonusDiceBlue,
        currentDiceFilter,
        fortuneDice,
        fetchNextPage,
        handleCurrentDiceFilterChange,
        hasNextPage,
        rolls,
        rollsArePending,
        isEmotional,
        groupRoll,
        groupRollDialogOpen,
        groupRollAlert,
        isPrivate,
        connectionStatus,
        setBonusDiceRed,
        setBonusDiceBlue,
        setFortuneDice,
        setRolls,
        setIsEmotional,
        setIsPrivate,
        refetchRolls,
        rollLeft,
        rollRight,
        setRollLeft,
        setRollRight,
        doRoll,
        setGroupRollDialogOpen,
        setGroupRollAlert,
        handleGroupRollAlert,
        loadGroupRoll,
        joinGroupRoll,
        handleChangeGroupRollLeader,
        handleGroupRollLock,
        handleRemoveGroupRollMember,
        handleGroupRoll,
        handleFortuneRollButton,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
