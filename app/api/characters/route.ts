import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import {
  getAllCharacters,
  getAllCharactersForUser,
} from "@/handlers/characters";
import { Character } from "@/types/game";

export async function GET(req: Request) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    const { searchParams } = new URL(req.url);
    const version = searchParams.get("v");
    let characters =
      session.user.role === "admin"
        ? await getAllCharacters()
        : await getAllCharactersForUser(session.user.id);

    if (version) {
      if (parseInt(version) === 1) {
        // special case because v1 characters don't have a version property
        characters = characters
          .map((c) => c as Character)
          .filter((c) => !c.version);
      } else {
        characters = characters
          .map((c) => c as Character)
          .filter((c) => String(c.version) === String(version));
      }
    }

    return NextResponse.json({ characters });
  } catch (error) {
    console.error("Error getting characters", error);
    return NextResponse.json(
      { error: "Error getting characters" },
      { status: 500 }
    );
  }
}
