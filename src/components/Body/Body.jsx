import React from "react";
import "./Body-style.css";
import RestaurantCard from "../Restaurant/RestaurantCard";

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "39248",
      name: "KFC",
      uuid: "80bb110e-3111-4015-96dd-2a780231c0ba",
      city: "7",
      area: "Diamond Plaza Mall",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "kfc-dumdum-dumdum",
        city: "kolkata",
      },
      cityState: "7",
      address: "Diamond Plaza Mall, Shop No-1,Plot NO-1,Pin-700055",
      locality: "Dumdum",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "39248",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "701653",
      name: "Coco's kitchen",
      uuid: "cbb20ef9-dfc0-4b79-b574-8753b99350c1",
      city: "7",
      area: "Dumdum",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 4.5,
      slugs: {
        restaurant: "coco's-kitchen-dumdum-dumdum",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "Roy Para Rd, Roy Para, Sinthee, Kolkata, West Bengal 700050, India",
      locality: "Roy Para Rd",
      parentId: 386123,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=7105172~p=7~eid=00000188-b9d3-2dba-04b3-f73c0097074d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "701653",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "13920",
      name: "Wow! Momo",
      uuid: "4d54009f-3438-486e-8d1c-a9468b7ab7e3",
      city: "7",
      area: "Jessore Road",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "90ac3da2963978f866177263fba805a7",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "wow-momo-nagerbazar-lake-town",
        city: "kolkata",
      },
      cityState: "7",
      address: "965 Cal Jessore Road, Dumdum Kolkata, near Diamond Plaza",
      locality: "Jessore Road",
      parentId: 1776,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹99",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "13920",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "455808",
      name: "Shennong Kitchen",
      uuid: "6a7dc674-868b-4668-994a-ce782eac5e0c",
      city: "7",
      area: "Nagerbazer Mall Road",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "rzciadn729bdddgfje6s",
      cuisines: ["Chinese"],
      tags: [],
      costForTwo: 29900,
      costForTwoString: "₹299 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "shennong-kitchen-dumdum-dumdum",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "10/7, N.C SEN SARANI,, WARD NO-21, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700080",
      locality: "Dumdum",
      parentId: 273891,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2800,
        message: "",
        title: "Delivery Charge",
        amount: "2800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "455808",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/*This is a typical example of Reusable Component*/}
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[2]} />
      </div>
    </div>
  );
};

export default Body;
