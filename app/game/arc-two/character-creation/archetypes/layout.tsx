import ArchetypesProvider from "@/contexts/archetypesContext";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <ArchetypesProvider>{children}</ArchetypesProvider>;
}
