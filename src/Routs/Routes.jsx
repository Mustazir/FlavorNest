import { createBrowserRouter } from "react-router-dom";
import Main from "../../public/Layout/Main";

import Home from "./pages/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
