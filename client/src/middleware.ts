import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./db/helpers/jose";
import { JWTInvalid } from "jose/errors";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
    const auth = cookies().get("Authorization");

    if (!auth) {
      return NextResponse.redirect(new URL("/users/login", request.url));
    }

    try {
      const user = await verifyToken(auth.value.split(" ")[1]);
      if (!user) {
        throw new Error("Invalid Token");
      }
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", user.id);
      requestHeaders.set("x-user-email", user.email);
      requestHeaders.set("x-user-username", user.username);

      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });

      return response;
    } catch (error) {
      if (error instanceof JWTInvalid) {
        NextResponse.json(
          {
            message: "Invalid Token",
          },
          {
            status: 401,
          }
        );
      } else if (error instanceof Error) {
        NextResponse.json(
          {
            message: "Invalid Token",
          },
          {
            status: 401,
          }
        );
      }
    }
  }
}
