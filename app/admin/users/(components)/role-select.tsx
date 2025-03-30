"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function RoleSelect({
  userid,
  userRole,
}: {
  userid: string;
  userRole: string;
}) {
  const { data: session } = useSession();
  const [role, setRole] = useState(userRole);

  const fetchUser = async (): Promise<User> => {
    // Fetch user data from the API to make sure we have the latest
    const userResponse = await fetch(`/api/users/${ userid }`);
    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data");
    }
    const fetchedUser = await userResponse.json() as User;
    if (!fetchedUser) {
      throw new Error("User not found");
    }
    return fetchedUser;
  };

  const handleSaveRole = async (role: string) => {
    try {
      const user = await fetchUser()
      user.role = role;
      const response = await fetch(`/api/users/${ user!.id }`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to update role");
      }
      setRole(role);
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <Select
      disabled={ session?.user.id === userid }
      defaultValue={ userRole }
      onValueChange={ handleSaveRole }
    >
      <SelectTrigger>
        <SelectValue defaultValue={ role }/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">admin</SelectItem>
        <SelectItem value="player">player</SelectItem>
        <SelectItem value="user">user</SelectItem>
        <SelectItem value="banned">banned</SelectItem>
      </SelectContent>
    </Select>
  );
}
