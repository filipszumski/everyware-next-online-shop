import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

import { apolloClient } from "@/graphql/apolloClient";
import {
  CreateOrderDocument,
  CreateOrderMutation,
  CreateOrderMutationVariables,
} from "@/graphql/generated/graphql";

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
        const session = event.data.object;

        await apolloClient.mutate<
          CreateOrderMutation,
          CreateOrderMutationVariables
        >({
          mutation: CreateOrderDocument,
          variables: {
            order: {
              email: session.customer_details?.email ?? "",
              stripeCheckoutId: session.id,
              total: (session.amount_total ?? 0) / 100,
              createdAt: new Date(session.created * 1000).toISOString(),
            },
          },
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
