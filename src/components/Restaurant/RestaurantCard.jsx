/* eslint-disable react/prop-types */
import React from "react";
import "./RestaurantCard.css";

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
        className="res-logo "
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
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
