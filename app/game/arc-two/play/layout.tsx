"use client";
import Providers from "@/providers/arc2PlayProviders";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
