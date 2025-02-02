import { checkUserAuthenticated, checkUserRole} from "@/lib/auth";
import { NextResponse } from "next/server";
import {auth} from "@/auth";
import {getAllUsers} from "@/handlers/users";

export async function GET() {
    const session = await auth();

    const unauthenticatedResponse = checkUserAuthenticated(session);
    if (unauthenticatedResponse) {
        return unauthenticatedResponse;
    }

    const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
    if (unauthorizedResponse) {
        return unauthorizedResponse;
    }

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