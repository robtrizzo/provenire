import { AptitudeDice, BondDice, SkillDice } from "@/lib/dice";
import { ActionV3 } from "@/types/arc3";
import type { Die } from "@/types/dice";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useToast } from "@/hooks/use-toast";
import { DieFace } from "@/components/dice/dice";
import { RollArc3 } from "@/types/roll";
import { useField } from "./arc3CharacterSheetContext";
import { RealtimeChannel } from "@supabase/supabase-js";
import supabase from "@/lib/supabase";
import { getActionsFromTag } from "@/lib/roll";

interface RollContextProps {
  dice: Die[];
  rollLeft: ActionV3 | undefined;
  rollRight: ActionV3 | undefined;
  rolls: RollArc3[];
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
  doRoll: (diceOverride?: Die[], tagOverride?: string) => void;
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
  const { toast } = useToast();
  const [name] = useField("name");
  const [rolls, setRolls] = useState<RollArc3[]>([]);

  const isAuthenticated = !!session?.data?.user?.id;
  const username = session?.data?.user.name || "";

  const [currentDiceFilter, setCurrentDiceFilter] = useState<string>("all");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [rollLeft, setRollLeft] = useState<ActionV3 | undefined>();
  const [rollRight, setRollRight] = useState<ActionV3 | undefined>();
  const [dice, setDice] = useState<Die[]>([]);

  const [channel, setChannel] = useState<RealtimeChannel>();
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");

  const diceToast = useCallback((roll: RollArc3) => {
    toast({
      variant: "grid",
      // @ts-expect-error todo
      title: (
        <div className="w-full border-b border-border pt-1">
          {roll.charName && (
            <span className="absolute top-1 right-1 text-xs text-muted-foreground">
              {roll.charName}
            </span>
          )}
          <div>Rolled {getActionsFromTag(roll.tag ?? "").join(" + ")}</div>
        </div>
      ),
      description: (
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          {roll.rolledFaces.map((f, idx) => (
            <DieFace
              key={`${f}-${idx}`}
              size={84}
              face={roll.dice[idx].faces[f]}
              variant={roll.dice[idx].variant}
            />
          ))}
        </div>
      ),
    });
  }, []);

  const handleRollEvent = useCallback(
    (roll: RollArc3) => {
      console.log("roll data", roll);
      diceToast(roll);
      if (currentDiceFilter === "all" || currentDiceFilter === roll.userid) {
        setRolls((prev) => [roll, ...prev]);
      }
    },
    [currentDiceFilter, setRolls, diceToast],
  );

  const handlersRef = useRef({
    handleRoll: handleRollEvent,
  });

  useEffect(() => {
    setConnectionStatus("connecting");
    const rollChannel = supabase.channel("rolls");

    rollChannel
      .on("broadcast", { event: "roll" }, (payload) => {
        const roll = JSON.parse(payload.payload);
        handlersRef.current.handleRoll(roll);
      })
      .subscribe();

    setChannel(rollChannel);
    setConnectionStatus("connected");

    return () => {
      rollChannel.unsubscribe();
      rollChannel.teardown();
      setConnectionStatus("disconnected");
    };
  }, []);

  const buildUrl = (val: string, cursor: number) => {
    const baseUrl = "/api/roll/arc3";
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

  const { mutateAsync: saveDiceRoll } = useMutation({
    mutationFn: async (roll: Partial<RollArc3>) => {
      const userId = session?.data?.user?.id;
      if (!userId) {
        return [];
      }
      const response = await fetch(`/api/roll/arc3/${userId}`, {
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

  useEffect(() => {
    if (rollPages?.pages) {
      // Flatten all pages into a single array of rolls
      const allRolls = rollPages.pages.flat();
      setRolls(allRolls);
    }
  }, [rollPages, setRolls]);

  const handleCurrentDiceFilterChange = (val: string) => {
    queryClient.invalidateQueries({ queryKey: ["rolls", val] });
    setCurrentDiceFilter(val);
    localStorage.setItem(DICE_FILTER_LOCAL_STORAGE_KEY, val);
  };

  function getDiceFromAction(action: ActionV3): Die[] {
    if (action.type === "aptitude") {
      return action.level.map((lvl) => ({
        ...AptitudeDice[lvl as 0 | 1 | 2 | 3],
        label: action.name,
        level: lvl,
      }));
    }
    if (action.type === "skill") {
      return action.level.map((lvl) => ({
        ...SkillDice[lvl as 1 | 2 | 3 | 4],
        label: action.name,
        level: lvl,
      }));
    }
    if (action.type === "bond") {
      return action.level.map((lvl) => ({
        ...BondDice[lvl as 0 | 1 | 2 | 3 | 4],
        label: action.name,
        level: lvl,
      }));
    }
    if (action.type === "fightingStyle") {
      return action.level.map((lvl) => ({
        ...SkillDice[lvl as 1 | 2 | 3 | 4],
        label: action.name,
        level: lvl,
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

  function buildRoll(
    dice: Die[],
    rolledFaces: number[],
    tag: string,
  ): RollArc3 {
    const userId = session?.data?.user?.id;
    if (!userId) throw new Error("User must be signed in");
    return {
      dice,
      rolledFaces,
      charName: name,
      userid: userId,
      timestamp: new Date().toISOString(),
      tag,
    };
  }

  function buildTag(): string {
    if (rollLeft && rollRight) return `${rollLeft.name} | ${rollRight.name}`;
    return rollLeft?.name ?? rollRight?.name ?? "";
  }

  async function doRoll(diceOverride?: Die[], tagOverride?: string) {
    const diceToRoll = !!diceOverride ? diceOverride : dice;
    const rolledFaces: number[] = diceToRoll.reduce(
      (acc: number[], die) => [
        ...acc,
        Math.floor(Math.random() * die.faces.length),
      ],
      [],
    );
    try {
      const roll = buildRoll(
        diceToRoll,
        rolledFaces,
        tagOverride ?? buildTag(),
      );
      diceToast(roll);
      if (!isPrivate) {
        await saveDiceRoll(roll);
        setRolls((prevRolls) => [roll, ...prevRolls]);
        if (channel) {
          channel.send({
            type: "broadcast",
            event: "roll",
            payload: JSON.stringify(roll),
          });
        }
      }
    } catch (error) {
      console.error(`Error while trying to save roll: ${error}`);
    }
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
        rolls,
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
