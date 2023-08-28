import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import UserPage, { UserPageLoader } from "./User";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
]);
