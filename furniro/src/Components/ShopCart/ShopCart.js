import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import delet from "../../assets/Delete.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [sasia, setsasia] = useState({});

  const handleQuantityChange = (id, value) => {
    if (value === "") {
      setsasia((prev) => ({
        ...prev,
        [id]: "",
      }));
      return;
    }

    setsasia((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };
  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = Number(item.price.replace("$", ""));
    const quantity = sasia[item.id] ?? 1;
    return sum + numericPrice * quantity;
  }, 0);
  return (
    <div className="produkt">
      <div className="container">
        <div className="shopcart ">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <h1>Your cart is empty.</h1>
          ) : (
            <div className="shoprow">
              <div className="tabela">
                <div className="row2">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                </div>
                {cart.map((item, index) => (
                  <div className="row2 " key={item.id}>
                    <img
                      width="105px"
                      height="108px"
                      src={item.img}
                      alt={item.prname}
                      style={{ borderRadius: "10%" }}
                    />
                    <div>
                      <p>{item.prname}</p>
                      <p>{item.price}</p>
                      <input
                        type="number"
                        min="1"
                        max="9999"
                        value={sasia[item.id] ?? 1}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                      />
                      {(() => {
                        const numericPrice = Number(
                          item.price.replace("$", ""),
                        );
                        return <p>{numericPrice * (sasia[item.id] ?? 1)}$</p>;
                      })()}
                    </div>
                    <img
                      onClick={() => removeFromCart(item.id)}
                      width="21px"
                      height="21.88px"
                      src={delet}
                    />
                  </div>
                ))}
              </div>
              <div className="countinue">
                <h1>Cart Totals</h1>
                <div>
                  <p>Subtotal</p>
                  <p>{totalPrice}$</p>
                </div>
                <div>
                  <p>Total</p>
                  <p>{totalPrice}$</p>
                </div>
                <Link to="/checkout">Check Out</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
