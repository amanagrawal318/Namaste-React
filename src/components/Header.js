import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./ButtonCss.css";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo_Image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
