import React from "react";
import Header from "../Components/Header/Header";
import Banner2 from "../Components/Banner2/Banner2";
import Intouch from "../Components/Intouch/Intouch";
import ContactInfo from "../Components/ContactInfo/ContactInfo";
import Infos from "../Components/Infos/Infos";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Banner2 page="Contact" />
      <Intouch />
      <ContactInfo />
      <Infos />
      <Footer />
    </div>
  );
};

export default Contact;
