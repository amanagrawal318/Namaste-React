import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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

//always use keys to uniquely identify the data
//Plz Donot use index as a key in react bcoz it may affect the performance

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
