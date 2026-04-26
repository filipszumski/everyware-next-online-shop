import z from "zod";

export const checkoutRequestBodySchema = z.object({
  cartItems: z.array(z.object({ slug: z.string(), quantity: z.number() })),
});
