import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurants,
  filterResListOnSearch,
  filterTopRatedRestaurant,
} from "../redux/restaurantsSlice";
const Body = () => {
  //subscribing to the store
  const listOfRestaurants = useSelector(
    (state) => state.restaurants.listOfRestaurants
  );
  const filteredRestaurantList = useSelector(
    (state) => state.restaurants.filteredRestaurants
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //fetch restaurants from api by redux
    dispatch(fetchRestaurants());
  }, []);

  // console.log(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Please Check your Internet Connection</h1>;

  const { loginUser, setUserName } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-[10px]">
          <input
            type="text"
            className="search-box border border-solid border-black p-1 overflow-hidden rounded-lg "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              dispatch(filterResListOnSearch(searchText));
              {
                e.target.value === "" && dispatch(filterResListOnSearch(""));
              }
            }}
          />
          <button
            className="px-2 py-1 m-2 rounded-lg border bg-gray-700 text-white"
            onClick={() => {
              dispatch(filterResListOnSearch(searchText));
            }}
          >
            search
          </button>
        </div>
        <div className="p-[10px]">
          <button
            className="filter-btn m-2 cursor-pointer px-2 py-1 rounded-lg border bg-gray-700 text-white"
            onClick={() => dispatch(filterTopRatedRestaurant(4.3))}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search p-[10px]">
          <label>LoginInUser </label>
          <input
            type="text"
            className="search-box border border-solid border-black px-2 py-1 overflow-hidden rounded-lg my-1"
            value={loginUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap items-center ">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/* ....higher order function */}
            {restaurant.info.sla.deliveryTime <= 20 ? (
              <RestaurantWithPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
