"use server";

import CrewSheetProvider from "@/contexts/crewSheetContext";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <CrewSheetProvider>{children}</CrewSheetProvider>;
}
