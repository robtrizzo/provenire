import { getAllCharacterOptionVotes } from "@/handlers/votes";
import { checkAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error } = await checkAuth("player");
  if (error) return error;

  try {
    const votes = await getAllCharacterOptionVotes("ar");
    if (!votes) {
      return NextResponse.json({ error: "No votes found" }, { status: 404 });
    }
    return NextResponse.json(votes);
  } catch (error) {
    console.error("Error fetching archetype votes", error);
    return NextResponse.json(
      { error: "Failed to fetch archetype votes" },
      { status: 500 }
    );
  }
}
