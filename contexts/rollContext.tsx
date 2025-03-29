"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useToast } from "@/hooks/use-toast";
import { Attribute } from "@/types/game";
import {
  blueHigher,
  resultsMessage,
  Roll,
  RollType,
  ticksFromProject,
} from "@/types/roll";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useCharacterSheet } from "./characterSheetContext";
import { Die } from "@/components/die";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useChannel, useConnectionStateListener } from "ably/react";

interface RollContextProps {
  rollActions: (
    type: RollType,
    attribute1: Attribute,
    action1: string,
    attribute2?: Attribute | undefined,
    action2?: string | undefined
  ) => Promise<Roll>;
  rollDice: (
    type: RollType,
    numRed: number,
    numBlue: number,
    tag?: string
  ) => Promise<Roll>;
  diceToast: (roll: Roll, action1?: string, action2?: string) => void;
  bonusDiceRed: number;
  bonusDiceBlue: number;
  currentDiceFilter: string;
  fetchNextPage: () => void;
  handleCurrentDiceFilterChange: (val: string) => void;
  hasNextPage: boolean;
  fortuneDice: number;
  rolls: Roll[];
  rollsArePending: boolean;
  isPrivate: boolean;
  setBonusDiceRed: React.Dispatch<React.SetStateAction<number>>;
  setBonusDiceBlue: React.Dispatch<React.SetStateAction<number>>;
  setFortuneDice: React.Dispatch<React.SetStateAction<number>>;
  setRolls: React.Dispatch<React.SetStateAction<Roll[]>>;
  refetchRolls: () => void;
  rollLeft: string;
  rollRight: string;
  setRollLeft: React.Dispatch<React.SetStateAction<string>>;
  setRollRight: React.Dispatch<React.SetStateAction<string>>;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  handleRollButton: (
    type: RollType,
    rollLeft: string,
    rollRight: string
  ) => void;
  handleFortuneRollButton: (numDice: number) => void;
}

const RollContext = createContext<RollContextProps | undefined>(undefined);
const PAGE_SIZE = 40;
const DICE_FILTER_LOCAL_STORAGE_KEY = "dicehistory.selectedfilter";

export const useRoll = () => {
  const context = useContext(RollContext);
  if (!context) {
    throw new Error("useRoll must be used within a RollProvider");
  }
  return context;
};

export default function RollProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  const { attributes, name } = useCharacterSheet();

  const [wsConnectionState, setWsConnectionState] =
    useState<string>("uninitialized");

  useConnectionStateListener((stateChange) => {
    console.log(
      `Websocket connection changed from ${stateChange.previous} to ${stateChange.current}`
    );
    setWsConnectionState(stateChange.current);
  });

  const wsConnected = wsConnectionState === "connected";

  const [bonusDiceRed, setBonusDiceRed] = useState<number>(0);
  const [bonusDiceBlue, setBonusDiceBlue] = useState<number>(0);
  const [fortuneDice, setFortuneDice] = useState<number>(0);
  const queryClient = useQueryClient();
  const session = useSession();
  const username = session?.data?.user.name;
  const [rolls, setRolls] = useState<Roll[]>([]);
  const [currentDiceFilter, setCurrentDiceFilter] = useState<string>("all");
  const [rollLeft, setRollLeft] = useState<string>("");
  const [rollRight, setRollRight] = useState<string>("");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);

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
      if (currentDiceFilter === "own" || currentDiceFilter === "all") {
        rolls.unshift(roll);
        setRolls(rolls);
      }
      return response.json();
    },
    onSuccess: async () => {
      // If the current user makes a roll, we need to invalidate their filter for what the one not currently loaded.
      // That is, if they're looking at "own", invalidate "all" and vice versa. If they're looking at someone else's,
      // invalidate both
      if (currentDiceFilter === "own") {
        await queryClient.invalidateQueries({ queryKey: ["rolls", "all"] });
      } else if (currentDiceFilter === "all") {
        await queryClient.invalidateQueries({ queryKey: ["rolls", "own"] });
      } else {
        await queryClient.invalidateQueries({ queryKey: ["rolls", "all"] });
        await queryClient.invalidateQueries({ queryKey: ["rolls", "own"] });
      }
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

  const rollDice = async (
    type: RollType,
    numRed: number,
    numBlue: number,
    tag?: string
  ): Promise<Roll> => {
    numRed += bonusDiceRed;
    numBlue += bonusDiceBlue;

    const roll: Roll = {
      type: type,
      numRed: numRed,
      numBlue: numBlue,
      tag: tag,
    } as Roll;

    roll.redDice = [];
    roll.blueDice = [];

    const takeLower = numRed + numBlue == 0;
    if (takeLower) {
      if (type === "fortune") {
        numBlue = 2;
      } else {
        numRed = 2;
      }
    }
    for (let i = 0; i < numRed; i++) {
      roll.redDice.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < numBlue; i++) {
      roll.blueDice.push(Math.floor(Math.random() * 6) + 1);
    }

    const redSixes = roll.redDice.filter((r) => r === 6).length;
    const blueSixes = roll.blueDice.filter((r) => r === 6).length;
    if (redSixes + blueSixes >= 2) {
      roll.result = "crit";
      roll.effect = "improved";
      roll.resultDie = 6;
    } else {
      if (takeLower) {
        if (type == "fortune") {
          roll.resultDie = Math.min(...roll.blueDice);
        } else {
          roll.resultDie = Math.min(...roll.redDice);
        }
        roll.effect = "reduced";
      } else {
        const bh = blueHigher(roll);
        roll.resultDie = bh
          ? Math.max(...roll.blueDice)
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
    return roll;
  };

  async function rollActions(
    type: RollType,
    attribute1: Attribute,
    action1: string,
    attribute2?: Attribute | undefined,
    action2?: string | undefined
  ): Promise<Roll> {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 =
      attribute2 && action2
        ? attributes?.[attribute2]?.[action2] || [0, 0]
        : [0, 0];
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
      `${action1}${action2 ? ` | ${action2}` : ""}`
    );
  }

  async function diceToast(
    roll: Roll,
    action1: string | undefined = undefined,
    action2: string | undefined = undefined,
    username: string | undefined = undefined
  ) {
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
        <div className="flex items-center flex-wrap gap-1 relative border-b-[1px] border-border">
          {username && (
            <span className="absolute top-0 left-0 text-xs text-muted-foreground">
              {username}
            </span>
          )}
          <span className="mt-1.5">
            Rolled {action1}
            {action2 ? ` + ${action2}` : ""}
          </span>
          {roll.redDice.map((r, i) => (
            <Die key={i} roll={r} className="h-10 w-10 text-red-800" />
          ))}
          {roll.blueDice.map((r, i) => (
            <Die key={i} roll={r} className={"h-10 w-10 text-blue-800"} />
          ))}
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
                  <Die key={i} roll={r} className={"h-10 w-10 text-blue-800"} />
                )),
            ]
          ) : (
            <Die
              roll={roll.resultDie}
              className={cn(
                "h-10 w-10",
                blueHigher(roll) ? "h-10 w-10 text-blue-800" : "text-red-400"
              )}
            />
          )}
          {descNode}
        </div>
      ),
    });
  }

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
        setCurrentDiceFilter(df);
      }
    }
  }, []);

  const { channel } = useChannel("rolls", "new", (message) => {
    if (session?.status !== "authenticated") {
      return;
    }
    const {
      roll,
      action1,
      action2,
      username,
    }: {
      roll: Roll;
      action1: string | undefined;
      action2: string | undefined;
      username: string;
    } = message.data;
    diceToast(roll, action1, action2, username);
  });

  const handleCurrentDiceFilterChange = (val: string) => {
    setCurrentDiceFilter(val);
    localStorage.setItem(DICE_FILTER_LOCAL_STORAGE_KEY, val);
  };

  async function handleRollButton(
    type: RollType,
    rollLeft: string,
    rollRight: string
  ) {
    if (!rollLeft && !rollRight) return;
    if (!rollLeft) {
      const [attribute, action] = rollRight.split("-") as [Attribute, string];
      const roll = await rollActions(type, attribute, action);
      if (isPrivate || !wsConnected) {
        diceToast(roll, action);
      } else {
        channel.publish("new", {
          roll,
          action1: action,
          action2: undefined,
          username,
        });
      }
    } else if (!rollRight) {
      const [attribute, action] = rollLeft.split("-") as [Attribute, string];
      const roll = await rollActions(type, attribute, action);
      if (isPrivate || !wsConnected) {
        diceToast(roll, action);
      } else {
        channel.publish("new", {
          roll,
          action1: action,
          action2: undefined,
          username,
        });
      }
    } else {
      const [attributeLeft, actionLeft] = rollLeft.split("-") as [
        Attribute,
        string
      ];
      const [attributeRight, actionRight] = rollRight.split("-") as [
        Attribute,
        string
      ];
      const roll = await rollActions(
        type,
        attributeLeft,
        actionLeft,
        attributeRight,
        actionRight
      );
      if (isPrivate || !wsConnected) {
        diceToast(roll, actionLeft, actionRight);
      } else {
        channel.publish("new", {
          roll,
          action1: actionLeft,
          action2: actionRight,
          username,
        });
      }
    }
    setRollLeft("");
    setRollRight("");
    setBonusDiceRed(0);
    setBonusDiceBlue(0);
  }

  async function handleFortuneRollButton(numDice: number) {
    const roll = await rollDice("fortune", 0, numDice);
    if (isPrivate || !wsConnected) {
      diceToast(roll);
    } else {
      channel.publish("new", {
        roll,
        action1: undefined,
        action2: undefined,
        username,
      });
    }
    setFortuneDice(0);
  }

  return (
    <RollContext.Provider
      value={{
        diceToast,
        bonusDiceRed,
        bonusDiceBlue,
        currentDiceFilter,
        fortuneDice,
        fetchNextPage,
        handleCurrentDiceFilterChange,
        hasNextPage,
        rollActions,
        rollDice,
        rolls,
        rollsArePending,
        isPrivate,
        setBonusDiceRed,
        setBonusDiceBlue,
        setFortuneDice,
        setRolls,
        setIsPrivate,
        refetchRolls,
        rollLeft,
        rollRight,
        setRollLeft,
        setRollRight,
        handleRollButton,
        handleFortuneRollButton,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
