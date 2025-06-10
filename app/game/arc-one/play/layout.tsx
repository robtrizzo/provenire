"use server";

import Providers from "@/providers/playProviders";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
