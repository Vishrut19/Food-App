import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("I am useEffect Hook");
  }, [btnName]);

  const handleLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>&#128722;</li>
          <button className="login-btn" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
