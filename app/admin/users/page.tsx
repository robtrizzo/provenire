"use server";
import Breadcrumbs from "../(components)/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import { getAllUsers } from "@/handlers/users";
import { UsersTable } from "@/app/admin/users/(components)/users-table";

export default async function Page() {
  const users: User[] = await getAllUsers();
  users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Admin", href: "/admin" },
          { name: "Users", href: "#" },
        ]}
      />
      <TypographyH1>Manage Users</TypographyH1>
      <UsersTable users={users} />
    </>
  );
}
