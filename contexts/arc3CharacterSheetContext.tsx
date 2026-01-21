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

const SUPPORTED_VERSION = 3;

interface CharacterSheetContextProps {
  actions: ActionV3[];
  abilities: ActionV3[];
  skills: ActionV3[];
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

const DEFAULT_ACTIONS: ActionV3[] = [
  {
    name: "Charge",
    level: [0],
    type: "ability",
  },
  {
    name: "Consort",
    level: [0],
    type: "ability",
  },
  {
    name: "Prowl",
    level: [0],
    type: "ability",
  },
  {
    name: "Survey",
    level: [0],
    type: "ability",
  },
  {
    name: "Sway",
    level: [0],
    type: "ability",
  },
  {
    name: "Assess",
    level: [1],
    type: "skill",
  },
  {
    name: "Obfuscate",
    level: [1],
    type: "skill",
  },
  {
    name: "Inspire",
    level: [1],
    type: "skill",
  },
  {
    name: "Throatgore",
    level: [1],
    type: "skill",
  },
  {
    name: "Wreck",
    level: [1],
    type: "skill",
  },
];
const DEFAULT_BONDS: ActionV3[] = [
  {
    name: "Best Friend",
    level: [0],
    type: "bond",
  },
  {
    name: "Mom",
    level: [0],
    type: "bond",
  },
];

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [actions, setActions] = useState<ActionV3[]>([
    ...DEFAULT_ACTIONS,
    ...DEFAULT_BONDS,
  ]);
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
        skills,
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
