"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RoleSelect } from "./role-select";
import { PermissionsDialog } from "@/app/admin/users/(components)/permissions-dialog";

export function UsersTable({ users }: { users: User[] }) {

  return (
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
        { users ? (
          users.map((user: User, idx: number) => (
            <TableRow key={ idx }>
              <TableCell>{ user.name }</TableCell>
              <TableCell>{ user.email }</TableCell>
              <TableCell>
                <RoleSelect userid={ user.id } userRole={user.role || "user"}/>
              </TableCell>
              <TableCell>
                <PermissionsDialog
                  userid={ user.id }
                  username={ user.name }
                  initialPermissions={ user.permissions }
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <div>Loading...</div>
        ) }
      </TableBody>
    </Table>
  );
}
