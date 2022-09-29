import "./styles/App.sass";
import useLocalStorage from "use-local-storage";
// import { Routes, Route, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";

// Componenets
import { Routes } from "./routes/routes.config";
// import { store } from "./redux/store";

function App() {
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
        <Routes />
      </div>
      {/* <Link to="/tasks">Tasks</Link>{" "} */}
    </div>
  );
}

export default App;
