import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);
  // console.log(data);

  // concept of lifting state up
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="">⬇️</span>
        </div>
        {/* category accordian */}
        {showItem && <ItemList Items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
