"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface PermissionsDialogProps {
  username: string;
  userid: string;
  initialPermissions?: string[];
}

export function PermissionsDialog({
  username,
  userid,
  initialPermissions = [],
}: PermissionsDialogProps) {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<string[]>(initialPermissions);
  const [newPermission, setNewPermission] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const fetchUserPermissions = async () => {
        try {
          const userResponse = await fetch(`/api/users/${userid}`);
          if (!userResponse.ok) {
            throw new Error("Failed to fetch user data");
          }
          const user = await userResponse.json();
          setUser(user);
          setPermissions(user.permissions || []);
        } catch (error) {
          console.error("Error fetching user permissions:", error);
        }
      };
      fetchUserPermissions();
    }
  }, [open, userid]);

  const handleAddPermission = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPermission.trim() && user) {
      const perms = [
        ...new Set([
          ...permissions,
          ...(user.permissions || []),
          newPermission.trim(),
        ]),
      ];
      setUser({
        ...user,
        permissions: perms,
      });
      setPermissions(perms);
      setNewPermission("");
    }
  };

  const handleRemovePermission = (permissionToRemove: string) => {
    const perms = permissions.filter((p) => p !== permissionToRemove);
    setPermissions(perms);
    if (user) {
      setUser({
        ...user,
        permissions: perms,
      });
    }
  };

  const handleSavePermissions = async () => {
    try {
      const response = await fetch(`/api/users/${user!.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to update permissions");
      }

      setOpen(false);
    } catch (error) {
      console.error("Error updating permissions:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Manage Permissions <span className="text-xs text-muted-foreground">({permissions.length})</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Permissions for {username}</DialogTitle>
          <DialogDescription>
            Add or remove permissions for this user.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <form onSubmit={handleAddPermission} className="flex gap-2">
            <Input
              value={newPermission}
              onChange={(e) => setNewPermission(e.target.value)}
              placeholder="Enter permission..."
              className="flex-1"
            />
            <Button type="submit">Add</Button>
          </form>

          <div className="space-y-2">
            {permissions.map((permission) => (
              <div
                key={permission}
                className="flex items-center justify-between bg-secondary p-2 rounded-md"
              >
                <span>{permission}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemovePermission(permission)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSavePermissions}>Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
