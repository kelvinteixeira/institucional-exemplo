import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./screen/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
