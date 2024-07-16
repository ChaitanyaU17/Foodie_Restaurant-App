import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import logo from '../utils/logo_2.png';
import foodie from '../utils/Foodie.png';
import Cart from '../utils/cart.png';

const Header = () => {

 const [ btnNameReact, setBtnNameReact ] = useState( "Login" );

 const onlineStatus = useOnlineStatus();

 const { loggedInUser } = useContext(userContext);
//console.log(loggedInUser);

//selector is hook inside react
//subscribing to our store using selector

const cartItems = useSelector((store) => store.cart.items);
//console.log(cartItems);

return (
    <div className="flex sticky top-0 z-50 bg-white shadow-lg shadow-orange-200 h-16 justify-between  px-8">
        <div className="flex items-center">
            <img className="h-14" src={logo} alt="Logo" />
            <img className="h-20 mb-4" src={foodie} alt="Foodie" />
        </div>
        <div className="flex items-center">
            <ul className="hidden md:flex p-0 m-0"> {/* Hidden on small screens */}
                <li className="px-4 font-medium">
                    {onlineStatus ? (
                        <span className="text-green-600">● online</span>
                    ) : (
                        <span className="text-red-600">● offline</span>
                    )}
                </li>
                <li className="px-4 font-medium hover:text-orange-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 font-medium hover:text-orange-600">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 font-medium hover:text-orange-600">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4 font-medium hover:text-orange-600">
                    <Link to="/grocery">Grocery Store</Link>
                </li>
                <li className="font-bold cursor-pointer relative px-4">
                    <Link to="/cart" className="relative">
                        <img className="h-6 mr-2 mt-0.5" src={Cart} alt="Cart" />
                        <span className="absolute top-0.5 right-1.5 inline-block w-3.5 h-3.5 
                            text-xs font-bold text-white bg-black rounded-full text-center">
                            {cartItems.length}
                        </span>
                    </Link>
                </li>
                <li className="px-4">
                    <button
                        className="login px-2 font-medium py-1 rounded-sm text-white bg-orange-600"
                        onClick={() => {
                            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </li>
                <li className="px-4 font-medium">{loggedInUser}</li>
            </ul>
        </div>
    </div>
);
};

export default Header; 
