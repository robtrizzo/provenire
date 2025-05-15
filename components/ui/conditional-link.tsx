import { ReactNode } from "react";
import { checkAuth } from "@/lib/auth";
import Link from "next/link";

export default async function ConditionalLink({
  children,
  perm,
  href,
}: {
  children: ReactNode;
  perm: string;
  href: string;
}) {
  const { error } = await checkAuth("user", [perm]);
  if (!perm || error) return children;
  return (
    <Link href={href}>
      <span className="underline text-red-500">{children}</span>
    </Link>
  );
}
