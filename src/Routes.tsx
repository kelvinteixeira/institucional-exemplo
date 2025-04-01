import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginCard } from "./components/LoginCard";
import { RegisterCard } from "./components/RegisterCard";
import { HomePage } from "./screen/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/register",
    element: <RegisterCard />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
