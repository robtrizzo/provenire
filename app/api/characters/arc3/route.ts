import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import {
  getAllCharacters,
  getAllCharactersForUser,
  insertCharacter,
} from "@/handlers/characters";
import { CharacterV3 } from "@/types/game";

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
      { status: 400 },
    );
  }

  let characterJSON = JSON.parse(requestBody.character);
  const updatedAt = new Date().toISOString();
  characterJSON = {
    ...characterJSON,
    player: { id: session.user.id, name: session.user.name! },
    version: 3,
    cloudUpdatedAt: updatedAt,
  };

  try {
    await insertCharacter({
      userID: session.user.id,
      characterJSON,
    });
  } catch (error) {
    console.error("Error creating character:", error);
    return NextResponse.json(
      { error: "Error saving character" },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "character saved successfully", updatedAt },
    { status: 201 },
  );
}

export async function GET() {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    let characters =
      session.user.role === "admin"
        ? await getAllCharacters()
        : await getAllCharactersForUser(session.user.id);

    characters = characters
      .map((c) => c as CharacterV3)
      .filter((c) => c.version === 3);

    return NextResponse.json({ characters });
  } catch (error) {
    console.error("Error getting characters", error);
    return NextResponse.json(
      { error: "Error getting characters" },
      { status: 500 },
    );
  }
}
