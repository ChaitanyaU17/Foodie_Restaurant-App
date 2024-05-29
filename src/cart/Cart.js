import { useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import {clearCart} from "./cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-3xl font-bold">Cart</h1>
            <div className=" w-6/12 m-auto">
                <button 
                onClick={handleClearCart}
                className="m-2 px-2 py-0.5  bg-green-500 text-white"
                >CLEAR</button>
                {cartItems.length === 0 && (<h1 className="font-medium">cart is empty! add items to the cart</h1>)}
                <div className="shadow-xl bg-gray-100 rounded-2xl">
                <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    );
};

export default Cart;