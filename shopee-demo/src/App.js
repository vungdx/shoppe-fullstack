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

function App() {

  return (
    <BrowserRouter>
      <Route path="/productcreate" component={ProductCreateScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/payment" component={PaymentScreen}></Route>
      <Route path="/shipping" component={ShippingScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/" exact={true} component={HomeScreen}></Route>
      <Route path="/products/:id" component={ProductDetailScreen}></Route>
      <ProtectedRoute path="/cart/:id?" component={CartScreen}></ProtectedRoute>
    </BrowserRouter >
  );
}

export default App;
