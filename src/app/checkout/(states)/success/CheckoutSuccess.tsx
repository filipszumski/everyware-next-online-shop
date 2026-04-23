import processingImage from "@static/illustrations/processing.svg";
import successImage from "@static/illustrations/success.svg";

import { StateContainer } from "@/components/Layout/StateContainer";
import { stripe } from "@/shared/constants/stripe";

import { HomeButton } from "./components/HomeButton";
import { RefreshButton } from "./components/RefreshButton";

type Props = {
  sessionId?: string | string[];
};

export async function CheckoutSuccess({ sessionId }: Props) {
  if (!sessionId || typeof sessionId !== "string") {
    return (
      <StateContainer
        imageProps={{ src: processingImage, alt: "Processing" }}
        title="Session Not Found"
        description="We couldn't find your session. Please try again or contact support."
        action={<HomeButton />}
      />
    );
  }

  let status: Awaited<
    ReturnType<typeof stripe.checkout.sessions.retrieve>
  >["status"];

  try {
    const sessionData = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    });
    status = sessionData.status;

    if (status === null) {
      throw new Error("Session was not found");
    }
  } catch {
    throw new Error("Session was not found");
  }

  if (status === "open") {
    return (
      <StateContainer
        imageProps={{ src: processingImage, alt: "Processing" }}
        title="Payment Processing"
        description="Your payment is being processed. Please wait while we confirm your order."
        action={<RefreshButton />}
      />
    );
  }

  return (
    <>
      {status === "complete" && (
        <>
          <StateContainer
            imageProps={{ src: successImage, alt: "Success" }}
            title="Payment successful!"
            description="Your order has been confirmed. Thank you for shopping with us!"
            action={<HomeButton />}
          />
        </>
      )}
    </>
  );
}
