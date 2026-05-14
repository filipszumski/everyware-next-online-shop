import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import { authorizedApolloClient } from "@/graphql/apolloClient";
import {
  CreateAccountDocument,
  PublishAccountDocument,
} from "@/graphql/generated/graphql";

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

    const response = await authorizedApolloClient.mutate({
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

    await authorizedApolloClient.mutate({
      mutation: PublishAccountDocument,
      variables: {
        email: parsedBody.data.email,
        id: response.data.createAccount.id,
      },
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
