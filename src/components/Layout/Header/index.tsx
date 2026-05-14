import logo from "@static/everyware-logo.svg";
import logoSmall from "@static/everyware-logo-sm.png";
import Image from "next/image";

import { HeaderCartLink } from "./CartLink";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginButton } from "./LoginButton";
import { NavigationList } from "./NagivationList";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-backgroundLight p-4 z-10 border-b-2 border-borderDefault h-header">
      <nav className="flex gap-8 items-center justify-between lg:justify-center">
        <Image
          className="hidden lg:block"
          src={logo}
          alt="Everyware logo"
          height={40}
          width={180}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Image
          className="block lg:hidden"
          src={logoSmall}
          alt="Everyware logo"
          height={40}
          width={40}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <NavigationList />
        <div className="flex items-center gap-4">
          <LoginButton />
          <HeaderCartLink />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};
