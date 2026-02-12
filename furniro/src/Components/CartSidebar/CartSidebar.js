import React, { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import rmvbar from "../../assets/rmvbar.png";
import delet from "../../assets/del1.png";
import { Link } from "react-router-dom";

const CartSidebar = ({ onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="overlayside" onClick={onClose}>
      <div className="cartbar" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <h1>Shopping Cart</h1>
          <img
            src={rmvbar}
            alt="Close"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
        <hr />
        <div className="cart-items">
          {cart.length === 0 ? (
            <h1>Your cart is empty.</h1>
          ) : (
            <div className="scroll">
              {cart.map((item) => {
                return (
                  <div className="rowcart" key={item.id}>
                    <img
                      width="105"
                      height="108"
                      src={item.img}
                      alt={item.prname}
                      style={{ borderRadius: "10%" }}
                    />

                    <div>
                      <p>{item.prname}</p>
                      <p>
                        1 X <span>{item.price}</span>
                      </p>
                    </div>

                    <img
                      onClick={() => removeFromCart(item.id)}
                      width="20"
                      height="20"
                      src={delet}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                );
              })}

              <Link to="/shoppingcart" className="go">
                ShopCart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
