import { CDN_URL } from "../utils/constants";

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
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
