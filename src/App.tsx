import "./styles/App.sass";
import useLocalStorage from "use-local-storage";
// import { Routes, Route, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";

// Componenets
import { store } from "./redux/store";
import { Provider } from "react-redux";
import layouts from "./routes/Layout/Routes.layout";
import Layout from "./components/Layout/BaseLayout.component";
import { UserStatus } from "./typing/enums/UserStatus.enum";
import { useUser } from "./hooks/useUser.hook";
import { useMemo } from "react";
import { userPropsType } from "./typing/types/User/userProps.type";

function App() {
  const { user } = useUser();
  const layoutProps = useMemo(
    () => layouts[user.role.type.toUpperCase() as UserStatus],
    [user.role.type]
  );
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const themeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Provider store={store}>
      <div className="app" data-theme={theme}>
        <div className="container">
          <div className="">
            <button onClick={themeSwitch} className="app-header">
              Change
            </button>
          </div>
          {layoutProps ? <Layout {...layoutProps} /> : ""}
          {/* <Routes /> */}
        </div>
        {/* <Link to="/tasks">Tasks</Link>{" "} */}
      </div>
    </Provider>
  );
}

export default App;
