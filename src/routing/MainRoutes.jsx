import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "../components/account/SignUp";
import HomePage from "../pages/homePage/HomePage";
import Login from "../components/account/SignIn";
import ResetPassword from "../components/account/ResetPassword";
import MainLayout from "../layout/MainLayout";
import AddProductPage from "../pages/addProductPage/AddProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default MainRoutes;
