import z from "zod";

import { CartItemSchema } from "@/context/cartContext/schemas";

export const checkoutRequestBodySchema = z.object({
  cartItems: z.array(CartItemSchema),
});
