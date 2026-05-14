import z from "zod";

import { reviewFormSchema } from "@/components/Product/ProductDetails/ReviewForm/reviewFormSchema";

export const createReviewSchema = z.object({
  productSlug: z.string(),
  data: reviewFormSchema,
});
