"use client";

import { NavLink } from "@/components/NavLink";
import { NAVIGATION_LIST } from "@/shared/constants";

export function NavigationList() {
  return (
    <ul className="hidden sm:flex sm:gap-4 sm:flex-grow">
      {NAVIGATION_LIST.map((item) => {
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
