import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Projects from "./pages/Projects";
import Navbar from "./sections/Navbar";
import Fun from "./pages/Fun";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Fun",
    element: <div> Fun </div>
  },
  {
    path: "/Projects",
    element: <Projects/>
  },
  {
    path: "/Academia",
    element: <Academia/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
