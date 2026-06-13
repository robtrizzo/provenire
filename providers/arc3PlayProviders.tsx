"use client";

import CharacterSheetProvider from "@/contexts/arc3CharacterSheetContext";
import RollProvider from "@/contexts/arc3RollContext";
import CrewSheetProvider from "@/contexts/arc3CrewSheetContext";
import { ReactNode } from "react";

export default function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <CrewSheetProvider>
      <CharacterSheetProvider>
        <RollProvider>{children}</RollProvider>
      </CharacterSheetProvider>
    </CrewSheetProvider>
  );
}
