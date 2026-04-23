import { CartSummary } from "@/components/Cart/CartSummary";
import { CheckoutForm } from "@/components/Checkout/CheckoutForm";

export function Checkout() {
  return (
    <div
      className={`
      grid grid-cols-1 gap-y-6 bg-backgroundLight p-6 rounded-lg shadow-md
      md:grid-cols-3 md:gap-6 `}
    >
      <CheckoutForm />
      <CartSummary />
    </div>
  );
}
