import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../redux/menuSlice";
const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  //custom hooks
  // const resInfo = useRestaurantMenu(resId);
  //subscribing to the store
  const resInfo = useSelector((state) => state.menus.resMenuInfo);
  const categories = useSelector((state) => state.menus.categories);

  // console.log("hello -> before useefeect " + resInfo);

  useEffect(() => {
    //fetch menu from api using redux thunk
    dispatch(fetchMenus(resId));
  }, []);
  // const jsonInf = JSON.stringify(info);
  // console.log("ResInfo -> " + jsonInf);
  // console.log("loading -> " + loading);

  if (resInfo === null) return <h1>loading....</h1>;

  const { name, cuisines, costForTwoMessage } = resInfo;
  console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>
      {/* catogories */}
      {categories.map((category, index) => {
        return (
          // controlled component
          // lifting the state up
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
