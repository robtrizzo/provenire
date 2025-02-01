import { checkAuth } from "@/lib/auth";
import {NextRequest, NextResponse} from "next/server";
import {getUser} from "@/handlers/users";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userid: string }> }
) {
  const { error } = await checkAuth("admin");
  if (error) return error;

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }
  return NextResponse.json({ message: "todo", userid });
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userid: string }> }
) {
  const { error } = await checkAuth("player");
  if (error) return error;

  const userid = (await params).userid;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }

  const user = await getUser(userid);
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

