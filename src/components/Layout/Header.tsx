import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";

import { APP_ROUTES, NAVIGATION_LIST } from "@/shared/constants";

import logo from "../../../public/everyware-logo.svg";
import { CartLink } from "../Cart/CartLink";
import { NavLink } from "../NavLink";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-backgroundLight p-4 z-10 border-b-2 border-borderDefault h-header">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <Image src={logo} alt="Everyware logo" height={40} width={180} />
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
        <div className="flex items-center gap-4">
          <CartLink href={APP_ROUTES.cart} icon={ShoppingCartIcon} />
          <Popover className="sm:hidden">
            <Popover.Button className="flex items-center">
              {<Bars3Icon className="w-6 h-6 text-primary" />}
            </Popover.Button>
            <Transition
              className="absolute top-full left-0 min-w-full"
              enter="transition ease-in-out origin-top duration-200"
              enterFrom="scale-y-0 opacity-0"
              enterTo="scale-y-1 opacity-100"
              leave="transition ease-in-out origin-top duration-200"
              leaveFrom="scale-y-1 opacity-100"
              leaveTo="scale-y-0 opacity-0"
            >
              <Popover.Panel className="">
                {({ close }) => (
                  <ul className="p-4 grid grid-cols-1 gap-2 bg-white  border-t-2 border-t-default shadow-lg">
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
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>
    </header>
  );
};
