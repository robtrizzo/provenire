import { NextResponse } from "next/server";
import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import redis, { findKeysByPattern } from "@/lib/redis";
import { Crew } from "@/types/game";

async function createCrew(crew: Crew) {
  const key = `crew:${crew.name}`;
  await redis.set(key, crew);
}

async function getAllCrews() {
  const pattern = "crew:*";
  const keys = await findKeysByPattern(pattern);
  const crews = await Promise.all(keys.map((key) => redis.get(key)));
  return crews;
}

export async function POST(request: Request) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  if (!request.body) {
    return new NextResponse(null, { status: 400 });
  }

  const crew = (await request.json()) as Crew;
  if (!crew) {
    return new NextResponse(null, { status: 400 });
  }

  try {
    await createCrew(crew);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error creating crew", error);
    return NextResponse.json({ error: "Error getting crew" }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const crews = await getAllCrews();
    return NextResponse.json({ crews });
  } catch (error) {
    console.error("Error getting crews", error);
    return NextResponse.json({ error: "Error getting crews" }, { status: 500 });
  }
}
