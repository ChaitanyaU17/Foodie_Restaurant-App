import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {loggedInUser} = useContext(userContext);

    const {
      cloudinaryImageId,
      name,
      avgRating, 
      cuisines,
      costForTwo,
      sla
    } = resData?.info;


    return (
    <div data-testid = "resCard" className="m-4 p-4 w-[280px] max-w-[320px] rounded-lg  hover:scale-95 transition-transform duration-300">
        <img 
        className="rounded-lg object-cover h-[150px] w-[300px]" 
        alt="res-logo" 
        src={ CDN_URL    + 
            cloudinaryImageId }
        />
        <h3 className="font-bold py-1.5 text-lg" >{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <h4>{costForTwo}</h4>
        <h4 className="font-medium">
            <span className="text-yellow-400 text-xl p-1">★</span>{avgRating}.
            <span className="p-2">{sla.slaString}</span></h4>
        
    </div>
    );
}

// export const withDiscountLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <label>{aggregatedDiscountInfoV3}</label>
//                 <RestaurantCard {...props} />
//             </div>
//         )
//     }
// }

export default RestaurantCard;