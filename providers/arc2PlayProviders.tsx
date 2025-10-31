"use client";
import CharacterSheetProvider from "@/contexts/arc2CharacterSheetContext";
import RollProvider from "@/contexts/arc2RollContext";
import EngagementRollProvider from "@/contexts/engagementRollContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CharacterSheetProvider>
      <RollProvider>
        <EngagementRollProvider>{children}</EngagementRollProvider>
      </RollProvider>
    </CharacterSheetProvider>
  );
}
