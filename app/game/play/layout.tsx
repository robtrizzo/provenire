"use server";

import CrewSheetProvider from "@/contexts/crewSheetContext";
import CharacterSheetProvider from "@/contexts/characterSheetContext";
import RollProvider from "@/contexts/rollContext";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <CharacterSheetProvider>
      <RollProvider>
        <CrewSheetProvider>{children}</CrewSheetProvider>
      </RollProvider>
    </CharacterSheetProvider>
  );
}
