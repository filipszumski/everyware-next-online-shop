import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { APP_ROUTES } from "@/shared/constants";
import { stripe } from "@/shared/constants/stripe";

import { ResponseData } from "../types";
import { handleError } from "../utils/handleError";
import { checkoutRequestBodySchema } from "./schema";

type CheckoutResponseData = ResponseData & { checkoutUrl?: string };

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ResponseData>> {
  const headersList = await headers();
  const origin = headersList.get("origin");
  const APP_URL = origin ?? process.env.NEXT_PUBLIC_APP_URL;

  try {
    const requestPayload = await req.json();
    const requestPayloadParsed =
      checkoutRequestBodySchema.safeParse(requestPayload);

    if (!requestPayloadParsed.success) {
      console.error("Invalid request payload:", requestPayloadParsed.error);
      return NextResponse.json<ResponseData>(
        {
          status: "error",
          error: {
            message: "Invalid request payload",
            code: 400,
          },
        },
        { status: 400 },
      );
    }

    const { cartItems } = requestPayloadParsed.data;

    const session = await stripe.checkout.sessions.create({
      // ADJUST CURRENCY IN HYGRAPH - PLN REQUIRED TO MAKE BLIK AND P24 WORK
      payment_method_types: ["card", "blik", "p24"],
      mode: "payment",
      success_url: `${APP_URL}${APP_ROUTES.checkoutSuccess}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${APP_URL}${APP_ROUTES.checkoutCancel}`,
      line_items: cartItems.map(
        ({ data: { image, price, title }, quantity }) => ({
          quantity: quantity,
          price_data: {
            currency: "PLN",
            unit_amount: price * 100,
            product_data: {
              name: title,
              images: [image],
            },
          },
        }),
      ),
    });

    if (!session.url) {
      return NextResponse.json<ResponseData>(
        {
          status: "error",
          error: {
            message: "Checkout session URL is missing",
            code: 500,
          },
        },
        { status: 500 },
      );
    }

    return NextResponse.json<CheckoutResponseData>({
      status: "success",
      checkoutUrl: session.url,
    });
  } catch (e) {
    return handleError(e);
  }
}
