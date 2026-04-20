import cancelImage from "@static/illustrations/failed.svg";

import { StateContainer } from "@/components/Layout/StateContainer";

import { ResetCart } from "../_components/ResetCart";
import { HomeButton } from "./components/HomeButton";

export default async function CheckoutCancelPage() {
  return (
    <>
      <ResetCart />
      <StateContainer
        imageProps={{ src: cancelImage, alt: "Canceled" }}
        title="Payment canceled"
        description="Your payment has been canceled. You can try again or return to the homepage."
        action={<HomeButton />}
      />
    </>
  );
}
