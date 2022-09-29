import "./styles/Menu.style.sass";
import ROUTES from "../../config/Routes.config";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/">Home</Link>
        </li>
        {ROUTES &&
          ROUTES.map((item, index) => {
            return (
              <li className="nav-list__item" key={item.title + index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
