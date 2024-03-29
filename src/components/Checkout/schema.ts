import { z } from "zod";

import { DEFAULT_VALIDATION_MESSAGES } from "@/shared/constants/defaultValidationMessages";

// TODO manage required fields and adjust validation. For now only email is validated

export const checkoutFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .email(DEFAULT_VALIDATION_MESSAGES.format),
  nameOnCard: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  cardNumber: z.string(),
  // .regex(/^[0-9 ]+$/, DEFAULT_VALIDATION_MESSAGES.onlyNumbers),
  expirationDate: z.string(),
  // .regex(/^\d{2}\/\d{2}$/, DEFAULT_VALIDATION_MESSAGES.format)
  // .regex(/^(0[1-9]|1[0-2])/, "Month must be value between 1 and 12"),
  cvc: z.string(),
  // .regex(/^\d+$/, DEFAULT_VALIDATION_MESSAGES.onlyNumbers)
  // .length(3, "CVC number must consist of 3 numbers"),
  company: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  address: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  apartment: z.string().max(10, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  city: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  region: z.string().max(99, DEFAULT_VALIDATION_MESSAGES.tooManyCharacters),
  postalCode: z.string(),
  sameAsShipping: z.string(),
});
