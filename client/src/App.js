import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth", element: <Auth /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
