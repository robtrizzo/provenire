import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
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
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    const characters =
      session.user.role === "admin"
        ? await getAllCharacters()
        : await getAllCharactersForUser(session.user.id);
    return NextResponse.json({ characters });
  } catch (error) {
    console.error("Error getting characters", error);
    return NextResponse.json(
      { error: "Error getting characters" },
      { status: 500 }
    );
  }
}
