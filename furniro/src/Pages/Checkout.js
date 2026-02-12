import React, { useContext, useState } from "react";
import Header from "../Components/Header/Header";
import Banner2 from "../Components/Banner2/Banner2";
import { CartContext } from "../CartContext/CartContext";
import Infos from "../Components/Infos/Infos";
import Footer from "../Components/Footer/Footer";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = Number(item.price.replace("$", ""));
    const quantity = sasia[item.id] ?? 1;
    return sum + numericPrice * quantity;
  }, 0);

  return (
    <>
      <Header />
      <Banner2 page="Checkout" />
      <div className="produkt">
        <div className="container">
          <div className="billing">
            <div className="bill">
              <h1>Billing details</h1>

              <div className="rowin">
                <h3>First name</h3>
                <h3>Last Name</h3>
              </div>

              <div className="rowin">
                <input type="text" />
                <input type="text" />
              </div>

              <h3>Company Name(optional)</h3>
              <input type="text" />

              <h3>Country/Region</h3>
              <select defaultValue="">
                <option value="" disabled>
                  Select your country
                </option>
              </select>

              <h3>Street address</h3>
              <input type="text" />

              <h3>Town/City</h3>
              <input type="text" />

              <h3>ZIP Code</h3>
              <input type="number" />

              <h3>Email address</h3>
              <input type="email" />

              <input type="text" placeholder="Additional Information" />
            </div>

            <div className="check">
              <div className="row">
                <h2>Product</h2>
                <h2>Subtotal</h2>
              </div>
              {cart.length === 0 ? (
                <h1>Your cart is empty.</h1>
              ) : (
                cart.map((item) => (
                  <div className="row" key={item.id}>
                    <p>
                      {item.prname}
                      <span> X {sasia}</span>
                    </p>
                    <p>{item.price}</p>
                  </div>
                ))
              )}
              <div className="row">
                <p style={{ color: "black" }}>Total</p>
                <p style={{ fontSize: "24px", color: "#B88E2F" }}>
                  <strong>{totalPrice}$</strong>
                </p>
              </div>
              <div className="line"></div>
              <label style={{ marginRight: "auto" }}>
                <input type="radio" value="direct" name="payment" />
                Direct Bank Transfer
              </label>
              <p style={{ textAlign: "Left" }}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <label style={{ marginRight: "auto" }}>
                <input type="radio" value="direct" name="payment" />
                Cash on delivery
              </label>
              <p style={{ textAlign: "left" }}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <strong>privacy policy</strong>.
              </p>

              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Infos />
      <Footer />
    </>
  );
};

export default Checkout;
