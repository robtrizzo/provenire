import ably from "@/lib/ably";
import { checkAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error } = await checkAuth("player");
  if (error) return error;

  const tokenDetails = await ably.auth.requestToken({
    clientId: "ably-updates",
  });
  return NextResponse.json(tokenDetails);
}
