import React from "react";
import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import room from "../../assets/room.png";

const Browse = () => {
  const fotot = [
    {
      img: dining,
      text: "Dining",
    },
    {
      img: living,
      text: "Living",
    },
    {
      img: room,
      text: "Bedroom",
    },
  ];
  return (
    <div className="browse">
      <div className="container">
        <h1>Browse the range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
          {fotot.map((item, index) => (
            <div>
              <img src={item.img} alt={item.text} />
              <h2>{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
