import { auth } from "@/auth";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ characterId: string }> }
) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const characterId = (await params).characterId;
  if (!characterId) {
    return NextResponse.json({ error: "must provide characterId" });
  }

  // TODO
}
