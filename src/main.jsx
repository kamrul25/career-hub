import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Statistics from "./components/Statistics.jsx";
import Blog from "./components/Blog.jsx";
import AppliedJobs from "./components/AppliedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/statistics',
        element:<Statistics />
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs />
      },
      {
        path:'/blog',
        element:<Blog />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
