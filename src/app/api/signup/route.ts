import * as bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { getAuthorizedClient } from "@/graphql/apolloClientRSC";
import {
  CreateAccountDocument,
  PublishAccountDocument,
} from "@/graphql/generated/graphql";
import { CACHE_TAGS } from "@/shared/constants/cacheTags";

import { ResponseData } from "../types";
import { handleError } from "../utils/handleError";
import { createAccountReqBodySchema } from "./utils/schema";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ResponseData>> {
  const body = await req.json();
  const parsedBody = createAccountReqBodySchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        status: "error",
        error: {
          message: parsedBody.error.issues.map((issue) => issue.message),
        },
      },
      { status: 400 },
    );
  }

  try {
    const hashedPassword = await bcrypt.hash(parsedBody.data.password, 12);

    const authorizedClient = getAuthorizedClient();
    const response = await authorizedClient.mutate({
      mutation: CreateAccountDocument,
      variables: {
        email: parsedBody.data.email,
        password: hashedPassword,
        name: parsedBody.data.name,
      },
    });

    if (!response.data?.createAccount?.id) {
      throw new Error("Failed to create account");
    }

    await authorizedClient.mutate({
      mutation: PublishAccountDocument,
      variables: {
        email: parsedBody.data.email,
        id: response.data.createAccount.id,
      },
    });
    revalidateTag(CACHE_TAGS.accountDetails(parsedBody.data.email), {
      expire: 0,
    });
  } catch (e) {
    handleError(e);
  }

  return NextResponse.json(
    {
      status: "success",
    },
    { status: 201 },
  );
}
