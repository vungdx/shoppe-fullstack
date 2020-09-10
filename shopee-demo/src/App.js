import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import data from "./data";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import ProductCreateScreen from "./screens/ProductCreateScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import Cookies from "js-cookie";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import AdminRoute from "./component/auth/AdminRoute";
import { useSelector } from "react-redux";


function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomeScreen}></Route>
      <Route path="/products/:id" component={ProductDetailScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <ProtectedRoute path="/cart/:id?" component={CartScreen}></ProtectedRoute>
      <ProtectedRoute path="/shipping" component={ShippingScreen}></ProtectedRoute>
      <ProtectedRoute path="/payment" component={PaymentScreen}></ProtectedRoute>
      <ProtectedRoute path="/placeorder" component={PlaceOrderScreen}></ProtectedRoute>
      <AdminRoute path="/productcreate" isAdmin={userInfo?.isAdmin} component={ProductCreateScreen}></AdminRoute>
    </BrowserRouter >
  );
}

export default App;
