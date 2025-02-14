import { createBrowserRouter } from "react-router-dom";
import Main from "../../public/Layout/Main";

import Home from "./pages/home";
import Menu from "./pages/Menu/Menu";
import OrderTab from "./pages/OrderTab/OrderTab";
import Login from "./pages/OrderTab/Login/Login";
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
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <OrderTab></OrderTab>,
        loader: () => fetch("http://localhost:5000/menuProductCount"),
      },
      {
        path: "order/:category",
        element: <OrderTab></OrderTab>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menucount/${params.category}`), // ✅ Fetch category-wise count
      },
      {
        path : 'login',
        element : <Login></Login>
      }
    ],
  },
]);

