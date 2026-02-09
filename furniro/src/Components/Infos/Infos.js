import React from "react";
import InfoData from "./InfoData";

const Infos = () => {
  return (
    <div className="produkt">
      <div className="infos ">
        <div className="container">
          {InfoData.map((item, index) => (
            <div className="info-item">
              <img src={item.img} />
              <div className="item">
                <h1>{item.head}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infos;
