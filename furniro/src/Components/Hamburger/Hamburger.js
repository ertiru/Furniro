import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartSidebar from "../CartSidebar/CartSidebar";

const Hamburger = () => {
  return (
    <>
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" id="menuCheckbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <div className="navmore">
              <ul>
                <li>
                  <Link to="/login">
                    <img src={user} alt="user" />
                  </Link>
                  <Link to="/shoppingcart">
                    <img src={cart} alt="user" />
                  </Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Hamburger;
