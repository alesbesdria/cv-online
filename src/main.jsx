import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import Home from "./page/Home";
import PageNotFound from "./page/pagenotfound.jsx";
import Contact from "./page/contact";
import Portfolio from "./page/porfolio";
import Cv from "./page/cv.jsx";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cv", 
          element: <Cv />,
        },
        {
          path: "/contact", 
          element: <Contact />,
        },
        {
          path: "/portfolio", 
          element: <Portfolio/>,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
