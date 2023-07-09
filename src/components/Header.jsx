import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("I am useEffect Hook");
  }, [btnName]);

  const handleLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  // Desctructuring User
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg header">
      <div className="logo-container">
        <img className="p-2 h-28 logo" src={LOGO_URL} alt="logo image" />
      </div>
      <div className="m-2 nav-items">
        <ul className="flex py-10">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">&#128722;</li>
          <span className="p-5 font-bold text-red-600">{user.name}</span>
          <button className="login-btn" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
