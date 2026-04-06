"use client";

import { useCartContext } from "@/context/cartContext/CartContext";

import { CartItem } from "./CartItem";

export function CartItemsList() {
  const { cartItems } = useCartContext();

  return (
    <ul className="grid grid-cols-1 gap-6 justify-items-center">
      {cartItems.map((cartItemData) => (
        <CartItem key={cartItemData.data.id} item={cartItemData} />
      ))}
    </ul>
  );
}
