import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // useState Hook
  // But is more like array destructuring
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //Th is is used to create a copy of filtered restaurants.

  // ! Whenever state variable updates, react triggers a reconciliation cycle(re-renders the components)
  // console.log("Body is rendering again and again");

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
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const handleFilter = () => {
    const filteredList = listofRestaurant.filter(
      (res) => res.data.avgRating > 4
    );
    setListofRestaurant(filteredList);
  };

  // Filter the restaurants and Update the UI
  // searchText
  const handleSearch = () => {
    setFilteredRestaurant(
      listofRestaurant.filter((res) =>
        res.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  //! Conditional Rendering
  // if (listofRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type=" text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*This is a typical example of Reusable Component*/}
        {/* <RestaurantCard resData={resList[0]} />*/}
        {filteredRestaurant.map((restaurant) => (
          // Here we are dynamically routing to each restaurant to each restaurant page
          <Link
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
