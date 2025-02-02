import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { getAllRolls } from "./_handlers/roll-handler";

export async function GET(request: Request) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const { searchParams } = new URL(request.url);
  const cursor = parseInt(searchParams.get("cursor") || "0", 10);
  const pageSize = parseInt(searchParams.get("page_size") || "20", 10);

  try {
    let rolls = await getAllRolls(cursor, pageSize);
    if (!session?.user?.role.includes("admin")) {
      rolls = rolls.filter((roll) => !roll.private || roll.userid === session?.user?.id);
    }
    return NextResponse.json(rolls);
  } catch (error) {
    console.error("Error getting rolls", error);
    return NextResponse.json({ error: "Error getting rolls" }, { status: 500 });
  }
}
