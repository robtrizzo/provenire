import { AbilityDice, SkillDice } from "@/lib/dice";
import { ActionV3 } from "@/types/arc3";
import { Die } from "@/types/dice";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

interface RollContextProps {
  dice: Die[];
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
  swapDice: (remove: ActionV3 | undefined, add: ActionV3) => void;
  addDice: (dice: Die[]) => void;
  removeDiceByLabel: (labelToRemove: string) => void;
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
  const queryClient = useQueryClient();
  const session = useSession();

  const isAuthenticated = !!session?.data?.user?.id;

  const [currentDiceFilter, setCurrentDiceFilter] = useState<string>("all");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");
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
        setIsPrivate,
        refetchRolls,
        setDice,
        swapDice,
        addDice,
        removeDiceByLabel,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
