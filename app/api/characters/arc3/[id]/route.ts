import {
  deleteCharacterByKey,
  getCharacterById,
  insertCharacter,
} from "@/handlers/characters";
import { checkAuth } from "@/lib/auth";
import { CharacterV3 } from "@/types/game";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  const id = (await params).id;
  const sanitizedId = id.replaceAll(/%20/g, " ");

  try {
    const character = await getCharacterById(session.user.id, sanitizedId);
    return NextResponse.json(character);
  } catch (error) {
    console.error("Error getting character", error);
    return NextResponse.json(
      { error: "Error getting character" },
      { status: 500 },
    );
  }
}

export async function PUT(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  const id = (await params).id;
  const sanitizedId = id.replaceAll(/%20/g, " ");

  try {
    const character = (await getCharacterById(
      session.user.id,
      sanitizedId,
    )) as CharacterV3;
    if (!character) {
      return NextResponse.json(
        { error: "Character not found" },
        { status: 404 },
      );
    }
    if (character.player.id !== session.user.id) {
      return NextResponse.json(
        { error: "Access denied. You do not own this character." },
        { status: 403 },
      );
    }
    character.updatedAt = new Date();
    await insertCharacter({
      userID: session.user.id,
      characterJSON: character,
    });
    return NextResponse.json(
      { message: "Character updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating character", error);
    return NextResponse.json(
      { error: "Error updating character" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;
  const isAdmin = session.user.role === "admin";

  const key = (await params).id;
  const sanitizedKey = key.replaceAll(/%20/g, " ");

  const playerId = new URL(req.url).searchParams.get("playerId");
  const targetUserId = isAdmin && playerId ? playerId : session.user.id;

  if (!isAdmin && session.user.id !== targetUserId) {
    return NextResponse.json({ error: "Access denied." }, { status: 401 });
  }

  await deleteCharacterByKey(targetUserId, sanitizedKey);
  return NextResponse.json({ deleted: sanitizedKey });
}
