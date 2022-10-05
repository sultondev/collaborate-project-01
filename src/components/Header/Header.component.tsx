import { FC } from "react";
import { LayoutProps } from "../Layout/BaseLayout.component";

import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu.component";
import "./Header.style.sass";

export const Header = (props: { routes: LayoutProps }) => {
  const { routes } = props;
  return (
    <>
      <header className="app-header">
        <Menu routes={routes} />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
