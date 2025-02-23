"use client";
import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { RoleSelect } from "./role-select";

export function UsersTable({ initialUsers }: { initialUsers: User[] }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      // Update the user's role in the database
      // TODO update this to use tanstack query
      await fetch(`/api/users/${userId}/role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      // TODO Refetch all users and update the users state
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return users.map((user: User, idx: number) => (
    <TableRow key={idx}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <RoleSelect user={user} onRoleChange={handleRoleChange} />
      </TableCell>
    </TableRow>
  ));
}
