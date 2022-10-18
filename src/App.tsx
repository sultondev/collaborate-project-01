// Media
import "./styles/App.sass";

// Componenets
import Layout from "./components/Layout/BaseLayout.component";
import { UserStatus } from "./typing/enums/UserStatus.enum";

// Hooks
import { useUser } from "./hooks/useUser.hook";
import useLocalStorage from "use-local-storage";
import { useMemo } from "react";
import layouts from "./routes/Layout/Routes.layout";

// Configs

function App() {
  const { user } = useUser();

  const layoutProps = useMemo(() => {
    return layouts[user.role.type.toUpperCase() as UserStatus];
  }, [user.role.type]);

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
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="">
          <button onClick={themeSwitch} className="app-header">
            Change
          </button>
        </div>
        {layoutProps ? <Layout {...layoutProps} /> : ""}
      </div>
    </div>
  );
}

export default App;
