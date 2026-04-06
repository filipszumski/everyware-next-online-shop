import { ButtonIcon } from "./buttonIcon";

export type NavigationListItem = {
  href: string;
  basePathname: string;
  title: "Home" | "Products";
  exact?: boolean;
  icon: ButtonIcon;
};
