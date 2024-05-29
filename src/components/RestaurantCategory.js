// RestaurantCategory.js
import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
        setShowIndex(showItems ? null : data.index);
    };

    return (
        <div>
            {/* header */}
            <div className="w-6/12 m-auto my-4 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "▲" : "▼"}</span>
                </div>
                {showIndex === data.index && showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
