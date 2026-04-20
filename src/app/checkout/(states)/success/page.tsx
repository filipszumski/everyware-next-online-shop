import { PagePropsSearchParams } from "@/shared/types";

import { ResetCart } from "../_components/ResetCart";
import { CheckoutSuccess } from "./CheckoutSuccess";

export default async function CheckoutSuccessPage({
  searchParams,
}: PagePropsSearchParams) {
  const { session_id } = await searchParams;

  return (
    <>
      <ResetCart />
      <CheckoutSuccess sessionId={session_id} />
    </>
  );
}
