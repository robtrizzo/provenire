"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import supabase from "@/lib/supabase";

export const CREW_SHEET_TABLE = "arc3_crew_sheets";
export const CREW_SHEET_ID = "arc3-main";
const SAVE_DEBOUNCE_MS = 1500;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResourceStore {
  lair: Record<string, Resource>;
  vault: Record<string, Resource>;
}

export interface Resource {
  current: number;
  max: number;
}

export interface ItemTrait {
  name: string;
  description: string;
  tag?: "positive" | "negative";
}

export interface ItemEntry {
  id: string;
  name: string;
  type: "equipment" | "alchemy";
  ticks: number;
  traits: ItemTrait[];
  slots: number;
}

export interface GangTrait {
  name: string;
  description: string;
  tag?: "positive" | "negative";
}

export interface GangEntry {
  id: string;
  name: string;
  ticks: number;
  traits: GangTrait[];
  toughness: {
    max: number;
    current: number;
  };
}

export interface CrewAdvance {
  name: string;
  description: string;
  ticks: {
    max: number;
    current: number;
  };
}

export interface CrewAdvanceBlock {
  id: string;
  name: string;
  advances: CrewAdvance[];
  progression: "adhoc" | "sequence";
}

export interface CrewAdvanceSection {
  id: string;
  name: string;
  crewAdvanceBlocks: CrewAdvanceBlock[];
}

export interface CrewSheetState {
  heat: number;
  escalation: number;
  resources: ResourceStore;
  items: ItemEntry[];
  crewAdvanceSections: CrewAdvanceSection[];
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const DEFAULT_RESOURCES: ResourceStore = {
  lair: {
    blood: { current: 0, max: 2 },
    water: { current: 0, max: 2 },
    food: { current: 0, max: 1 },
    materials: { current: 0, max: 1 },
    rep: { current: 0, max: 1 },
    goodwill: { current: 0, max: 1 },
    intel: { current: 0, max: 1 },
    manpower: { current: 0, max: 1 },
  },
  vault: {
    blood: { current: 0, max: 4 },
    water: { current: 0, max: 4 },
    food: { current: 0, max: 4 },
    materials: { current: 0, max: 4 },
  },
};

const getDefaultState = (): CrewSheetState => ({
  heat: 0,
  escalation: 0,
  resources: DEFAULT_RESOURCES,
  items: [],
  crewAdvanceSections: [],
});

// ─── Actions ──────────────────────────────────────────────────────────────────

type CrewSheetAction =
  | { type: "SET_FIELD"; field: "heat" | "escalation"; value: number }
  | {
      type: "UPDATE_RESOURCE";
      location: "lair" | "vault";
      resource: string;
      field: "current" | "max";
      value: number;
    }
  | { type: "ADD_ITEM"; payload: ItemEntry }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_ITEM"; id: string; changes: Partial<Omit<ItemEntry, "id">> }
  | { type: "ADD_SECTION"; payload: CrewAdvanceSection }
  | { type: "REMOVE_SECTION"; id: string }
  | {
      type: "UPDATE_SECTION";
      id: string;
      changes: Partial<Pick<CrewAdvanceSection, "name">>;
    }
  | { type: "ADD_CAB"; sectionId: string; payload: CrewAdvanceBlock }
  | { type: "REMOVE_CAB"; sectionId: string; id: string }
  | {
      type: "UPDATE_CAB";
      sectionId: string;
      id: string;
      changes: Partial<Omit<CrewAdvanceBlock, "id">>;
    }
  | { type: "SYNC_REMOTE"; payload: Partial<CrewSheetState> };

// ─── Reducer ──────────────────────────────────────────────────────────────────

function reducer(
  state: CrewSheetState,
  action: CrewSheetAction,
): CrewSheetState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: Math.max(0, action.value) };
    case "UPDATE_RESOURCE": {
      const store = state.resources[action.location];
      const res = store[action.resource];
      if (!res) return state;
      return {
        ...state,
        resources: {
          ...state.resources,
          [action.location]: {
            ...store,
            [action.resource]: {
              ...res,
              [action.field]: Math.max(0, action.value),
            },
          },
        },
      };
    }
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, ...action.changes } : i,
        ),
      };
    case "ADD_SECTION":
      return {
        ...state,
        crewAdvanceSections: [...state.crewAdvanceSections, action.payload],
      };
    case "REMOVE_SECTION":
      return {
        ...state,
        crewAdvanceSections: state.crewAdvanceSections.filter(
          (s) => s.id !== action.id,
        ),
      };
    case "UPDATE_SECTION":
      return {
        ...state,
        crewAdvanceSections: state.crewAdvanceSections.map((s) =>
          s.id === action.id ? { ...s, ...action.changes } : s,
        ),
      };
    case "ADD_CAB":
      return {
        ...state,
        crewAdvanceSections: state.crewAdvanceSections.map((s) =>
          s.id === action.sectionId
            ? {
                ...s,
                crewAdvanceBlocks: [...s.crewAdvanceBlocks, action.payload],
              }
            : s,
        ),
      };
    case "REMOVE_CAB":
      return {
        ...state,
        crewAdvanceSections: state.crewAdvanceSections.map((s) =>
          s.id === action.sectionId
            ? {
                ...s,
                crewAdvanceBlocks: s.crewAdvanceBlocks.filter(
                  (b) => b.id !== action.id,
                ),
              }
            : s,
        ),
      };
    case "UPDATE_CAB":
      return {
        ...state,
        crewAdvanceSections: state.crewAdvanceSections.map((s) =>
          s.id === action.sectionId
            ? {
                ...s,
                crewAdvanceBlocks: s.crewAdvanceBlocks.map((b) =>
                  b.id === action.id ? { ...b, ...action.changes } : b,
                ),
              }
            : s,
        ),
      };
    case "SYNC_REMOTE":
      return {
        ...getDefaultState(),
        ...action.payload,
        resources: {
          ...DEFAULT_RESOURCES,
          ...(action.payload.resources ?? {}),
        },
      };
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface CrewSheetContextProps {
  state: CrewSheetState;
  dispatch: Dispatch<CrewSheetAction>;
  isConnected: boolean;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

const CrewSheetContext = createContext<CrewSheetContextProps | undefined>(
  undefined,
);

export const useCrewSheet = () => {
  const ctx = useContext(CrewSheetContext);
  if (!ctx)
    throw new Error("useCrewSheet must be used within a CrewSheetProvider");
  return ctx;
};

// ─── Provider ─────────────────────────────────────────────────────────────────

export default function CrewSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, getDefaultState());
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSyncingRef = useRef(false);
  const prevStateRef = useRef<CrewSheetState | null>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const applyRemoteSync = useCallback((payload: Partial<CrewSheetState>) => {
    isSyncingRef.current = true;
    dispatch({ type: "SYNC_REMOTE", payload });
  }, []);

  // ── Load ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    let mounted = true;
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/crew/arc3");
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        if (!mounted || !data) return;
        applyRemoteSync(data.public_data ?? {});
      } catch (e) {
        if (mounted) setError("Failed to load crew sheet.");
        console.error("[CrewSheet] load error", e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [applyRemoteSync]);

  // ── Realtime ──────────────────────────────────────────────────────────────

  useEffect(() => {
    const channel = supabase
      .channel(`crew_sheet:${CREW_SHEET_ID}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: CREW_SHEET_TABLE,
          filter: `id=eq.${CREW_SHEET_ID}`,
        },
        (payload) => {
          const row = payload.new as { public_data?: Partial<CrewSheetState> };
          if (row.public_data) applyRemoteSync(row.public_data);
        },
      )
      .subscribe((status) => {
        setIsConnected(status === "SUBSCRIBED");
      });
    return () => {
      setIsConnected(false);
      supabase.removeChannel(channel);
    };
  }, [applyRemoteSync]);

  // ── Debounced save ────────────────────────────────────────────────────────

  useEffect(() => {
    if (isSyncingRef.current) {
      isSyncingRef.current = false;
      prevStateRef.current = state;
      return;
    }

    const prev = prevStateRef.current;
    prevStateRef.current = state;

    if (!prev || isLoading || prev === state) return;

    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(async () => {
      setIsSaving(true);
      try {
        const res = await fetch("/api/crew/arc3", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ public_data: state }),
        });
        if (!res.ok) throw new Error(await res.text());
      } catch (e) {
        console.error("[CrewSheet] save error", e);
      } finally {
        setIsSaving(false);
      }
    }, SAVE_DEBOUNCE_MS);
  }, [state, isLoading]);

  return (
    <CrewSheetContext.Provider
      value={{ state, dispatch, isConnected, isLoading, isSaving, error }}
    >
      {children}
    </CrewSheetContext.Provider>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useCrewResource(location: "lair" | "vault", resource: string) {
  const { state, dispatch } = useCrewSheet();
  const res = state.resources[location][resource];
  const set = useCallback(
    (field: "current" | "max", value: number) =>
      dispatch({ type: "UPDATE_RESOURCE", location, resource, field, value }),
    [dispatch, resource],
  );
  return [res, set] as const;
}

export function useItems() {
  const { state, dispatch } = useCrewSheet();
  return {
    items: state.items,
    addItem: useCallback(
      (entry: ItemEntry) => dispatch({ type: "ADD_ITEM", payload: entry }),
      [dispatch],
    ),
    removeItem: useCallback(
      (id: string) => dispatch({ type: "REMOVE_ITEM", id }),
      [dispatch],
    ),
    updateItem: useCallback(
      (id: string, changes: Partial<Omit<ItemEntry, "id">>) =>
        dispatch({ type: "UPDATE_ITEM", id, changes }),
      [dispatch],
    ),
  };
}

export function useCrewAdvanceSections() {
  const { state, dispatch } = useCrewSheet();
  return {
    sections: state.crewAdvanceSections,
    addSection: useCallback(
      (entry: CrewAdvanceSection) =>
        dispatch({ type: "ADD_SECTION", payload: entry }),
      [dispatch],
    ),
    removeSection: useCallback(
      (id: string) => dispatch({ type: "REMOVE_SECTION", id }),
      [dispatch],
    ),
    updateSection: useCallback(
      (id: string, changes: Partial<Pick<CrewAdvanceSection, "name">>) =>
        dispatch({ type: "UPDATE_SECTION", id, changes }),
      [dispatch],
    ),
  };
}

export function useCrewAdvanceBlocks(sectionId: string) {
  const { state, dispatch } = useCrewSheet();
  const section = state.crewAdvanceSections.find((s) => s.id === sectionId);
  return {
    crewAdvanceBlocks: section?.crewAdvanceBlocks ?? [],
    addCAB: useCallback(
      (entry: CrewAdvanceBlock) =>
        dispatch({ type: "ADD_CAB", sectionId, payload: entry }),
      [dispatch, sectionId],
    ),
    removeCAB: useCallback(
      (id: string) => dispatch({ type: "REMOVE_CAB", sectionId, id }),
      [dispatch, sectionId],
    ),
    updateCAB: useCallback(
      (id: string, changes: Partial<Omit<CrewAdvanceBlock, "id">>) =>
        dispatch({ type: "UPDATE_CAB", sectionId, id, changes }),
      [dispatch, sectionId],
    ),
  };
}
