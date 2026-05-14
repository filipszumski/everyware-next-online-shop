import { ButtonIcon } from "./buttonIcon";

export type NavigationListItem = {
  href: string;
  basePathname: string;
  title: "Home" | "Products" | "Orders History";
  exact?: boolean;
  icon: ButtonIcon;
};
