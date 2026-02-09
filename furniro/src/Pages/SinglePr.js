import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import Products from "../Components/OurProducts/OurProductsData";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const SinglePr = () => {
  const [value, setvalue] = useState(1);
  const [selected, setselected] = useState(0);
  const [ngjyra, setngjyra] = useState(0);
  const increase = () => setvalue((prev) => prev + 1);
  const decrease = () => {
    if (value > 1) setvalue((prev) => prev - 1);
  };
  const { name } = useParams();
  const product = Products.find(
    (p) => p.prname.toLowerCase() === name.toLowerCase(),
  );

  useEffect(() => {
    if (product) document.title = `${product.prname}`;
    else document.title = "Product not found";
  }, [product]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p>
            We couldn't find the product: <strong> {name}</strong>
          </p>
        </div>
        <Footer />
      </>
    );
  }
  const Sizes = ["S ", "L", "XL"];
  const colors = ["purple", "brown", "black"];

  return (
    <div className="produkt">
      <div className="container">
        <Header />
        <div className="rowpr singleprod">
          <img src={product.img}></img>
          <div className="prdesc">
            <div>
              <h1>{product.prname}</h1>
              <p>{product.price}</p>
              <p>{product.desc}</p>

              <span>Size</span>
              <div className="rowbt">
                {Sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setselected(index)}
                    style={{
                      backgroundColor:
                        selected === index ? " #b88e2f" : "#f9f1e7",
                      color: selected === index ? "white" : "black",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span>Color</span>
              <div className="rowbt">
                {colors.map((color, index) => (
                  <div
                    onClick={() => setngjyra(index)}
                    style={{
                      backgroundColor: color,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: ngjyra === index ? "1.5px solid #b88e2f" : "none",
                      boxSizing: "border-box",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="rowipr">
              <div className="quantity">
                <button onClick={decrease}>-</button>
                <span>{value}</span>
                <button onClick={increase}>+</button>
              </div>
              <button className="prod">Add to cart</button>
              <button className="prod">+ Compare</button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="descr">
          <h1>Description</h1>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SinglePr;
