"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { CartLink } from "@/components/Cart/CartLink";
import { APP_ROUTES } from "@/shared/constants";

export function HeaderCartLink() {
  return <CartLink href={APP_ROUTES.cart} icon={ShoppingCartIcon} />;
}
