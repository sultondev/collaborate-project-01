import { Menu } from "../Menu/Menu.component";
import "./Header.style.sass";
export const Header = (prop: { children: JSX.Element }) => {
  const { children } = prop;
  return (
    <header className="app-header">
      <Menu>{children}</Menu>
    </header>
  );
};
