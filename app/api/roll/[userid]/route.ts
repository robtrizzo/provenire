import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { Roll, validateRoll } from "@/types/roll";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { addRoll, getRolls, clearRolls } from "../_handlers/roll-handler";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
  ) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  if (userid !== session!.user!.id && !session!.user!.role.includes("admin")) {
    return NextResponse.json({ error: "cannot add rolls for another user" }, { status: 403 });
  }

  if (!request.body) {
    return new NextResponse(null, { status: 400 });
  }

  const roll = (await request.json()) as Roll;
  if (!roll) {
    return new NextResponse(null, { status: 400 });
  }

  roll.userid = userid;

  try {
    validateRoll(roll);
  } catch (e) {
    console.error("Error parsing roll", e);
    return NextResponse.json({ error: "Error parsing roll" }, { status: 400 });
  }

  try {
    await addRoll(userid, roll);
  } catch (error) {
    console.error("Error adding roll", error);
    return NextResponse.json({ error: "Error adding roll" }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Roll added successfully" },
    { status: 201 }
  );
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
  ) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }
  
  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  const { searchParams } = new URL(request.url);
  const cursor = parseInt(searchParams.get("cursor") || "0", 10);
  const pageSize = parseInt(searchParams.get("page_size") || "20", 10);

  try {
    let rolls = await getRolls(userid, cursor, pageSize);
    if (!session?.user?.role.includes("admin")) {
      rolls = rolls.filter((roll) => !roll.private || roll.userid === session?.user?.id);
    }
    return NextResponse.json(rolls);
  } catch (error) {
    console.error("Error getting rolls", error);
    return NextResponse.json({ error: "Error getting rolls" }, { status: 500 });
  }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
  ) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }
  
  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  if (userid !== session!.user!.id && !session!.user!.role.includes("admin")) {
    return NextResponse.json({ error: "cannot clear rolls for another user" }, { status: 403 });
  }

  await clearRolls(userid);
  return NextResponse.json(
    { message: "Rolls cleared successfully" },
    { status: 200 }
  );
}
