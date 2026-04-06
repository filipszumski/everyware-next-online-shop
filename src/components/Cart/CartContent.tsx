import { useCartContext } from "@/context/cartContext/CartContext";

import { CartItemsList } from "./CartItemsList";
import { ClearCartButton } from "./ClearCartButton";

export const CartContent = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="md:col-span-2 grid grid-cols-1 gap-4 content-start">
      <div className="flex justify-between items-center">
        <h2 className="text-lg">
          Cart <span className="text-textSecondary">({cartItems.length})</span>
        </h2>
        <div>
          <ClearCartButton />
        </div>
      </div>
      <CartItemsList />
    </div>
  );
};
