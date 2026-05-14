import { CartItemsGuard } from "./_components/CartItemsGuard";
import { Checkout } from "./_components/Checkout";

const CheckoutPage = () => {
  return (
    <CartItemsGuard>
      <Checkout />
    </CartItemsGuard>
  );
};

export default CheckoutPage;
