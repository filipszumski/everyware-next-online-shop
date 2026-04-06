"use client";

import { TrashIcon } from "@heroicons/react/24/outline";

import { useCartContext } from "@/context/cartContext/CartContext";

import { Button } from "../Button";

export function ClearCartButton() {
  const { clearCart } = useCartContext();

  return (
    <Button icon={TrashIcon} variant="text" onClick={() => clearCart()}>
      Clear cart
    </Button>
  );
}
