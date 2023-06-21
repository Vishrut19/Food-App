/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // This is Optional Chaining
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Star Rating</h4>
      <h4>&#8360; {costForTwo / 100} For Two </h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
