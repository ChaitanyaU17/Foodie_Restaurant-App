// RestaurantMenu.js
import React, { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <ShimmerMenu />;

    const vegDisplayText = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.vegFilter?.attributes?.displayText;
    const  nonvegDisplayText = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.nonvegFilter?.attributes?.displayText;
    const totalRatingsString = resInfo?.cards[2]?.card?.card?.info?.totalRatingsString;



    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(resInfo);

    return (
        <div className="text-left">
            <h1 className="font-bold text-2xl mt-8 pb-2 ml-80">{name}</h1>
            <div className="text-left ml-80 mr-80 shadow-lg rounded-lg p-4 bg-gray-100 py-4">
            <p className="font-medium">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p className="text-sm pr-2">
            <span className=" text-yellow-600 text-lg pr-1">★</span>{avgRating} ({totalRatingsString})</p>
            <div className="mt-2">
            <button className="bg-green-600 text-white px-2 py-0.5 rounded-lg lowercase">{vegDisplayText}</button>
            <button className="ml-4 bg-red-600 text-white px-2 py-0.5 rounded-lg lowercase">{nonvegDisplayText}</button>
            </div>
            </div>
            

            {/* categories accordion */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={index}
                    data={category.card.card}
                    showIndex={showIndex}
                    setShowIndex={setShowIndex}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
