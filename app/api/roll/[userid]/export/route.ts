import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { getRolls } from "@/handlers/rolls";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userid: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  try {
    let rolls = await getRolls(userid, 0, 0);
    if (!session?.user?.role.includes("admin")) {
      rolls = rolls.filter((roll) => !roll.private || roll.userid === session?.user?.id);
    }
    return NextResponse.json(rolls);
  } catch (error) {
    console.error("Error getting rolls", error);
    return NextResponse.json({ error: "Error getting rolls" }, { status: 500 });
  }
}