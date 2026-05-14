import z from "zod";

import { signInFormSchema } from "./schema";

export type SignInFormType = z.infer<typeof signInFormSchema>;
