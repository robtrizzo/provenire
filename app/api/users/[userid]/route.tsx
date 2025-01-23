import { auth } from "@/auth/index";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }
  const { userid } = req.query;
  if (!userid) {
    res.json({ error: "must provide userid" });
  }
  res.json({ message: "todo", userid });
}
