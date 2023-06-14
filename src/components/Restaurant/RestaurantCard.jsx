/* eslint-disable react/prop-types */
import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo "
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
        alt="restaurant logo"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(",")}</h4>
      <h4>{resData.data.avgRating} Star Rating</h4>
      <h4>&#8360; {resData.data.costForTwo / 100} For Two </h4>
      <h4>{resData.data.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
