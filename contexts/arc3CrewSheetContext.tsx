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

export interface Resource {
  current: number;
  max: number;
}

export interface CrewSheetState {
  heat: number;
  escalation: number;
  resources: Record<string, Resource>;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const DEFAULT_RESOURCES: Record<string, Resource> = {
  blood: { current: 0, max: 2 },
  water: { current: 0, max: 2 },
  food: { current: 0, max: 1 },
  materials: { current: 0, max: 1 },
  rep: { current: 0, max: 1 },
  goodwill: { current: 0, max: 1 },
  intel: { current: 0, max: 1 },
  manpower: { current: 0, max: 1 },
};

const getDefaultState = (): CrewSheetState => ({
  heat: 0,
  escalation: 0,
  resources: DEFAULT_RESOURCES,
});

// ─── Actions ──────────────────────────────────────────────────────────────────

type CrewSheetAction =
  | { type: "SET_FIELD"; field: "heat" | "escalation"; value: number }
  | {
      type: "UPDATE_RESOURCE";
      resource: string;
      field: "current" | "max";
      value: number;
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
      const res = state.resources[action.resource];
      if (!res) return state;
      return {
        ...state,
        resources: {
          ...state.resources,
          [action.resource]: {
            ...res,
            [action.field]: Math.max(0, action.value),
          },
        },
      };
    }
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

export function useCrewResource(resource: string) {
  const { state, dispatch } = useCrewSheet();
  const res = state.resources[resource];
  const set = useCallback(
    (field: "current" | "max", value: number) =>
      dispatch({ type: "UPDATE_RESOURCE", resource, field, value }),
    [dispatch, resource],
  );
  return [res, set] as const;
}
