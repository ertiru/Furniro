import React from "react";

const Banner2 = (props) => {
  return (
    <div className="banner2">
      <div className="container">
        <h1>{props.page}</h1>
        <p>
          <span>Home &gt;</span> {props.page}
        </p>
      </div>
    </div>
  );
};

export default Banner2;
