"use client";

import { useCartContext } from "@/context/cartContext/CartContext";

import { CartSummaryRow } from "./CartSummaryRow";

export function SubtotalRow() {
  const { summaryPrice } = useCartContext();

  return (
    <CartSummaryRow>
      <div>Subtotal</div>
      <div>{summaryPrice}</div>
    </CartSummaryRow>
  );
}
