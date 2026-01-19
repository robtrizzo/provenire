"use client";

import { createContext, ReactNode, useContext } from "react";

const SUPPORTED_VERSION = 3;

interface CharacterSheetContextProps {}

const CharacterSheetContext = createContext<
  CharacterSheetContextProps | undefined
>(undefined);

export const useCharacterSheet = () => {
  const context = useContext(CharacterSheetContext);
  if (!context) {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider"
    );
  }
  return context;
};

export default function CharacterSheetProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CharacterSheetContext.Provider value={{}}>
      {children}
    </CharacterSheetContext.Provider>
  );
}
