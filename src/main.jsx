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
import JobDetails from "./components/JobDetails.jsx";
import JobCategories from "./components/JobCategories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => fetch(`jobFeatures.json`),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
