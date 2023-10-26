import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./RestaurantData";
/*FoodVilla App/Swiggy clone
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -search
 *   -RestaurantContainer
 *     -Restaurant card
 * Footer
 *  -copyright
 *  - links
 *  - address
 *  - contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w480-h960-rw"
          alt="Logo_Image"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
  } = resData.data;
  return (
    <div className="res-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
//always use keys to uniquely identify the data
//Plz Donot use index as a key in react bcoz it may affect the performance
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//render comvert object to html tag
root.render(<AppLayout />);
