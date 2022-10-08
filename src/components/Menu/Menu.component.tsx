import "./styles/Menu.style.sass";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";
import { FC } from "react";
import { Logout } from "../Logout/Logout.component";
export const Menu: FC<LayoutProps> = ({ routes }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
=======
import { useUser } from "../../hooks/useUser.hook";
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";
import { FC } from "react";
export const Menu: FC<LayoutProps> = ({ routes }) => {
  const { logout } = useUser();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/">Home</Link>
        </li>
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68
        {routes &&
          Object.keys(routes).map((title: string) => (
            <li key={"navlink" + routes[title].path} className="nav-list__item">
              <Link to={routes[title].link || routes[title].path}>{title}</Link>
            </li>
          ))}
<<<<<<< HEAD
        <Logout />
=======

        <li className="nav-list__item cursor-pointer" onClick={logout}>
          Logout
        </li>
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68
      </ul>
    </nav>
  );
};
