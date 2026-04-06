import { CartItemsGuard } from "./CartItemsGuard";
import { Checkout } from "./Checkout";

const CheckoutPage = () => {
  return (
    <CartItemsGuard>
      <Checkout />
    </CartItemsGuard>
  );
};

export default CheckoutPage;
