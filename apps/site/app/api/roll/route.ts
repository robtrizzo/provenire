import { NextResponse } from "next/server";
import { getAllRolls } from "@/handlers/rolls";
import { checkAuth } from "@/lib/auth";

export async function GET(request: Request) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

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