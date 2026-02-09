import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="line"></div>
        <div className="footergrid">
          <div className="furniro">
            <h1>Furniro.</h1>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="furniro">
            <p className="links">Links</p>

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
          <div className="furniro">
            <p className="links">Help</p>

            <ul>
              <li>
                <Link to="/">Payment Options</Link>
              </li>
              <li>
                <Link to="/shop">Returns</Link>
              </li>
              <li>
                <Link to="/about">Privacy Policies</Link>
              </li>
            </ul>
          </div>
          <div className="furniro">
            <p className="links">Newsletter</p>
            <div>
              <input type="email" placeholder="Enter Your Email Adress"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="downfooter">
          <div className="line2"></div>
          <div className="bottomrow">
            <p>2023 furniro. All rights reverved</p>
            <p>Developed by Erti Rushiti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
