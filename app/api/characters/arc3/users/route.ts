import { getAllCharactersForUser } from "@/handlers/characters";
import { checkAuth } from "@/lib/auth";
import { CharacterV3 } from "@/types/game";
import { NextResponse } from "next/server";

export async function GET() {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    let characters = await getAllCharactersForUser(session.user.id);

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
