import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AuthLayout from "./components/AuthLayout.tsx";
import Signup from "./pages/Signup.tsx";
import Signin from "./pages/Signin.tsx";
import Blog from "./pages/Blog.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import WriteBlog from "./pages/WriteBlog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
        ],
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
      },
      {
        path: "/new-story",
        element: (
          <ProtectedRoute>
            <WriteBlog />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
