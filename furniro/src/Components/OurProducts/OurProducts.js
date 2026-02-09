import React, { useState } from "react";
import Products from "./OurProductsData";
import share from "../../assets/compare.png";
import compare from "../../assets/compare.png";
import likedpr from "../../assets/liked.png";
import like from "../../assets/like.png";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const [liked, setLiked] = useState(false);
  const likeit = () => setLiked(!liked);

  return (
    <div className="produkt">
      <div className="container">
        <h1>Our Products</h1>
        <div className="rowpr">
          {Products.map((item, index) => (
            <div>
              <Link to={`/products/${item.prname}`}>
                <div className="card" key={index}>
                  <img src={item.img} alt={item.prname} />

                  {item.discount && <p className="discount">{item.discount}</p>}
                  {item.isnew && <p className="isnew">{item.isnew}</p>}

                  <div className="infopr">
                    <h3>{item.prname}</h3>
                    <p>{item.desc}</p>
                    <div className="row1">
                      <h4>{item.price}</h4>

                      {item.discount && <p>{item.oldprice}</p>}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/shop">
          <button className="showmore">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
