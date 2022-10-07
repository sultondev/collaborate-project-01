import { FC } from "react";

import { Outlet } from "react-router-dom";
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";
import { Menu } from "../Menu/Menu.component";
import "./Header.style.sass";

export const Header: FC<LayoutProps> = ({ routes }) => {
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
