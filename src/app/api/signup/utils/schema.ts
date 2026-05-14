import z from "zod";

export const createAccountReqBodySchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});
