import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

import cart from "../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartSidebar from "../CartSidebar/CartSidebar";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="header">
      <Hamburger />
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="nav">
          <ul>
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
        <div className="navmore">
          <ul>
            <li>
              <Link to="/login">
                <img src={user} alt="user" />
              </Link>

              <img onClick={() => setIsCartOpen(true)} src={cart} alt="user" />
              {isCartOpen && (
                <CartSidebar onClose={() => setIsCartOpen(false)} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
