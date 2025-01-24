"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

export function RoleSelect({
  user,
  onRoleChange,
}: {
  user: User;
  onRoleChange: (userId: string, newRole: string) => void;
}) {
  const { data: session } = useSession();

  const handleChange = (newRole: string) => {
    onRoleChange(user.id, newRole);
  };
  return (
    <Select
      disabled={session?.user.id === user.id}
      defaultValue={user.role}
      onValueChange={handleChange}
    >
      <SelectTrigger>
        <SelectValue defaultValue={user.role} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">admin</SelectItem>
        <SelectItem value="user">user</SelectItem>
      </SelectContent>
    </Select>
  );
}
