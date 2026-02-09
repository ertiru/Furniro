import React from "react";
import setup11 from "../../assets/setup11.png";
import setup12 from "../../assets/setup12.png";
import setup13 from "../../assets/setup13.png";
import setup14 from "../../assets/setup14.png";
import setup15 from "../../assets/setup15.png";
import setup22 from "../../assets/potty.png";

const Setups = () => {
  return (
    <div className="produkt">
      <div className="container">
        <div className="setup">
          <p>Share your setup with</p>
          <h1>#Furniro Furniture</h1>

          <div className="collagerow">
            <img src={setup11} alt="setup11" />
            <img src={setup12} alt="setup12" />
            <img src={setup13} alt="setup13" />
            <img src={setup14} alt="setup14" />
            <img src={setup15} alt="setup15" />
          </div>
          <div className="collage">
            <div className="clleft">
              <img src={setup13} alt="setup21" />
              <img src={setup22} alt="setup22" />
            </div>
            <div className="clright">
              <img src={setup22} alt="setup23" />
              <img src={setup14} alt="setup24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setups;
