"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCartContext } from "@/context/cartContext/CartContext";
import { APP_ROUTES } from "@/shared/constants";

export function CartItemsGuard({ children }: { children: React.ReactNode }) {
  const { allCartItemsQuantity } = useCartContext();
  const router = useRouter();

  const isCartEmpty = !allCartItemsQuantity;

  useEffect(() => {
    if (isCartEmpty) {
      router.replace(APP_ROUTES.products);
    }
  }, [isCartEmpty, router]);

  if (isCartEmpty) return null;
  return <>{children}</>;
}
