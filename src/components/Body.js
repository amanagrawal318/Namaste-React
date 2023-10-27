import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/RestaurantData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setListOfRestaurant(
              listOfRestaurants.filter((res) => res.data.avgRating > 4)
            )
          }
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
