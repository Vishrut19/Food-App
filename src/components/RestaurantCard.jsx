/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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

  const { user } = useContext(UserContext);
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
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
