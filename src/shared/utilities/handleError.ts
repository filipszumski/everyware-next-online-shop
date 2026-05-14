import axios from "axios";

import { errorResponseSchema } from "@/app/api/types";

export function handleError(e: unknown) {
  if (axios.isAxiosError(e)) {
    const parseResult = errorResponseSchema.safeParse(e.response?.data);

    if (parseResult.success) {
      const { error } = parseResult.data;
      const message = Array.isArray(error.message)
        ? error.message.join(", ")
        : error.message;
      console.error(message);
      return;
    }

    const errorMessage =
      e.message || e.response?.statusText || "An error occurred";
    console.error(errorMessage);
    return;
  }

  if (e instanceof Error) {
    console.error(e.message || "An unknown error occurred");
    return;
  }

  console.error("An unknown error occurred");
}
