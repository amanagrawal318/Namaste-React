import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./ButtonCss.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { loginUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between shadow-xl h-28 items-center">
      <div className="logo-container h-full ">
        <img
          src={LOGO_URL}
          alt="Logo_Image"
          className="logo w-full h-full px-[30px]"
        />
      </div>
      <div className="nav-items px-16">
        <ul className="flex list-none text-2xl">
          <li className="p-2 m-2">{onlineStatus ? "Online🟢" : "Offline🔴"}</li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              isLogin ? setIsLogin(false) : setIsLogin(true);
            }}
          >
            {isLogin ? "Login" : "Logout"}
          </button>
          <li className="p-2 m-2">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
