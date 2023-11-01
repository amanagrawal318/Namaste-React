import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <div className="res-card m-[10px] p-[5px] w-[210px] h-[315px] shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] rounded-2xl hover:cursor-pointer hover:shadow-[rgba(0,_38,_57,_77)_0px_20px_30px_-10px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo w-full rounded-t-lg"
      />
      <h3 className="res-name font-bold text-lg font-sans">{name}</h3>
      <h4 className="text-md">{cuisines.slice(0, 2).join(", ")}</h4>
      <h4 className="text-md">{avgRating} ⭐</h4>
      <h4 className="text-md">{costForTwo}</h4>
      <h4 className="text-md">{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
