import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Register from "../components/account/SignUp";
import HomePage from "../pages/homePage/HomePage";
import Login from "../components/account/SignIn";
import ResetPassword from "../components/account/ResetPassword";

const MainRoutes = () => {
  const location = useLocation();

  const ShowNavbarAndFooter = () =>
    !["/login", "register", "/reset-password"].includes(location.pathname);

  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/login",
      element: <Login />,
    },
    {
      id: 3,
      path: "/register",
      element: <Register />,
    },
    {
      id: 4,
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ];

  return (
    <>
      {/* {ShowNavbarAndFooter && <Navbar />} */}
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* {ShowNavbarAndFooter && <Footer />} */}
    </>
  );
};

export default MainRoutes;
