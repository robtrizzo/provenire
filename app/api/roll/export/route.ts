import { NextResponse } from "next/server";
import { getAllRolls } from "@/handlers/rolls";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    let rolls = await getAllRolls(0, 0);
    if (!session?.user?.role.includes("admin")) {
      rolls = rolls.filter((roll) => !roll.private || roll.userid === session?.user?.id);
    }
    return NextResponse.json(rolls);
  } catch (error) {
    console.error("Error getting rolls", error);
    return NextResponse.json({ error: "Error getting rolls" }, { status: 500 });
  }
}