"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { X } from "lucide-react";

interface PermissionsDialogProps {
    username: string;
    initialPermissions?: string[];
}

export function PermissionsDialog({
    username,
    initialPermissions = [],
}: PermissionsDialogProps) {
    const [permissions, setPermissions] = useState<string[]>(initialPermissions);
    const [newPermission, setNewPermission] = useState("");
    const [open, setOpen] = useState(false);

    const handleAddPermission = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPermission.trim()) {
            setPermissions([...permissions, newPermission.trim()]);
            setNewPermission("");
        }
    };

    const handleRemovePermission = (permissionToRemove: string) => {
        setPermissions(permissions.filter((p) => p !== permissionToRemove));
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Manage Permissions
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Manage Permissions for {username}</DialogTitle>
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
                        <Button
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
