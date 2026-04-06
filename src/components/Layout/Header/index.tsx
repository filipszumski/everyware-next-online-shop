import Image from "next/image";

import logo from "../../../../public/everyware-logo.svg";
import { HeaderCartLink } from "./CartLink";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavigationList } from "./NagivationList";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-backgroundLight p-4 z-10 border-b-2 border-borderDefault h-header">
      <nav className="flex gap-8 items-center justify-between sm:justify-center">
        <Image
          src={logo}
          alt="Everyware logo"
          height={40}
          width={180}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <NavigationList />
        <div className="flex items-center gap-4">
          <HeaderCartLink />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};
