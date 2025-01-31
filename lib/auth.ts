import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const RoleLevel = {
  user:0,
  player: 1,
  admin: 2,
} as const;
export type Role = keyof typeof RoleLevel;

export async function checkAuth(
  allowedRole: Role,
  requiredPerms = [] as string[]
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: NextResponse.json({ error: "Not authenticated" }, { status: 401 }),
    };
  }

  const userRole = session.user.role.toLowerCase() as Role;
  if (!(userRole in RoleLevel)) {
    return {
      error: NextResponse.json(
        { error: "Invalid role saved to user in session" },
        { status: 500 }
      ),
    };
  }

  if (RoleLevel[userRole] < RoleLevel[allowedRole]) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 403 }),
    };
  }

  // Check if user has at least one of the required permissions
  if (
    requiredPerms.length > 0 &&
    !requiredPerms.some((perm) =>
      (session.user.permissions || []).includes(perm)
    )
  ) {
    return {
      error: NextResponse.json(
        { error: "Missing required permissions" },
        { status: 403 }
      ),
    };
  }

  return { session: session, error: null };
}
