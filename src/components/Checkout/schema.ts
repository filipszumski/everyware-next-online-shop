import { z } from "zod";

import { DEFAULT_VALIDATION_MESSAGES } from "@/shared/constants/defaultValidationMessages";

// TODO manage required fields and adjust validation. For now only email is validated
export const checkoutFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .email(DEFAULT_VALIDATION_MESSAGES.format),
  company: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  address: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  apartment: z.string().max(10, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  city: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  region: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  postalCode: z.string(),
});
