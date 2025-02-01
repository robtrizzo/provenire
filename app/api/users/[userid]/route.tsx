import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";

async function getUser(userid: string) {
  const user = await redis.get(`user:${userid}`);
  return user as User;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }
  const userid = (await params).slug;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }
  return NextResponse.json({ message: "todo", userid });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userid: string }> }
) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  const user = await getUser(userid);
  return NextResponse.json(user);
}

