import OperativesProvider from "@/contexts/operativesContext";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <OperativesProvider>{children}</OperativesProvider>;
}
