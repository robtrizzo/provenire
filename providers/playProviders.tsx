"use client";
import CrewSheetProvider from "@/contexts/crewSheetContext";
import CharacterSheetProvider from "@/contexts/characterSheetContext";
import RollProvider from "@/contexts/rollContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CharacterSheetProvider>
      <RollProvider>
        <CrewSheetProvider>{children}</CrewSheetProvider>
      </RollProvider>
    </CharacterSheetProvider>
  );
}
