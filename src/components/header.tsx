import React from "react";
import { HeaderBanner } from "./header/header-banner";
import { HeaderFade } from "./header/headerFade";
import { NavItemsCont } from "./header/navItems/navItems-container";
import "./header/header-clouds.scss";

function Header(): JSX.Element {
  return (
    <div>
      <HeaderBanner />
      <HeaderFade>
        <NavItemsCont />
      </HeaderFade>
    </div>
  );
}

export { Header };
