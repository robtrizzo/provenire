import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import redis from "@/lib/redis";

async function getCrewById(crewid: string) {
  const crew = await redis.get(`crew:${crewid}`);
  return crew;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
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

  const crewid = (await params).slug;

  try {
    const crew = await getCrewById(crewid);
    return NextResponse.json({ crew });
  } catch (error) {
    console.error("Error getting crew", error);
    return NextResponse.json({ error: "Error getting crew" }, { status: 500 });
  }
}
