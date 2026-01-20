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
  setActions: Dispatch<SetStateAction<ActionV3[]>>;
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
    level: [1],
    type: "ability",
  },
  {
    name: "Acrobatics",
    level: [1, 1],
    type: "ability",
  },
  {
    name: "Bluster",
    level: [2],
    type: "ability",
  },
  {
    name: "Throatgore",
    level: [1],
    type: "skill",
  },
  {
    name: "Defy",
    level: [2],
    type: "skill",
  },
  {
    name: "Wreck",
    level: [2, 1],
    type: "skill",
  },
];

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [actions, setActions] = useState<ActionV3[]>(DEFAULT_ACTIONS);

  const abilities: ActionV3[] = actions.filter((a) => a.type === "ability");
  const skills: ActionV3[] = actions.filter((a) => a.type === "skill");

  return (
    <CharacterSheetContext.Provider
      value={{ actions, abilities, skills, setActions }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
