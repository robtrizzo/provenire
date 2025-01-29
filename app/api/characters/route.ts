import { NextResponse } from "next/server";
import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import redis, { findKeysByPattern } from "@/lib/redis";

async function getAllCharactersForUser(userId: string | undefined) {
  if (!userId) return [];
  const pattern = `user:${userId}:character:*`;
  const keys = await findKeysByPattern(pattern);
  const characters = await Promise.all(keys.map((key) => redis.get(key)));
  return characters;
}

async function getAllCharacters() {
  const pattern = `user:*:character:*`;
  const keys = await findKeysByPattern(pattern);
  const characters = await Promise.all(keys.map((key) => redis.get(key)));
  return characters;
}

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
    const characters =
      session?.user.role === "admin"
        ? await getAllCharacters()
        : await getAllCharactersForUser(session?.user.id);
    return NextResponse.json({ characters });
  } catch (error) {
    console.error("Error getting characters", error);
    return NextResponse.json(
      { error: "Error getting characters" },
      { status: 500 }
    );
  }
}
