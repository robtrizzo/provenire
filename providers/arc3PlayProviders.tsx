"use client";

import CharacterSheetProvider from "@/contexts/arc3CharacterSheetContext";
import RollProvider from "@/contexts/arc3RollContext";
import { ReactNode } from "react";

export default function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <CharacterSheetProvider>
      <RollProvider>{children}</RollProvider>
    </CharacterSheetProvider>
  );
}
