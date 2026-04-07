import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { ResponseData } from "../types";
import { handleError } from "../utils/handleError";
import { requestBodySchema } from "./schema";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ResponseData>> {
  const parsedRequestBody = requestBodySchema.safeParse(await req.json());

  if (!parsedRequestBody.success) {
    const issues = parsedRequestBody.error.issues.map((issue) => issue.message);
    return NextResponse.json(
      {
        status: "error",
        error: {
          message: issues,
          code: 400,
        },
      },
      {
        status: 405,
      },
    );
  }

  try {
    const subscribeUserResponse = await axios.post(
      `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`,
      JSON.stringify(parsedRequestBody.data),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
        },
      },
    );
    return NextResponse.json(
      {
        status: "success",
        data: subscribeUserResponse.data,
      },
      {
        status: 201,
      },
    );
  } catch (e) {
    return handleError(e);
  }
}
