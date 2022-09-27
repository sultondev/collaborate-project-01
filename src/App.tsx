import "./styles/App.sass";
import useLocalStorage from "use-local-storage";
import { Routes, Route, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";

// Pages
import LogInPage from "./pages/LogIn/LogIn.page";
import RegistrationPage from "./pages/Registration/Registration.page";
import TodosPage from "./pages/Todos/Todos.page";
// Componenets
import { Header } from "./components/Header/Header.component";
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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header>
                  <></>
                </Header>
                <Outlet />
              </>
            }
          >
            <Route path="todos" element={<TodosPage />} />
          </Route>
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LogInPage />} />
        </Routes>
      </div>
      {/* <Link to="/tasks">Tasks</Link>{" "} */}
    </div>
  );
}

export default App;
