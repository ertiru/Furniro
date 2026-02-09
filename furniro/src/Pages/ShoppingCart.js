import React from "react";
import ShopCart from "../Components/ShopCart/ShopCart";
import Header from "../Components/Header/Header";
import Banner2 from "../Components/Banner2/Banner2";
import Infos from "../Components/Infos/Infos";
import Footer from "../Components/Footer/Footer";

const ShoppingCart = () => {
  return (
    <div>
      <Header />
      <Banner2 page="Cart" />
      <ShopCart />

      <Infos />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
