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
  useState,
} from "react";
import actions from "@/public/arc3/actions.json";
import { nanoid } from "@/lib/nanoid";
import heritages from "@/public/heritages.json";
import backgrounds from "@/public/arc3/backgrounds.json";
import archetypes from "@/public/arc3/archetypes.json";
import skillsets from "@/public/arc3/skillsets.json";
import fightingStyles from "@/public/arc3/fighting_styles.json";
import aldams from "@/public/arc3/aldams.json";
import transformations from "@/public/arc3/transformations.json";
import donums from "@/public/arc3/donums.json";
import conditions from "@/public/arc3/conditions.json";
import remembrances from "@/public/arc3/remembrances.json";
import integrations from "@/public/arc3/integrations.json";
import responsibilities from "@/public/arc3/responsibilities.json";
import roles from "@/public/arc3/roles.json";
import {
  AldamV3,
  ArchetypeV3,
  BackgroundV3,
  Condition,
  DonumV3,
  FightingStyleV3,
  Heritage,
  Integration,
  Remembrance,
  Responsibility,
  Role,
  SkillsetSubclass,
  SkillsetV3,
  TransformationV3,
} from "@/types/game";
import { useMutation } from "@tanstack/react-query";

export const LOCAL_STORAGE_KEY = "charsheet-arc3";
export const SUPPORTED_VERSION = 3;

export const MAX_ABILITIES = 6;
export const MAX_SKILLS = 6;
export const DEFAULT_MAX_STRESS = 9;
export const DEFAULT_CONDITIONS = conditions.default;
export const DEFAULT_MAX_ADVANTAGE = 1;
export const DEFAULT_MAX_BLOOD = 2;
export const DEFAULT_MAX_WATER = 2;
export const DEFAULT_MAX_FOOD = 1;
export const DEFAULT_MAX_MATERIALS = 1;
export const DEFAULT_MAX_REP = 1;
export const DEFAULT_MAX_GOODWILL = 1;
export const DEFAULT_MAX_INTEL = 1;
export const DEFAULT_MAX_MANPOWER = 1;

export const OPTIONAL_CONDITONS = conditions.optional;

export const ALL_CONDITIONS = conditions;
export const ALL_HERITAGES = heritages;
export const ALL_BACKGROUNDS = backgrounds;
export const ALL_ARCHETYPES = archetypes;
export const ALL_SKILLSETS = skillsets;
export const ALL_FIGHTING_STYLES = fightingStyles;
export const ALL_ALDAMS = aldams;
export const ALL_TRANSFORMATIONS = transformations;
export const ALL_DONUMS = donums;
export const ALL_REMEMBRANCES = remembrances;
export const ALL_INTEGRATIONS = integrations;
export const ALL_RESPONSIBILITIES = responsibilities;
export const ALL_ROLES = roles;

const DEFAULT_ACTIONS: ActionV3[] = actions.Aptitudes.map((a) => ({
  name: a.name,
  description: a.description,
  type: "aptitude",
  level: [0],
}));

interface Resource {
  current: number;
  max: number;
  default: number;
}

const DEFAULT_STATE = {
  id: nanoid(),
  name: "",
  portrait: "",
  heritage: undefined,
  archetype: undefined,
  background: undefined,
  skillset: undefined,
  skillsetSubclass: undefined,
  fightingStyles: [],
  aldams: [],
  transformations: [],
  donums: [],
  remembrance: undefined,
  integration: undefined,
  responsibility: undefined,
  role: undefined,
  actions: DEFAULT_ACTIONS,
  xp: 0,
  xpSpent: 0,
  stress: 0,
  maxStress: 9,
  conditions: DEFAULT_CONDITIONS,
  currentConditions: [],
  resources: {
    advantage: {
      current: 0,
      max: DEFAULT_MAX_ADVANTAGE,
      default: DEFAULT_MAX_ADVANTAGE,
    },
    blood: { current: 0, max: DEFAULT_MAX_BLOOD, default: DEFAULT_MAX_BLOOD },
    water: { current: 0, max: DEFAULT_MAX_WATER, default: DEFAULT_MAX_WATER },
    food: { current: 0, max: DEFAULT_MAX_FOOD, default: DEFAULT_MAX_FOOD },
    materials: {
      current: 0,
      max: DEFAULT_MAX_MATERIALS,
      default: DEFAULT_MAX_MATERIALS,
    },
    rep: { current: 0, max: DEFAULT_MAX_REP, default: DEFAULT_MAX_REP },
    goodwill: {
      current: 0,
      max: DEFAULT_MAX_GOODWILL,
      default: DEFAULT_MAX_GOODWILL,
    },
    intel: { current: 0, max: DEFAULT_MAX_INTEL, default: DEFAULT_MAX_INTEL },
    manpower: {
      current: 0,
      max: DEFAULT_MAX_MANPOWER,
      default: DEFAULT_MAX_MANPOWER,
    },
  },
};

interface CharacterSheetState {
  id: string;
  name: string;
  portrait: string;
  heritage?: Heritage;
  archetype?: ArchetypeV3;
  background?: BackgroundV3;
  skillset?: SkillsetV3;
  skillsetSubclass?: SkillsetSubclass;
  fightingStyles: FightingStyleV3[];
  aldams: AldamV3[];
  transformations: TransformationV3[];
  donums: DonumV3[];
  remembrance?: Remembrance;
  integration?: Integration;
  actions: ActionV3[];
  responsibility?: Responsibility;
  role?: Role;
  xp: number;
  xpSpent: number;
  stress: number;
  maxStress: number;
  conditions: Condition[];
  currentConditions: Condition[];
  resources: Record<string, Resource>;
}

// Actions — add new cases here
type CharacterSheetAction =
  | { type: "SET_ACTIONS"; payload: ActionV3[] }
  | { type: "UPDATE_ACTION"; payload: ActionV3 }
  | { type: "SET_FIELD"; field: keyof CharacterSheetState; value: any }
  | { type: "SET_FIELDS"; payload: Partial<CharacterSheetState> }
  | {
      type: "UPDATE_RESOURCE";
      resource: string;
      field: "current" | "max";
      value: number;
    };

interface CharacterSheetContextProps {
  state: CharacterSheetState;
  dispatch: Dispatch<CharacterSheetAction>;
  // metadata
  localUpdatedAt: string | null;
  cloudUpdatedAt: string | null;
  saved: boolean;
  isSaving: boolean;
  isSavingAs: boolean;
  // controls
  save: () => Promise<void>;
  saveAs: (options?: { name?: string; switchToNew?: boolean }) => Promise<void>;
  newCharacter: () => void;
  loadCharacter: (data: string) => void;
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
    case "UPDATE_RESOURCE": {
      const res = state.resources[action.resource];
      const max = action.field === "max" ? Math.max(0, action.value) : res.max;
      const current =
        action.field === "current" ? Math.max(0, action.value) : res.current;
      return {
        ...state,
        resources: {
          ...state.resources,
          [action.resource]: { current, max, default: res.default },
        },
      };
    }
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

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const [localUpdatedAt, setLocalUpdatedAt] = useState<string | null>(null);
  const [cloudUpdatedAt, setCloudUpdatedAt] = useState<string | null>(null);
  const cloudUpdatedAtRef = useRef<string | null>(null);
  const [saved, setSaved] = useState(false);
  const suppressLocalSaveRef = useRef<boolean>(false);

  // load
  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) return;
    try {
      const {
        localUpdatedAt: savedAt,
        cloudUpdatedAt: savedCloudAt,
        ...parsed
      } = JSON.parse(data);
      if (savedAt) setLocalUpdatedAt(savedAt);
      if (savedCloudAt) {
        setCloudUpdatedAt(savedCloudAt);
        cloudUpdatedAtRef.current = savedCloudAt;
      }
      dispatch({ type: "SET_FIELDS", payload: parsed });
      if (savedAt) setLocalUpdatedAt(savedAt);
    } catch {
      // ignore malformed data
    }
  }, []);

  const loadCharacter = useCallback(
    (jsonString: string) => {
      try {
        const {
          localUpdatedAt: _local,
          cloudUpdatedAt: savedCloud, // keep this instead of discarding
          ...parsed
        } = JSON.parse(jsonString);

        // Suppress the auto-save effect so it doesn't stamp a new localUpdatedAt
        suppressLocalSaveRef.current = true;

        // Restore timestamps — local matches cloud so hasUnsavedChanges is false
        cloudUpdatedAtRef.current = savedCloud ?? null;
        setCloudUpdatedAt(savedCloud ?? null);
        setLocalUpdatedAt(savedCloud ?? null);

        dispatch({
          type: "SET_FIELDS",
          payload: { ...DEFAULT_STATE, ...parsed },
        });

        // Write localStorage manually since we suppressed the effect
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({
            ...DEFAULT_STATE,
            ...parsed,
            localUpdatedAt: savedCloud ?? null,
            cloudUpdatedAt: savedCloud ?? null,
          }),
        );
      } catch {
        // ignore malformed data
      }
    },
    [dispatch],
  );

  // save
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (suppressLocalSaveRef.current) {
      suppressLocalSaveRef.current = false;
      return; // skip — localUpdatedAt was already set by recordCloudSave
    }
    const timestamp = new Date().toISOString();
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        ...state,
        localUpdatedAt: timestamp,
        cloudUpdatedAt: cloudUpdatedAtRef.current,
      }),
    );
    setLocalUpdatedAt(timestamp);
  }, [state]);

  const recordCloudSave = useCallback((timestamp: string) => {
    cloudUpdatedAtRef.current = timestamp;
    setCloudUpdatedAt(timestamp);
    // Patch localStorage immediately so it persists without waiting for a state change
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      try {
        const parsed = JSON.parse(data);
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ ...parsed, cloudUpdatedAt: timestamp }),
        );
      } catch {}
    }
  }, []);

  const { mutateAsync: save, isPending: isSaving } = useMutation({
    mutationFn: async () => {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!data) return;
      const response = await fetch(`/api/characters/arc3`, {
        method: "POST",
        body: JSON.stringify({ character: data }),
      });
      return response.json();
    },
    onError: (error) => {
      console.error("Error saving character to cloud", error);
    },
    onSuccess: (data) => {
      if (data?.updatedAt) recordCloudSave(data.updatedAt);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    },
  });

  const { mutateAsync: saveAsMutation, isPending: isSavingAs } = useMutation({
    mutationFn: async ({
      name,
      switchToNew = true,
    }: {
      name?: string;
      switchToNew?: boolean;
    }) => {
      const newId = nanoid();
      const newName = name ?? state.name;
      const snapshot = JSON.stringify({
        ...state,
        id: newId,
        name: newName,
        localUpdatedAt: new Date().toISOString(),
        cloudUpdatedAt: cloudUpdatedAtRef.current,
      });
      const response = await fetch(`/api/characters/arc3`, {
        method: "POST",
        body: JSON.stringify({ character: snapshot }),
      });
      const data = await response.json();
      return { data, newId, newName, switchToNew };
    },
    onError: (error) => {
      console.error("Error saving character copy to cloud", error);
    },
    onSuccess: ({ data, newId, newName, switchToNew }) => {
      if (switchToNew) {
        suppressLocalSaveRef.current = true;
        dispatch({ type: "SET_FIELDS", payload: { id: newId, name: newName } });
        if (data?.updatedAt) recordCloudSave(data.updatedAt);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    },
  });

  const saveAs = useCallback(
    async (options?: {
      name?: string;
      switchToNew?: boolean;
    }): Promise<void> => {
      await saveAsMutation(options ?? {});
    },
    [saveAsMutation],
  );

  // new
  const newCharacter = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setLocalUpdatedAt(null);
    setCloudUpdatedAt(null);
    cloudUpdatedAtRef.current = null;
    suppressLocalSaveRef.current = true;
    dispatch({
      type: "SET_FIELDS",
      payload: { ...DEFAULT_STATE, id: nanoid() },
    });
  }, [dispatch]);

  const aptitudes = state.actions.filter((a) => a.type === "aptitude");
  const skills = state.actions.filter((a) => a.type === "skill");
  const bonds = state.actions.filter((a) => a.type === "bond");

  return (
    <CharacterSheetContext.Provider
      value={{
        state,
        dispatch,
        localUpdatedAt,
        cloudUpdatedAt,
        saved,
        isSaving,
        isSavingAs,
        save,
        saveAs,
        newCharacter,
        loadCharacter,
        aptitudes,
        skills,
        bonds,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}

export function useField<K extends keyof CharacterSheetState>(
  field: K,
  { debounceMs }: { debounceMs?: number } = {},
) {
  const { state, dispatch } = useCharacterSheet();
  const [localValue, setLocalValue] = useState(state[field]);
  const pendingRef = useRef<CharacterSheetState[K] | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  // Sync from external state when no debounce is pending
  useEffect(() => {
    if (pendingRef.current === null) {
      setLocalValue(state[field]);
    }
  }, [state[field]]);

  const setValue = useCallback(
    (value: CharacterSheetState[K]) => {
      if (!debounceMs) {
        dispatch({ type: "SET_FIELD", field, value });
        return;
      }
      setLocalValue(value as typeof localValue);
      pendingRef.current = value;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        pendingRef.current = null;
        timeoutRef.current = undefined;
        dispatch({ type: "SET_FIELD", field, value });
      }, debounceMs);
    },
    [dispatch, field, debounceMs],
  );

  // Flush pending value on unmount so data isn't lost
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        if (pendingRef.current !== null) {
          dispatch({ type: "SET_FIELD", field, value: pendingRef.current });
        }
      }
    };
  }, [dispatch, field]);

  return [debounceMs ? localValue : state[field], setValue] as const;
}

export function useFields({ debounceMs }: { debounceMs?: number } = {}) {
  const { state, dispatch } = useCharacterSheet();
  const [localState, setLocalState] = useState(state);
  const pendingRef = useRef<Partial<CharacterSheetState> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  // Sync from external state when no debounce is pending
  useEffect(() => {
    if (pendingRef.current === null) {
      setLocalState(state);
    }
  }, [state]);

  const set = useCallback(
    (partial: Partial<CharacterSheetState>) => {
      if (!debounceMs) {
        dispatch({ type: "SET_FIELDS", payload: partial });
        return;
      }
      setLocalState((prev) => ({ ...prev, ...partial }));
      pendingRef.current = { ...pendingRef.current, ...partial };
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const accumulated = pendingRef.current;
        pendingRef.current = null;
        timeoutRef.current = undefined;
        if (accumulated) {
          dispatch({ type: "SET_FIELDS", payload: accumulated });
        }
      }, debounceMs);
    },
    [dispatch, debounceMs],
  );

  // Flush on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        if (pendingRef.current) {
          dispatch({ type: "SET_FIELDS", payload: pendingRef.current });
        }
      }
    };
  }, [dispatch]);

  return [debounceMs ? localState : state, set] as const;
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

export function useResource(resource: string) {
  const { state, dispatch } = useCharacterSheet();
  const res = state.resources[resource];
  const set = useCallback(
    (field: "current" | "max", value: number) =>
      dispatch({ type: "UPDATE_RESOURCE", resource, field, value }),
    [dispatch, resource],
  );
  return [res, set] as const;
}
