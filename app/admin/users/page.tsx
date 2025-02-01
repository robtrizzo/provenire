"use server";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllUsers } from "@/handlers/users";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PermissionsDialog } from "./(components)/permissions-dialog";

export default async function Page() {
  const session = await auth();
  if (session?.user?.role !== "player") {
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

      <Table>
        <TableCaption>users table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border-r-slate-800 border-r-[1px]">
              username
            </TableHead>
            <TableHead>email</TableHead>
            <TableHead className="border-l-slate-800 border-l-[1px]">
              role
            </TableHead>
            <TableHead className="border-l-slate-800 border-l-[1px]">
              permissions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users ? (
            users.map((user: User, idx: number) => (
              <TableRow key={idx}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Select defaultValue={user.role}>
                    <SelectTrigger>
                      <SelectValue defaultValue={user.role} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">admin</SelectItem>
                      <SelectItem value="player">player</SelectItem>
                      <SelectItem value="user">user</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <PermissionsDialog
                    userid={user.id}
                    username={user.name}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
