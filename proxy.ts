import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth";

export const config = {
  matcher: [
    "/((?!api|signin|_next/static|_next/image|favicon.ico|discord.svg).*)",
  ],
};

const authMiddleware = auth((req) => {
  try {
    const reqUrl = new URL(req.url);

    if (
      !req.auth &&
      !["/", "/signin", "/socket.io"].includes(reqUrl.pathname)
    ) {
      console.log("pathname", reqUrl.pathname);

      // Add safety checks
      const basePath = BASE_PATH || "";
      const callbackUrl = reqUrl?.pathname || "/";

      // Make sure callbackUrl is a string before encoding
      const encodedCallback =
        typeof callbackUrl === "string" ? encodeURIComponent(callbackUrl) : "";

      return NextResponse.redirect(
        new URL(`${basePath}/signin?callbackUrl=${encodedCallback}`, req.url)
      );
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    // Fallback to signin page
    return NextResponse.redirect(new URL("/signin", req.url));
  }
});

export default authMiddleware;
