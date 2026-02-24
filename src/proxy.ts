import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/token";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("auth_token")?.value;

  /* -----------------------------------
     BLOCK LOGIN / SIGNUP IF LOGGED IN
  ----------------------------------- */
  if (token && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  /* -----------------------------------
     ✅ PROTECT MEMBERSHIP + CART
  ----------------------------------- */
  if (pathname.startsWith("/cart")) {
    if (!token) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, req.url),
      );
    }
  }

  /* -----------------------------------
     ADMIN PROTECTION
  ----------------------------------- */
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const payload = verifyToken(token);

      if (payload.role !== "ADMIN" && payload.role !== "SUPER_ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart/:path*",
    "/cart/:path*",
    "/login",
    "/signup",
  ],
};
