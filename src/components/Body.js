import RestaurantCard , { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import Footer from "./Footer";

const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants ] = useState( [] );

    const [ searchText, setSearchText ] = useState("");

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // console.log(ListOfRestaurants);

    useEffect( () => {
      fetchData();
    }, [])

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

    const json = await data.json();

    console.log(json);

    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
      return (
              <h1>Lookes like you are offline!! please check your internate connection</h1>
             ) 
            }

            const { loggedInUser, setUserName} = useContext(userContext);

             return listOfRestaurants.length === 0 ? (
      <div className="flex flex-wrap mt-11">
        {[...Array(4)].map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    ) : (
      <div className="body">
        <div className="filter flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 m-4">
          <button
            className="top-rated-btn px-2 py-1 bg-yellow-300 rounded-lg md:w-auto"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="search flex flex-col md:flex-row items-center">
            <input
              type="text"
              data-testid="searchInput"
              className="border border-solid rounded-sm px-2 py-1 border-orange-300 gradient-border focus:outline-orange-400"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for restaurants"
            />
            <button
              className="search-btn px-2 py-1 bg-orange-300 rounded-lg mt-2 md:mt-0 md:ml-2"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
        </div>
  
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
}

export default Body;