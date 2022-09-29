import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu.component";
import "./Header.style.sass";

export const Header = () => {
  return (
    <>
      <header className="app-header">
        <Menu />
      </header>
      <Outlet />
    </>
  );
};
