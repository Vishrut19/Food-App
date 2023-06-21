/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // Here we are destructuring resId. So instead of writing params.resId. I am writing resId
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  // ? Here we are destructuring the data from the swiggy API.

  const { name, cusinies, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cusinies}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu Items</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
