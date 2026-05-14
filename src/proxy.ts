import { NextRequest, NextResponse } from "next/server";

import { APP_ROUTES, PROTECTED_ROUTES } from "@/shared/constants";

export function proxy(request: NextRequest) {
  const isProtected = PROTECTED_ROUTES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isProtected) {
    return NextResponse.redirect(new URL(APP_ROUTES.signIn, request.url));
  }
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|.*\\.png$).*)",
      missing: [
        { type: "cookie", key: "next-auth.session-token" },
        { type: "cookie", key: "__Secure-next-auth.session-token" },
      ],
    },
  ],
};
