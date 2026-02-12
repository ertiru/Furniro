import React, { useState } from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import view from "../assets/view.png";
import hide from "../assets/hide.png";

const User = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="login">
      <div>
        <img src={logo} width="170px" alt="logo" />
        <div className="logform">
          <h1>Login</h1>
          <p>Email</p>
          <input type="email" />
          <p>Password</p>
          <div style={{ position: "relative" }}>
            <input type={show ? "text" : "password"} />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setshow(!show)}
            >
              <img
                width="15px"
                height="15px"
                src={show ? view : hide}
                alt="view"
              />
            </span>
          </div>
          <p>Forgot Password?</p>
          <button>Sign in</button>
        </div>
        <p>or countinue with</p>
        <div className="row">
          <img src={google} width="17px" height="17px" alt="google" />
          <img src={github} width="17px" height="17px" alt="github" />
          <img src={facebook} width="17px" height="17px" alt="fb" />
        </div>
        <p>
          Don't have an account yet? <strong>Register for free</strong>
        </p>
      </div>
    </div>
  );
};

export default User;
