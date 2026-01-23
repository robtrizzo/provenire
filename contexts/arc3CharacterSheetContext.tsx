"use client";

import { ActionV3 } from "@/types/arc3";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import actions from "@/public/arc3/actions.json";

const SUPPORTED_VERSION = 3;
const MAX_ABILITIES = 6;
const MAX_SKILLS = 6;

interface CharacterSheetContextProps {
  actions: ActionV3[];
  abilities: ActionV3[];
  MAX_ABILITIES: number;
  skills: ActionV3[];
  MAX_SKILLS: number;
  bonds: ActionV3[];
  xpSpent: number;
  setActions: Dispatch<SetStateAction<ActionV3[]>>;
  updateAction: (updatedAction: ActionV3) => void;
  setXpSpent: Dispatch<SetStateAction<number>>;
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

const DEFAULT_ACTIONS: ActionV3[] = actions.Abilities.map((a) => ({
  name: a.name,
  description: a.description,
  type: "ability",
  level: [0],
}));

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [actions, setActions] = useState<ActionV3[]>(DEFAULT_ACTIONS);
  const [xpSpent, setXpSpent] = useState(0);

  const abilities: ActionV3[] = actions.filter((a) => a.type === "ability");
  const skills: ActionV3[] = actions.filter((a) => a.type === "skill");
  const bonds: ActionV3[] = actions.filter((a) => a.type === "bond");

  function updateAction(updatedAction: ActionV3) {
    setActions((prevActions) =>
      prevActions.map((action) =>
        action.name === updatedAction.name ? updatedAction : action,
      ),
    );
  }

  return (
    <CharacterSheetContext.Provider
      value={{
        actions,
        abilities,
        MAX_ABILITIES,
        skills,
        MAX_SKILLS,
        bonds,
        setActions,
        updateAction,
        xpSpent,
        setXpSpent,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
