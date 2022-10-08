// Pages
import DashboardPage from "../../pages/Dashboard/Dashboard.page";
import LogInPage from "../../pages/LogIn/LogIn.page";
import PremiumPage from "../../pages/PremiumPage/Premium.page";
import RegistrationPage from "../../pages/Registration/Registration.page";
import TodosPage from "../../pages/Todos/Todos.page";
import WelcomePage from "../../pages/Welcome/Welcome.page";

// Typing
import { UserStatus } from "../../typing/enums/UserStatus.enum";
import { LayoutProps } from "../../typing/interfaces/LayoutProps.interface";

const layouts: Record<UserStatus, LayoutProps | null> = {
  [UserStatus.AUTHENTICATED]: {
    routes: {
      Todos: {
        path: "/todos",
        link: "/todos",
        element: <TodosPage />,
      },
      Dashboard: {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    },
  },
  [UserStatus.UN_AUTHENTICATED]: {
    routes: {
      Welcome: {
        path: "/",
        link: "/",
        element: <WelcomePage />,
      },
      "Premium Version": {
        path: "/premium",
        link: "/premium",
        element: <PremiumPage />,
      },
      "Sign In": {
        path: "/login",
        link: "/login",
        element: <LogInPage />,
      },
      "Sign Up": {
        path: "/sign-up",
        link: "/sign-up",
        element: <RegistrationPage />,
      },
    },
  },
};

export default layouts;
