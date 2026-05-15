import { NextRequest, NextResponse } from "next/server";

import {
  APP_ROUTES,
  PROTECTED_ROUTES,
  SEARCH_PARAMS_MAP,
} from "@/shared/constants";

export function proxy(request: NextRequest) {
  const isProtected = PROTECTED_ROUTES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isProtected) {
    const signInUrl = new URL(APP_ROUTES.signIn, request.url);
    signInUrl.searchParams.set(
      SEARCH_PARAMS_MAP.callbackUrl,
      request.nextUrl.pathname,
    );
    return NextResponse.redirect(signInUrl);
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
