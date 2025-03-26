import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import redis from "@/lib/redis";

async function getCharacterById(
  userid: string | undefined,
  charactername: string
) {
  if (!userid) {
    return null;
  }
  const character = await redis.get(
    `user:${userid}:character:${charactername}`
  );
  return character;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ characterName: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  const characterName = (await params).characterName;
  const sanitizedCharacterName = characterName.replaceAll(/%20/g, " ");

  try {
    const character = await getCharacterById(
      session.user.id,
      sanitizedCharacterName
    );
    return NextResponse.json(character);
  } catch (error) {
    console.error("Error getting character", error);
    return NextResponse.json(
      { error: "Error getting character" },
      { status: 500 }
    );
  }
}
