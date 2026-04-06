"use client";

import { useCartContext } from "@/context/cartContext/CartContext";
import { APP_ROUTES } from "@/shared/constants";

import { LinkProps } from "../Link";
import { NavLink } from "../NavLink";

export const CartLink = ({ children, ...props }: LinkProps) => {
  const { allCartItemsQuantity } = useCartContext();

  return (
    <div className="relative">
      {!!allCartItemsQuantity && (
        <div
          className="
            w-4 h-4 rounded-full bg-primary text-onPrimary text-xs 
            absolute right-0 
            flex justify-center items-center"
        >
          {allCartItemsQuantity}
        </div>
      )}
      <NavLink basePathname={APP_ROUTES.cart} exact {...props}>
        {children}
      </NavLink>
    </div>
  );
};
