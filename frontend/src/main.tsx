import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Publish from "./pages/Publish"
// import Post from "./pages/PostCard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts.tsx";
import ShowPost from "./pages/ShowPost.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/post/:id",
    element: <ShowPost />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/publish",
    element: <Publish />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
