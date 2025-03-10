
import * as ReactDOM from "react-dom/client";
  import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routs/Routes";
import AuthProvider from "./Provider/AuthProvider";
import React from "react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
     <HelmetProvider>
        <div className="">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
     </AuthProvider>
    
  </React.StrictMode>
);
