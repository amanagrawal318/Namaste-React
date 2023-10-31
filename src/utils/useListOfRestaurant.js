import { useState, useEffect } from "react";
import { swiggy_api_URL } from "./constants";
const useListOfRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    console.log("useefeect");
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    const res = await fetch(swiggy_api_URL);
    const data = await res.json();
    console.log(
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    //optional chaining
    setListOfRestaurant(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [listOfRestaurants, filteredRestaurantList, setFilteredRestaurantList];
};

export default useListOfRestaurant;
