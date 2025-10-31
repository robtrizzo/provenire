import { EngagementRollQuestion, EngagementRollState } from "@/types/roll";
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
import { useSession } from "next-auth/react";
import { useRoll } from "./arc2RollContext";

interface EngagementRollContextProps {
  engagementRoll: EngagementRollState;
  engagementRollDialogOpen: boolean;
  engagementRollAlert: boolean;
  setEngagementRollDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEngagementRollAlert: React.Dispatch<React.SetStateAction<boolean>>;
  handleEngagementRollAlert: () => void;
  loadEngagementRoll: () => void;
  configureEngagementRoll: (questions: EngagementRollQuestion[]) => void;
  engagementRollQuestionVote: (idx: number, vote: "yes" | "no") => void;
  numEngagementRollDice: (
    engagementRollStateOverride?: EngagementRollState
  ) => number;
  handleEngagementRoll: () => void;
}

const ENGAGEMENT_ROLL_ID = "arc2-eng";

const EngagementRollContext = createContext<
  EngagementRollContextProps | undefined
>(undefined);

export const useEngagementRoll = () => {
  const context = useContext(EngagementRollContext);
  if (!context) {
    throw new Error(
      "useEngagementRollContext must be used within an EngagementRollProvider"
    );
  }
  return context;
};

export default function EngagementRollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { handleFortuneRoll } = useRoll();

  const [engagementRoll, setEngagementRoll] = useState<EngagementRollState>([]);
  const [engagementRollDialogOpen, setEngagementRollDialogOpen] =
    useState(false);
  const [engagementRollAlert, setEngagementRollAlert] = useState(false);
  const [channel, setChannel] = useState<RealtimeChannel>();

  const session = useSession();

  const handleEngagementRollEvent = useCallback(() => {
    setEngagementRollDialogOpen(false);
    setEngagementRollAlert(false);
  }, [setEngagementRollDialogOpen, setEngagementRollAlert]);

  const handleEngagementRollAlertEvent = useCallback(
    () => setEngagementRollAlert(true),
    [setEngagementRollAlert]
  );

  const handlersRef = useRef({
    handleEngagementRoll: handleEngagementRollEvent,
    handleEngagementRollAlert: handleEngagementRollAlertEvent,
  });

  useEffect(() => {
    handlersRef.current = {
      handleEngagementRoll: handleEngagementRollEvent,
      handleEngagementRollAlert: handleEngagementRollAlertEvent,
    };
  }, [handleEngagementRollEvent, handleEngagementRollAlertEvent]);

  useEffect(() => {
    const rollChannel = supabase.channel("rolls");

    rollChannel
      .on("broadcast", { event: "engagement-roll" }, () => {
        handlersRef.current.handleEngagementRoll();
      })
      .on("broadcast", { event: "engagement-roll-alert" }, () =>
        handlersRef.current.handleEngagementRollAlert()
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
      .channel(`group_roll:${ENGAGEMENT_ROLL_ID}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "group_rolls",
          filter: `id=eq.${ENGAGEMENT_ROLL_ID}`,
        },
        (payload) => {
          if (payload.new && "state" in payload.new) {
            setEngagementRoll(payload.new.state as EngagementRollState);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(groupRollChannel);
    };
  }, []);

  function numEngagementRollDice(
    engagementRollStateOverride?: EngagementRollState
  ) {
    let state = engagementRoll;
    if (engagementRollStateOverride) {
      state = engagementRollStateOverride;
    }

    return Math.max(
      state.reduce((acc, question) => {
        if (question.yesVotes.length > question.noVotes.length) {
          return acc + question.weight;
        }
        return acc;
      }, 0),
      0
    );
  }

  const clearEngagementRollVotes = () => {
    return engagementRoll.map(({ question, weight }) => ({
      question,
      weight,
      yesVotes: [],
      noVotes: [],
    }));
  };

  const handleEngagementRoll = async () => {
    if (channel) {
      channel.send({
        type: "broadcast",
        event: "engagement-roll",
      });
    }

    // whoever clicked the button makes a fortune roll
    await handleFortuneRoll(numEngagementRollDice());

    updateEngagementRoll(clearEngagementRollVotes);
    setEngagementRollDialogOpen(false);
  };

  function handleEngagementRollAlert() {
    if (channel) {
      channel.send({
        type: "broadcast",
        event: "engagement-roll-alert",
      });
    }
  }

  const loadEngagementRoll = async () => {
    console.log("Fetching engagement roll persistent state");
    const { data, error } = await supabase
      .from("group_rolls")
      .select()
      .eq("id", ENGAGEMENT_ROLL_ID)
      .limit(1)
      .single();
    if (error) {
      console.log("Error fetching engagement roll", error);
      return;
    }
    if (data?.state) {
      const engRoll = data.state as EngagementRollState;
      console.log("Engagement roll persistent state found.");
      setEngagementRoll(engRoll);
    } else {
      console.log(
        "Engagement roll persistent state not found. Creating entry."
      );
      const { error } = await supabase
        .from("group_rolls")
        .insert({ id: ENGAGEMENT_ROLL_ID, state: [] })
        .select()
        .single();
      if (error) {
        console.error("Error creating engagement roll:", error);
        return;
      }
    }
  };

  const configureEngagementRoll = async (
    questions: EngagementRollQuestion[]
  ) => {
    const newState: EngagementRollState = questions.map((q) => ({
      ...q,
      yesVotes: [],
      noVotes: [],
    }));
    await updateEngagementRoll(() => {
      return newState;
    });
  };

  const engagementRollQuestionVote = async (
    idx: number,
    vote: "yes" | "no"
  ) => {
    const username = session.data?.user.name;
    if (!username) {
      console.error("Cannot vote unless signed in");
      return;
    }

    const question = engagementRoll[idx];

    if (vote === "yes") {
      // remove from no
      question.noVotes = question.noVotes.filter((u) => u !== username);
      if (question.yesVotes.includes(username)) {
        // if already in yes, remove
        question.yesVotes = question.yesVotes.filter((u) => u !== username);
      } else {
        // otherwise add to yes
        question.yesVotes = [...new Set([...question.yesVotes, username])];
      }
    } else if (vote === "no") {
      // remove from yes
      question.yesVotes = question.yesVotes.filter((u) => u !== username);
      if (question.noVotes.includes(username)) {
        // if already in no, remove
        question.noVotes = question.noVotes.filter((u) => u !== username);
      } else {
        // otherwise add to no
        question.noVotes = [...new Set([...question.noVotes, username])];
      }
    } else {
      console.error("Invalid vote option: ", vote);
      return;
    }

    const newState: EngagementRollState = engagementRoll.map((q, i) =>
      i === idx ? question : q
    );

    await updateEngagementRoll(() => newState);
  };

  const updateEngagementRoll = async (
    updater: (current: EngagementRollState) => EngagementRollState
  ) => {
    const newState = updater(engagementRoll);

    const { error } = await supabase
      .from("group_rolls")
      .update({ state: newState, updated_at: new Date().toISOString() })
      .eq("id", ENGAGEMENT_ROLL_ID);

    if (error) {
      console.error("Error updating persistent group_roll state", error);
    }

    setEngagementRoll(newState);
  };

  return (
    <EngagementRollContext.Provider
      value={{
        engagementRoll,
        engagementRollDialogOpen,
        engagementRollAlert,
        setEngagementRollDialogOpen,
        setEngagementRollAlert,
        handleEngagementRollAlert,
        loadEngagementRoll,
        numEngagementRollDice,
        handleEngagementRoll,
        configureEngagementRoll,
        engagementRollQuestionVote,
      }}
    >
      {children}
    </EngagementRollContext.Provider>
  );
}
