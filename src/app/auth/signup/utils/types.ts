import z from "zod";

import { signUpFormSchema } from "./schema";

export type SignUpFormType = z.infer<typeof signUpFormSchema>;
