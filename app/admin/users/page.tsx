"use server";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllUsers } from "@/handlers/users";
import { UsersTable } from "@/app/admin/users/(components)/users-table";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    redirect("/signin");
  }

  const users: User[] = await getAllUsers();
  users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-6">
      <TypographyH1>Manage Users</TypographyH1>

      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
      <UsersTable users={users} />
    </div>
  );
}
