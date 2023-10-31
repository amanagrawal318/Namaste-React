import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";
const Body = () => {
  //custom hooks
  const [listOfRestaurants, filteredRestaurantList, setFilteredRestaurantList] =
    useListOfRestaurant();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Please Check your Internet Connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() =>
            setFilteredRestaurantList(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            )
          }
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
