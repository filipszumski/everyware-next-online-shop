import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import { NavigationListItem } from "../types";
import { APP_ROUTES } from "./appRoutes";

type NavigationList = NavigationListItem[];

// TODO - GET RID OR REFACTOR THIS
export const NAVIGATION_LIST: NavigationList = [
  {
    href: APP_ROUTES.home,
    basePathname: APP_ROUTES.home,
    exact: true,
    title: "Home",
    icon: HomeIcon,
  },
  {
    href: `${APP_ROUTES.products}/1`,
    basePathname: APP_ROUTES.products,
    title: "Products",
    icon: ShoppingBagIcon,
  },
];
