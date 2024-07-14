import { CDN_URL } from "../utils/constants"
import {addItem} from "../cart/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an item
        dispatch(addItem(item));
     }
    //console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between"
                >
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-medium">{item.card.info.name}</span> 
                        <br />
                        <span className="font-normal">₹ {item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice /100}</span> 
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-2 relative">
                        <img className="rounded-xl w-[156px] h-[144px] object-cover" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                        <div className="absolute bottom-1.5 left-0 right-0 flex justify-center">
                            <button 
                            className="font-bold border bg-white border-gray-200 text-green-600 rounded-lg shadow-sm py-0.5 px-4"
                            onClick={() => handleAddItem(item)}>
                                ADD
                            </button>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;