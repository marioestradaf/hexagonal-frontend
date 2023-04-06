import { createBrowserRouter } from "react-router-dom";
import AuthForm from "./auth/presentation/AuthForm";
import UserPage, { UserPageLoader } from "./user/presentation/UserPage";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AuthForm />,
  },
  {
    path: "user",
    element: <UserPage />,
  },
  {
    path: "user/:id",
    element: <UserPage />,
    loader: UserPageLoader,
  }
])