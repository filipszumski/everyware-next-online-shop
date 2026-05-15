import { NextRequest, NextResponse } from "next/server";

import { getAuthorizedClient } from "@/graphql/apolloClientRSC";
import {
  CreateProductReviewDocument,
  PublishProductDocument,
  PublishProductReviewDocument,
} from "@/graphql/generated/graphql";

import { ResponseData } from "../types";
import { handleError } from "../utils/handleError";
import { createReviewSchema } from "./schema";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ResponseData>> {
  const body = await req.json();
  const parsedBody = createReviewSchema.safeParse(body);

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

  const reviewFormData = parsedBody.data.data;
  const authorizedClient = getAuthorizedClient();
  try {
    const { data } = await authorizedClient.mutate({
      mutation: CreateProductReviewDocument,
      variables: {
        review: {
          ...reviewFormData,
          product: {
            connect: [
              {
                slug: parsedBody.data.productSlug,
              },
            ],
          },
        },
      },
    });

    if (!data?.review?.id) {
      throw new Error("Failed to create review");
    }

    if (data?.review?.id) {
      await authorizedClient.mutate({
        mutation: PublishProductReviewDocument,
        variables: {
          id: data.review.id,
        },
      });

      await authorizedClient.mutate({
        mutation: PublishProductDocument,
        variables: {
          slug: parsedBody.data.productSlug,
        },
      });
    }
  } catch (e) {
    handleError(e);
  }
  return NextResponse.json({ status: "success" }, { status: 200 });
}
