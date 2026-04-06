"use client";

import { usePathname } from "next/navigation";

import { Link, LinkProps } from "@/components/Link";
import { twMerge } from "@/shared/utilities/twMerge";

type NavLinkProps = LinkProps & {
  exact?: boolean;
  basePathname: string;
};

function isActiveNavLink(
  basePathname: string,
  currentPathname: string | null,
  exact?: boolean,
) {
  if (exact) {
    return currentPathname === basePathname;
  } else {
    return currentPathname?.startsWith(basePathname) ?? false;
  }
}

export const NavLink = ({
  children,
  exact,
  basePathname,
  className,
  ...restProps
}: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      {...restProps}
      variant="contained"
      className={twMerge(className, {
        "font-bold bg-primaryLight text-primaryActive": isActiveNavLink(
          basePathname,
          pathname,
          exact,
        ),
      })}
    >
      {children}
    </Link>
  );
};
