import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

import { getAuthorizedClient } from "@/graphql/apolloClientRSC";
import {
  CreateOrderDocument,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  GetAccountDocument,
  PublishManyOrderItemsDocument,
  PublishOrderDocument,
} from "@/graphql/generated/graphql";
import { CACHE_TAGS } from "@/shared/constants/cacheTags";
import { stripe } from "@/shared/constants/stripe";

import { handleError } from "../../utils/handleError";

const stripeSigningSecret = process.env.STRIPE_SIGNING_SECRET_KEY;

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature || !stripeSigningSecret) {
    console.error("Missing Stripe signature or signing secret");
    return NextResponse.json(
      { error: "Missing Stripe signature or signing secret" },
      { status: 400 },
    );
  }
  let event: Stripe.Event;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      signature,
      stripeSigningSecret,
    );
  } catch (e) {
    console.error("Error verifying Stripe webhook signature:", e);
    return NextResponse.json(
      { error: "Invalid Stripe webhook signature" },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const stripeSession = event.data.object;
        const lineItems = await stripe.checkout.sessions.listLineItems(
          stripeSession.id,
          { expand: ["data.price.product"] },
        );

        if (!stripeSession.metadata?.email) {
          return NextResponse.json(
            {
              error: "No authenticated user found for this session",
            },
            { status: 400 },
          );
        }

        const authorizedClient = getAuthorizedClient();
        const userData = await authorizedClient.query({
          query: GetAccountDocument,
          variables: {
            email: stripeSession.metadata.email,
          },
          context: {
            fetchOptions: {
              next: {
                tags: [CACHE_TAGS.accountDetails(stripeSession.metadata.email)],
                revalidate: 0,
              },
            },
          },
        });

        if (!userData.data?.account) {
          return NextResponse.json(
            {
              error: "No authenticated user found for this session",
            },
            { status: 400 },
          );
        }

        const createdOrder = await authorizedClient.mutate<
          CreateOrderMutation,
          CreateOrderMutationVariables
        >({
          mutation: CreateOrderDocument,
          variables: {
            order: {
              email: stripeSession.customer_details?.email ?? "",
              stripeCheckoutId: stripeSession.id,
              total: (stripeSession.amount_total ?? 0) / 100,
              createdAt: new Date(stripeSession.created * 1000).toISOString(),
              account: {
                connect: {
                  Account: {
                    email: userData.data.account.email,
                    id: userData.data.account.id,
                  },
                },
              },
              orderItems: {
                create: lineItems.data.map((lineItem) => ({
                  quantity: lineItem.quantity ?? 1,
                  total: (lineItem.amount_total ?? 0) / 100,
                  product: {
                    connect: {
                      slug: lineItem.metadata?.slug,
                    },
                  },
                })),
              },
            },
          },
        });

        await authorizedClient.mutate({
          mutation: PublishOrderDocument,
          variables: { id: createdOrder.data?.createOrder?.id ?? "" },
        });

        await authorizedClient.mutate({
          mutation: PublishManyOrderItemsDocument,
          variables: { orderId: createdOrder.data?.createOrder?.id ?? "" },
        });
        revalidateTag(CACHE_TAGS.accountOrders(userData.data.account.email), {
          expire: 60,
        });

        break;
      }
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }
  } catch (e) {
    handleError(e);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
