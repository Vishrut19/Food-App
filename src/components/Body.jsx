import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // useState Hook
  // But is more like array destructuring
  const [listofRestaurant, setListofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.628779134691406&lng=88.41730849485198&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //! optional chaining is best way to render data from an API
    setListofRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  console.log("body rendered");

  const handleFilter = () => {
    console.log(listofRestaurant);
    const filterList = listofRestaurant.filter((res) => res.data.avgRating > 4);
    console.log(filterList);
    setListofRestaurant(filterList);
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*This is a typical example of Reusable Component*/}
        {/* <RestaurantCard resData={resList[0]} />*/}
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
