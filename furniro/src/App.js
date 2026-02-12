import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

import ShoppingCart from "./Pages/ShoppingCart";
import SinglePr from "./Pages/SinglePr";
import Compare from "./Pages/Compare";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products/:name" element={<SinglePr />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
