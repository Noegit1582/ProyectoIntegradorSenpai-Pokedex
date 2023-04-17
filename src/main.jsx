import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardInfo from "./Components/Card-Info/CardInfo";

import NotFound404 from "./Components/NotFound404/NotFound404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound404 />,
  },
  {
    path: "/:name",
    element: <CardInfo />,
    errorElement: <NotFound404 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
