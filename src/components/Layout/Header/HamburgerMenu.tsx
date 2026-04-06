"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import { NavLink } from "@/components/NavLink";
import { NAVIGATION_LIST } from "@/shared/constants";

export function HamburgerMenu() {
  return (
    <Popover className="sm:hidden">
      <PopoverButton className="flex items-center">
        {<Bars3Icon className="w-6 h-6 text-primary" />}
      </PopoverButton>
      <Transition
        enter="transition ease-in-out origin-top duration-200"
        enterFrom="scale-y-0 opacity-0"
        enterTo="scale-y-1 opacity-100"
        leave="transition ease-in-out origin-top duration-200"
        leaveFrom="scale-y-1 opacity-100"
        leaveTo="scale-y-0 opacity-0"
      >
        <PopoverPanel className="absolute top-full left-0 min-w-full">
          {({ close }) => (
            <ul className="p-4 grid grid-cols-1 gap-2 bg-white  border-t-2 border-t-borderDefault shadow-lg">
              {NAVIGATION_LIST.map((item) => {
                return (
                  <li key={item.title}>
                    <NavLink
                      href={item.href}
                      basePathname={item.basePathname}
                      exact={item.exact}
                      onClick={() => {
                        close();
                      }}
                      icon={item.icon}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
