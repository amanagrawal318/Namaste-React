import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
// import swiggyLogo from "../utils/swiggyLogo.svg";
// import "./ButtonCss.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { loginUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header flex justify-between shadow-xl h-28 items-center dark:bg-[#0F0F0F] dark:shadow-xl">
      <div className="logo-container h-full ">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Logo_Image"
            className="logo w-full h-full px-[30px]"
          />
        </Link>
      </div>
      <div className="nav-items px-16">
        <ul className="flex list-none text-2xl">
          <li data-testid="onlineStatus" className="p-2 m-2 dark:text-white">
            {onlineStatus ? "Online🟢" : "Offline🔴"}
          </li>
          <li className="p-2 m-2 dark:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 dark:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 dark:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-2 dark:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2 font-bold text-black dark:text-white">
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>
          <button
            className="login-btn  dark:text-white"
            onClick={() => {
              isLogin ? setIsLogin(false) : setIsLogin(true);
            }}
          >
            {isLogin ? "Login" : "Logout"}
          </button>
          {/* <li className="p-2 m-2">{loginUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
