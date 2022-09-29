import { useRoutes } from "react-router-dom";
import { Header } from "../components/Header/Header.component";
import DashboardPage from "../pages/Dashboard/Dashboard.page";
import LogInPage from "../pages/LogIn/LogIn.page";
import RegistrationPage from "../pages/Registration/Registration.page";
import TodosPage from "../pages/Todos/Todos.page";

export const Routes = () => {
  const element = useRoutes([
    { path: "/login", element: <LogInPage /> },
    { path: "/sign-up", element: <RegistrationPage /> },
    {
      element: <Header />,
      path: "/",
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "todos", element: <TodosPage /> },
      ],
    },
  ]);
  return element;
};
