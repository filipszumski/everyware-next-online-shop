import { CartSummaryRow } from "./CartSummaryRow";
import { ProceedToCheckoutLink } from "./ProceedToCheckoutLink";
import { SubtotalRow } from "./SubtotalRow";
import { TotalRow } from "./TotalRow";

export const CartSummary = () => {
  return (
    <div
      className={`
      sticky left-0 bottom-0 w-full p-4 bg-backgroundLight border-solid border-2 border-borderDefault rounded-md shadow-md self-start grid grid-cols-1 gap-2
      md:top-header md:bg-white md:gap-4`}
    >
      <h2 className="text-lg font-bold">Cart summary</h2>
      <div className="grid grid-cols-1 divide-y-2 divide-borderDefault">
        <SubtotalRow />
        <CartSummaryRow>
          <div>Shipping</div>
          <div className="font-bold">Free!</div>
        </CartSummaryRow>
        <TotalRow />
      </div>
      <ProceedToCheckoutLink />
    </div>
  );
};
