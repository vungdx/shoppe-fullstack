import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Link
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import data from './data';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';

function App() {
  return (
    <BrowserRouter>

      <Route path="/productcreate" component={ProductCreateScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/" exact={true} component={HomeScreen}></Route>
      <Route path="/products/:id" component={ProductScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>

    </BrowserRouter>
  );
}

export default App;
