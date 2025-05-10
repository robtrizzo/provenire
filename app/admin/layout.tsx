import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    redirect("/signin");
  }
  return <div className="p-6">{children}</div>;
}
