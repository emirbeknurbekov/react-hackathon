import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import ResetPassword from "../components/account/ResetPassword";
import MainLayout from "../layout/MainLayout";
import AddProductPage from "../pages/addProductPage/AddProductPage";
import ProductListPage from "../pages/productListPage/ProductListPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import EditProductPage from "../pages/editProductPage/EditProductPage";
import OneProductPage from "../pages/OneProductPage/OneProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/products/:id" element={<OneProductPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default MainRoutes;
