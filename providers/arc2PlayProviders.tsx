"use client";
import CharacterSheetProvider from "@/contexts/arc2CharacterSheetContext";
import RollProvider from "@/contexts/arc2RollContext";
import EngagementRollProvider from "@/contexts/engagementRollContext";
import GroupRollProvider from "@/contexts/groupRollContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CharacterSheetProvider>
      <RollProvider>
        <GroupRollProvider>
          <EngagementRollProvider>{children}</EngagementRollProvider>
        </GroupRollProvider>
      </RollProvider>
    </CharacterSheetProvider>
  );
}
