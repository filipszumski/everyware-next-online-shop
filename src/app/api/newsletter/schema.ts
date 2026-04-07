import z from "zod";

export const requestBodySchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "This field is required")
    .email("Invalid email format"),
});
