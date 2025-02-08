import { checkAuth} from "@/lib/auth";
import { NextResponse } from "next/server";
import {getAllUsers} from "@/handlers/users";

export async function GET() {
    const { error } = await checkAuth("player");
    if (error) return error;

    try {
        const users = await getAllUsers();
        if (!users) {
            return NextResponse.json({ error: "No users found" }, { status: 404 });
        }
        return NextResponse.json(users);
    } catch (err) {
        console.error("Error fetching users", err);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}
