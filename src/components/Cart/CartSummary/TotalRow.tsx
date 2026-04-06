"use client";

import { Price } from "@/components/Product/Price";
import { useCartContext } from "@/context/cartContext/CartContext";

import { CartSummaryRow } from "./CartSummaryRow";

export function TotalRow() {
  const { summaryPrice } = useCartContext();

  return (
    <CartSummaryRow>
      <div className="font-bold">Total</div>
      <Price className="text-base">{summaryPrice}</Price>
    </CartSummaryRow>
  );
}
