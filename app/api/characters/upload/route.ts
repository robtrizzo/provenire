import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import redis from "@/lib/redis";
import { Character } from "@/types/game";
import { User } from "next-auth";

async function insertCharacter({
  user,
  characterJSON,
}: {
  user: User;
  characterJSON: Character;
}) {
  const characterName = characterJSON?.name;
  if (!characterName) {
    throw new Error("No character name provided. Aborting insert.");
  }
  characterJSON = {
    ...characterJSON,
    updatedAt: new Date(),
    player: user.name!,
  };
  const key = `user:${user.id}:character:${characterName}`;
  await redis.set(key, characterJSON);
}

export async function POST(request: Request): Promise<NextResponse> {
  const { session, error } = await checkAuth("player");
  if (error) return error;

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
      user: session.user,
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
