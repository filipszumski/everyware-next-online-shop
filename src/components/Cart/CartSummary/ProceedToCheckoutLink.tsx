"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { Button, buttonVariants } from "@/components/Button";
import { APP_ROUTES } from "@/shared/constants";

{
  /* TODO - INVESTIGATE USING BUTTON VARIANTS HERE NOT FROM SEPARATE COMPONENT - LINK AS BUTTON?? */
}
export function ProceedToCheckoutLink() {
  const pathname = usePathname();
  const { status } = useSession();

  const isOnCartPage = pathname?.startsWith(APP_ROUTES.cart) ?? false;

  if (!isOnCartPage) return null;

  if (status === "authenticated") {
    return (
      <Link
        href={APP_ROUTES.checkout}
        className={buttonVariants({
          variant: "contained",
          className: "md:w-full",
        })}
      >
        Proceed to checkout
      </Link>
    );
  }

  return (
    <Button
      onClick={() => signIn()}
      className={buttonVariants({
        variant: "outlined",
        className: "md:w-full",
      })}
    >
      Log in to proceed to checkout
    </Button>
  );
}
