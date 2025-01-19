import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import redis from "@/lib/redis";

async function insertCharacter({
  userId,
  characterJSON,
}: {
  userId: string;
  characterJSON: any;
}) {
  const characterName = characterJSON?.name;
  if (!characterName) {
    throw new Error("No character name provided. Aborting insert.");
  }
  const key = `user:${userId}:character:${characterName}`;
  const res = await redis.set(key, characterJSON);
  console.log(`Redis set ${key} result: ${res}`);
}

export async function POST(request: Request): Promise<NextResponse> {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  if (!request.body) {
    return NextResponse.json({ error: "empty request body" }, { status: 400 });
  }

  const requestBody = await request.json();
  if (!requestBody.character) {
    return NextResponse.json(
      { error: "could not find character in request body" },
      { status: 400 }
    );
  }

  try {
    await insertCharacter({
      userId: session!.user!.id!,
      characterJSON: JSON.parse(requestBody.character),
    });
  } catch (error) {
    console.error("Error creating character:", error);
    return NextResponse.json(
      { error: "Error saving character" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "character saved successfully" },
    { status: 201 }
  );
}
