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
  _: NextRequest,
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

async function deleteCharacterByKey(key: string) {
  if (!key) {
    console.error("No key provided to deleteCharacterByKey");
    return;
  }
  await redis.del(key);
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ characterName: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  /**
   * this gets a bit weird because the charactername param is used
   * to store the entire key for deletion
   *
   * key: user:userId:character:characterName
   */
  const key = (await params).characterName;

  const userId = key.split(":")[1];
  const isAdmin = session.user.role === "admin";
  if (!isAdmin && session.user.id !== userId) {
    return NextResponse.json({ error: "Access denied." }, { status: 401 });
  }

  const sanitizedKey = key.replaceAll(/%20/g, " ");
  await deleteCharacterByKey(sanitizedKey);
  return NextResponse.json({ deleted: sanitizedKey });
}
