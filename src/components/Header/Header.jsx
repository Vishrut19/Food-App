import React from "react";
import "./Header-style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s_OFvkP9t7db7NW9N2wlKa1UGnIrp4ZRSb-PceQ&s"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>&#128722;</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
