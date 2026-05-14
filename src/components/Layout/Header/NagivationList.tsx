"use client";

import { useSession } from "next-auth/react";

import { NavLink } from "@/components/NavLink";
import { NAVIGATION_LIST, PROTECTED_ROUTES } from "@/shared/constants";

export function NavigationList() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  const visibleItems = NAVIGATION_LIST.filter(
    (item) =>
      isAuthenticated ||
      !PROTECTED_ROUTES.some((route) => item.basePathname.startsWith(route)),
  );

  return (
    <ul className="hidden lg:flex lg:gap-4 lg:flex-grow">
      {visibleItems.map((item) => {
        return (
          <li key={item.title}>
            <NavLink
              href={item.href}
              basePathname={item.basePathname}
              exact={item.exact}
              icon={item.icon}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
