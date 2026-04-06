import { z } from "zod";

import { CartItemDataSchema, CartItemSchema } from "./schemas";

export type CartItemData = z.infer<typeof CartItemDataSchema>;

export type CartItem = z.infer<typeof CartItemSchema>;

export type CartState = {
  cartItems: CartItem[];
  addItemToCart: (cartItemData: CartItemData) => void;
  removeItemFromCart: (id: CartItemData["id"]) => void;
  clearCart: () => void;
  allCartItemsQuantity: number;
  updateCartItemQuantity: (
    id: CartItemData["id"],
    qty: CartItem["quantity"],
  ) => void;
  summaryPrice: number;
};
