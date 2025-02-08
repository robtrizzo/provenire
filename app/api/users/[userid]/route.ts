import { checkAuth } from "@/lib/auth";
import {NextRequest, NextResponse} from "next/server";
import {getUser} from "@/handlers/users";
import redis from "@/lib/redis";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
) {
  const { error } = await checkAuth("player");
  if (error) return error;

  try {
    const userid = (await params).userid;
    const user = await request.json() as User;
    if (userid !== user.id) {
        return NextResponse.json({ error: "userid in URL must match userid in body" }, { status: 400 });
    }
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

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
) {
  const { error } = await checkAuth("player");
  if (error) return error;

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  const user = await getUser(userid);
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

