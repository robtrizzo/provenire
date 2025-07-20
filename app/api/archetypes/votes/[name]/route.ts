import { castCharacterOptionVote } from "@/handlers/votes";
import { checkAuth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    const name = (await params).name;
    const sanitizedName = name.replaceAll(/%20/g, " ");

    const user = session.user as User;
    if (!user) {
      return NextResponse.json(
        { error: "User not found in session" },
        { status: 400 }
      );
    }

    if (!request.body) {
      return NextResponse.json(
        { error: "empty request body" },
        { status: 400 }
      );
    }

    const requestBody = await request.json();
    if (!requestBody.vote) {
      return NextResponse.json(
        { error: "could not find vote in request body" },
        { status: 400 }
      );
    }

    const vote: CharacterOptionVoteType = requestBody.vote;

    await castCharacterOptionVote(sanitizedName, "ar", vote, user);
    return NextResponse.json(
      { message: "Vote cast successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing vote for archetype", error);
    return NextResponse.json(
      { error: "Failed to process vote for archetype" },
      { status: 500 }
    );
  }
}
