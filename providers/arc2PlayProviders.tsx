"use client";
import CharacterSheetProvider from "@/contexts/arc2CharacterSheetContext";
import RollProvider from "@/contexts/arc2RollContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CharacterSheetProvider>
      <RollProvider>{children}</RollProvider>
    </CharacterSheetProvider>
  );
}
