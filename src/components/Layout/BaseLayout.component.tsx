import { Header } from "../Header/Header.component";
import { Route, Routes } from "react-router-dom";
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";
import { FC } from "react";

const Layout: FC<LayoutProps> = ({ routes }) => {
  // console.log(routes);
  return (
    <div className="">
      <Header routes={routes} />
      <Routes>
        {routes &&
          Object.entries(routes).map(([path, route]) => (
            <Route
              key={"route-path" + path}
              path={route.path}
              element={route.element}
            />
          ))}
      </Routes>
    </div>
  );
};

export default Layout;
