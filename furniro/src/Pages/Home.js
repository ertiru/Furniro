import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Browse from "../Components/Browse/Browse";
import OurProducts from "../Components/OurProducts/OurProducts";
import Rooms from "../Components/Rooms/Rooms";
import Setups from "../Components/Setups/Setups";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Browse />
      <OurProducts />
      <Setups />
      <Footer />
    </div>
  );
};

export default Home;
