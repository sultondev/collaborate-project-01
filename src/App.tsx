import "./App.sass";
import useLocalStorage from "use-local-storage";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks.page";
import "./assets/styles/mobileStyles/MobileStyles.sass";
import { Header } from "./components/Header/Header.component";

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
        <Header>
          <div className="">
            <button onClick={themeSwitch} className="app-header">
              Change
            </button>
          </div>
        </Header>
        <Routes>
          <Route path="todos" element={<Tasks />}></Route>
        </Routes>
      </div>
      {/* <Link to="/tasks">Tasks</Link>{" "} */}
    </div>
  );
}

export default App;
