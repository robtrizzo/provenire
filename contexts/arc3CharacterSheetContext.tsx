"use client";

import { ActionV3 } from "@/types/arc3";
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import actions from "@/public/arc3/actions.json";

export const LOCAL_STORAGE_KEY = "charsheet-arc3";
export const SUPPORTED_VERSION = 3;
export const MAX_ABILITIES = 6;
export const MAX_SKILLS = 6;
export const DEFAULT_CONDITIONS = [
  "Insecure",
  "Afraid",
  "Angry",
  "Hopeless",
  "Guilty",
];

interface CharacterSheetState {
  actions: ActionV3[];
  xp: number;
  xpSpent: number;
  stress: number;
  maxStress: number;
  conditions: string[];
}

// Actions — add new cases here
type CharacterSheetAction =
  | { type: "SET_ACTIONS"; payload: ActionV3[] }
  | { type: "UPDATE_ACTION"; payload: ActionV3 }
  | { type: "SET_FIELD"; field: keyof CharacterSheetState; value: any }
  | { type: "SET_FIELDS"; payload: Partial<CharacterSheetState> };

interface CharacterSheetContextProps {
  state: CharacterSheetState;
  dispatch: Dispatch<CharacterSheetAction>;
  // derived values
  aptitudes: ActionV3[];
  skills: ActionV3[];
  bonds: ActionV3[];
}

function reducer(
  state: CharacterSheetState,
  action: CharacterSheetAction,
): CharacterSheetState {
  switch (action.type) {
    case "SET_ACTIONS":
      return { ...state, actions: action.payload };
    case "UPDATE_ACTION":
      return {
        ...state,
        actions: state.actions.map((a) =>
          a.name === action.payload.name ? action.payload : a,
        ),
      };
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_FIELDS":
      return { ...state, ...action.payload };
  }
}

const CharacterSheetContext = createContext<
  CharacterSheetContextProps | undefined
>(undefined);

export const useCharacterSheet = () => {
  const context = useContext(CharacterSheetContext);
  if (!context) {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider",
    );
  }
  return context;
};

const DEFAULT_ACTIONS: ActionV3[] = actions.Aptitudes.map((a) => ({
  name: a.name,
  description: a.description,
  type: "aptitude",
  level: [0],
}));

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, {
    actions: DEFAULT_ACTIONS,
    xp: 0,
    xpSpent: 0,
    stress: 0,
    maxStress: 9,
    conditions: [],
  });

  const aptitudes = state.actions.filter((a) => a.type === "aptitude");
  const skills = state.actions.filter((a) => a.type === "skill");
  const bonds = state.actions.filter((a) => a.type === "bond");

  const loaded = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      try {
        const parsed = JSON.parse(data) as Partial<CharacterSheetState>;
        dispatch({ type: "SET_FIELDS", payload: parsed });
      } catch {
        // ignore corrupt data
      }
    }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !loaded.current) return;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <CharacterSheetContext.Provider
      value={{
        state,
        dispatch,
        aptitudes,
        skills,
        bonds,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}

export function useField<K extends keyof CharacterSheetState>(field: K) {
  const { state, dispatch } = useCharacterSheet();
  const setValue = useCallback(
    (value: CharacterSheetState[K]) => {
      dispatch({ type: "SET_FIELD", field, value });
    },
    [dispatch, field],
  );
  return [state[field], setValue] as const;
}

export function useFields() {
  const { state, dispatch } = useCharacterSheet();
  const set = useCallback(
    (partial: Partial<CharacterSheetState>) => {
      dispatch({ type: "SET_FIELDS", payload: partial });
    },
    [dispatch],
  );
  return [state, set] as const;
}

export function useActions() {
  const { state, dispatch } = useCharacterSheet();
  return {
    actions: state.actions,
    setActions: useCallback(
      (actions: ActionV3[]) =>
        dispatch({ type: "SET_ACTIONS", payload: actions }),
      [dispatch],
    ),
    updateAction: useCallback(
      (action: ActionV3) =>
        dispatch({ type: "UPDATE_ACTION", payload: action }),
      [dispatch],
    ),
  };
}
