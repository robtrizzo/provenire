import { AbilityDice, BondDice, SkillDice } from "@/lib/dice";
import { ActionV3 } from "@/types/arc3";
import type { Die } from "@/types/dice";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DieFace } from "@/components/dice/dice";

interface RollContextProps {
  dice: Die[];
  rollLeft: ActionV3 | undefined;
  rollRight: ActionV3 | undefined;
  currentDiceFilter: string;
  fetchNextPage: () => void;
  handleCurrentDiceFilterChange: (val: string) => void;
  hasNextPage: boolean;
  rollsArePending: boolean;
  isPrivate: boolean;
  connectionStatus: "connecting" | "connected" | "disconnected";
  refetchRolls: () => void;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
  setDice: React.Dispatch<React.SetStateAction<Die[]>>;
  setRollLeft: React.Dispatch<React.SetStateAction<ActionV3 | undefined>>;
  setRollRight: React.Dispatch<React.SetStateAction<ActionV3 | undefined>>;
  swapDice: (remove: ActionV3 | undefined, add: ActionV3) => void;
  addDice: (dice: Die[]) => void;
  removeDiceByLabel: (labelToRemove: string) => void;
  removeDieByLabel: (labelToRemove: string) => void;
  doRoll: (diceOverride?: Die[]) => void;
}

const RollContext = createContext<RollContextProps | undefined>(undefined);
const PAGE_SIZE = 40;
const DICE_FILTER_LOCAL_STORAGE_KEY = "dicehistory.selectedfilter";
const MAX_PUSH_DICE = 1;

export const useRoll = () => {
  const context = useContext(RollContext);
  if (!context) {
    throw new Error("useRoll must be used within a RollProvider");
  }
  return context;
};

export default function RollProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const session = useSession();
  const { toast } = useToast();

  const isAuthenticated = !!session?.data?.user?.id;
  const username = session?.data?.user.name || "";

  const [currentDiceFilter, setCurrentDiceFilter] = useState<string>("all");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");
  const [rollLeft, setRollLeft] = useState<ActionV3 | undefined>();
  const [rollRight, setRollRight] = useState<ActionV3 | undefined>();
  const [dice, setDice] = useState<Die[]>([]);

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

  const handleCurrentDiceFilterChange = (val: string) => {
    queryClient.invalidateQueries({ queryKey: ["rolls", val] });
    setCurrentDiceFilter(val);
    localStorage.setItem(DICE_FILTER_LOCAL_STORAGE_KEY, val);
  };

  function getDiceFromAction(action: ActionV3): Die[] {
    if (action.type === "ability") {
      return action.level.map((lvl) => ({
        ...AbilityDice[lvl as 0 | 1 | 2 | 3],
        label: action.name,
      }));
    }
    if (action.type === "skill") {
      return action.level.map((lvl) => ({
        ...SkillDice[lvl as 1 | 2 | 3 | 4],
        label: action.name,
      }));
    }
    if (action.type === "bond") {
      return action.level.map((lvl) => ({
        ...BondDice[lvl as 0 | 1 | 2 | 3 | 4],
        label: action.name,
      }));
    }
    return [];
  }

  function swapDice(remove: ActionV3 | undefined, add: ActionV3) {
    setDice([
      ...dice.filter((die) => (remove ? die.label !== remove.name : true)),
      ...getDiceFromAction(add),
    ]);
  }

  function addDice(add: Die[]) {
    setDice([...dice, ...add]);
  }

  function removeDiceByLabel(labelToRemove: string) {
    setDice([...dice.filter((die) => die.label !== labelToRemove)]);
  }

  function removeDieByLabel(labelToRemove: string) {
    const idx = dice.findIndex((die) => die.label === labelToRemove);
    if (idx !== -1) {
      setDice([...dice.slice(0, idx), ...dice.slice(idx + 1)]);
    }
  }

  function doRoll(diceOverride?: Die[]) {
    const diceToRoll = !!diceOverride ? diceOverride : dice;
    const rolledFaces: number[] = diceToRoll.reduce(
      (acc: number[], die) => [
        ...acc,
        Math.floor(Math.random() * die.faces.length),
      ],
      [],
    );
    toast({
      variant: "grid",
      // @ts-expect-error todo
      title: (
        <div className="w-full border-b border-border pt-1">
          {username && (
            <span className="absolute top-1 right-1 text-xs text-muted-foreground">
              {username}
            </span>
          )}
          <div>
            Rolled {rollLeft?.name}
            {rollRight ? ` + ${rollRight.name}` : ""}
          </div>
        </div>
      ),
      description: (
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          {rolledFaces.map((f, idx) => (
            <DieFace
              key={`${f}-${idx}`}
              size={84}
              face={diceToRoll[idx].faces[f]}
              variant={diceToRoll[idx].variant}
            />
          ))}
        </div>
      ),
    });
    if (!diceOverride) {
      setDice([]);
      setRollLeft(undefined);
      setRollRight(undefined);
    }
  }

  return (
    <RollContext.Provider
      value={{
        currentDiceFilter,
        fetchNextPage,
        handleCurrentDiceFilterChange,
        hasNextPage,
        rollsArePending,
        isPrivate,
        connectionStatus,
        dice,
        rollLeft,
        rollRight,
        setIsPrivate,
        refetchRolls,
        setDice,
        setRollLeft,
        setRollRight,
        swapDice,
        addDice,
        removeDiceByLabel,
        removeDieByLabel,
        doRoll,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
