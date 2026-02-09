import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="discover">
          <p>New Arrival</p>
          <h1>
            Discover Our<br></br> New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to="/shop">
            {" "}
            <button className="buy">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
