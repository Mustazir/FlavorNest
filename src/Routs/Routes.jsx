import { createBrowserRouter } from "react-router-dom";
import Main from "../../public/Layout/Main";

import Home from "./pages/home";
import Menu from "./pages/Menu/Menu";
import OrderTab from "./pages/OrderTab/OrderTab";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"menu",
        element:<Menu></Menu>
      },
      {
        path:"order/:category",
        element:<OrderTab></OrderTab>
      }
    ],
  },
]);
