import "./styles/Menu.style.sass";
import { Link } from "react-router-dom";
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";
import { FC } from "react";
import { Logout } from "../Logout/Logout.component";
export const Menu: FC<LayoutProps> = ({ routes }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {routes &&
          Object.keys(routes).map((title: string) => (
            <li key={"navlink" + routes[title].path} className="nav-list__item">
              <Link to={routes[title].link || routes[title].path}>{title}</Link>
            </li>
          ))}
        <Logout />
      </ul>
    </nav>
  );
};
