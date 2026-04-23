"use client";

import { useEffect } from "react";

import { useCartContext } from "@/context/cartContext/CartContext";

export function ResetCart() {
  const { clearCart } = useCartContext();

  useEffect(() => {
    clearCart();
  }, []);

  return null;
}
