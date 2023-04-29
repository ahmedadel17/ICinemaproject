import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import 'flowbite';

import {
  RootLayout,
  Admin,
  Boking,
  Profile,
  Service,
  Timeline,
  AuthLayout,
} from "./pages";
import { LoginForm, SignupForm } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: "profile", element: <Profile /> },
      { path: "profile", element: <Profile /> },
      { path: "boking", element: <Boking /> },
      { path: "service", element: <Service /> },
      { path: "timeline", element: <Timeline /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <SignupForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
