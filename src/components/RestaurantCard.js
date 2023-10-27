import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.slice(0, 2).join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
