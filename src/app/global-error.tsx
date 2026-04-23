"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import errorImage from "@static/illustrations/error.svg";
import { useEffect } from "react";

import { Button } from "@/components";
import { StateContainer } from "@/components/Layout/StateContainer";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const errorMessage = error.message ?? "An unexpected error occurred.";
  const errorDigest = error.digest ?? null;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <StateContainer
          imageProps={{ src: errorImage, alt: "Error" }}
          title="Something went wrong"
          description={errorMessage}
          digest={errorDigest}
          fullHeight
          action={
            <Button onClick={unstable_retry} icon={ArrowPathIcon}>
              Try again
            </Button>
          }
        />
      </body>
    </html>
  );
}
