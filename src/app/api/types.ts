import { z } from "zod";

export const successResponseSchema = z.object({
  status: z.literal("success"),
  data: z
    .object({
      name: z.string(),
    })
    .optional(),
});

export const errorResponseSchema = z.object({
  status: z.literal("error"),
  error: z.object({
    message: z.union([z.string(), z.array(z.string())]),
  }),
});

export type SuccessResponseData = z.infer<typeof successResponseSchema>;
export type ErrorResponseData = z.infer<typeof errorResponseSchema>;

export type ResponseData = SuccessResponseData | ErrorResponseData;
