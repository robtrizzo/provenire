import { checkAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function PUT(request: Request): Promise<NextResponse> {
    const { error } = await checkAuth("player");
    if (error) return error;

    try {
        const user = await request.json() as User;
        await redis.set(`user:${user.id}`, user);

        return NextResponse.json({ message: "User updated successfully", user });
    } catch (err) {
        console.error("Error fetching user", err);
        return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
        );
    }
}