import React, { useState, useContext } from "react";
import products from "./ShuffleData";
import share from "../../assets/compare.png";
import compare from "../../assets/compare.png";
import like from "../../assets/like.png";
import likedpr from "../../assets/liked.png";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Shuffle = () => {
  const { addToCart } = useContext(CartContext);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [likedProducts, setLikedProducts] = useState({});

  const likeit = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProducts = products.filter(
    (p) => Number(p.price.replace("$", "")) <= Number(maxPrice),
  );

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const start = (page - 1) * perPage;
  const currentProducts = filteredProducts.slice(start, start + perPage);

  const changeNumber = (e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <div className="container">
      <div className="filtro">
        <div className="filter">
          <div>
            <label>
              Max Price:
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setPage(1);
                }}
              />
              $
            </label>
            <span></span>
            <p>
              Showing 1 - {perPage} of {filteredProducts.length}
            </p>
          </div>

          <div>
            Show
            <select value={perPage} onChange={changeNumber}>
              <option value="16">16</option>
              <option value="12">12</option>
              <option value="8">8</option>
            </select>
            Short By
            <select>
              <option>Default</option>
            </select>
          </div>
        </div>
      </div>

      {currentProducts.length === 0 ? (
        <p className="no">No products.</p>
      ) : (
        <div className="rowpr">
          {currentProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.prname} />

              {item.discount && <p className="discount">{item.discount}</p>}
              {item.isnew && <p className="isnew">{item.isnew}</p>}

              <div className="infopr">
                <h3>{item.prname}</h3>
                <p>{item.desc}</p>
                <div className="row1">
                  <h4>${item.price}</h4>
                  {item.discount && (
                    <p className="oldprice">${item.oldprice}</p>
                  )}
                </div>
              </div>

              <div className="overlay">
                <button onClick={() => addToCart(item)} className="add">
                  Add to cart
                </button>
                <div className="spanrow">
                  <span>
                    <img src={share} alt="share" /> Share
                  </span>
                  <span>
                    <img src={compare} alt="compare" /> Compare
                  </span>
                  <span>
                    <img
                      src={likedProducts[item.id] ? likedpr : like}
                      onClick={() => likeit(item.id)}
                      alt="like"
                    />
                    {likedProducts[item.id] ? "Liked" : "Like"}
                  </span>
                </div>
                <Link to={`/products/${item.prname}`} className="linku">
                  Go to product
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>
          Page {page} of {totalPages || 1}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shuffle;
