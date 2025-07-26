import BackgroundsProvider from "@/contexts/backgroundsContext";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <BackgroundsProvider>{children}</BackgroundsProvider>;
}
