import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./ButtonCss.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo_Image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online🟢" : "Offline🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              isLogin ? setIsLogin(false) : setIsLogin(true);
            }}
          >
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
