import { isAxiosError } from "axios";
import { NextResponse } from "next/server";

import { ResponseData } from "../types";

export function handleError(e: unknown): NextResponse<ResponseData> {
  if (isAxiosError(e)) {
    if (e.response) {
      return NextResponse.json(
        {
          status: "error",
          error: {
            code: e.response.status,
            message: e.response.statusText,
          },
        },
        {
          status: e.response.status,
        },
      );
    }
    if (e.request) {
      return NextResponse.json(
        {
          status: "error",
          error: {
            code: 503,
            message:
              "Service Unavailable. The server is temporarily unable to handle the request. This may be due to the server being down, overloaded, or experiencing network problems.",
          },
        },
        {
          status: 503,
        },
      );
    }
  }

  return NextResponse.json(
    {
      status: "error",
      error: {
        code: 500,
        message: "An unknown error occurred",
      },
    },
    {
      status: 500,
    },
  );
}
