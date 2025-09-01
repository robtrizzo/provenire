import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { message } = body;
  const res = await redis.publish("posts", JSON.stringify({ message }));
  console.log("Published message to channel, receivers:", res);
  return NextResponse.json({ message }, { status: 200 });
}
