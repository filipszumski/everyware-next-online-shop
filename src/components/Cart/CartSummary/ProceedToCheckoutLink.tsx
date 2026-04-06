"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/Button";
import { APP_ROUTES } from "@/shared/constants";

{
  /* TODO - INVESTIGATE USING BUTTON VARIANTS HERE NOT FROM SEPARATE COMPONENT - LINK AS BUTTON?? */
}
export function ProceedToCheckoutLink() {
  const pathname = usePathname();

  const displayCheckoutButton = pathname?.startsWith(APP_ROUTES.cart) ?? false;

  return (
    <>
      {!!displayCheckoutButton && (
        <Link
          href={APP_ROUTES.checkout}
          className={buttonVariants({
            variant: "contained",
            className: "md:w-full",
          })}
        >
          Proceed to checkout
        </Link>
      )}
    </>
  );
}
