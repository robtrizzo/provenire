import { NextResponse } from "next/server";
import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";

export async function PUT({
  params,
}: {
  params: { userid: string };
}): Promise<NextResponse> {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }
  const { userid } = params;
  if (!userid) {
    return NextResponse.json({ error: "must provide userid" });
  }
  return NextResponse.json({ message: "todo", userid });
}
