import "./styles/Menu.style.sass";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser.hook";
export const Menu = (props: { routes: any }) => {
  const { routes } = props;
  const { logout } = useUser();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/">Home</Link>
        </li>
        {routes &&
          Object.keys(routes).map((title: string) => (
            <li key={"navlink" + routes[title].path} className="nav-list__item">
              <Link to={routes[title].link || routes[title].path}>{title}</Link>
            </li>
          ))}

        <li className="nav-list__item cursor-pointer" onClick={logout}>
          Logout
        </li>
      </ul>
    </nav>
  );
};
