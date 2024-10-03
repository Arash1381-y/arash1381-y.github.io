import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Projects from "./pages/Projects";
import Navbar from "./sections/Navbar";
import Fun from "./pages/Fun";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fun",
    element: <div> Fun </div>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/academia",
    element: <Academia />,
  },
]);

console.log("testing 1");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Helmet>
      Arash Yadegari
    </Helmet>

    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
