import React from "react";
import Header from "../../src/Components/Header/Header";
import Banner2 from "../Components/Banner2/Banner2";
import Shuffle from "../Components/Shuffle/Shuffle";

import Infos from "../Components/Infos/Infos";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Header />
      <Banner2 page="Shop" />
      <Shuffle />
      <Infos />
      <Footer />
    </div>
  );
};

export default Shop;
