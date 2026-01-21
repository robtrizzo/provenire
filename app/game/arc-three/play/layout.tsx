import Providers from "@/providers/arc3PlayProviders";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
