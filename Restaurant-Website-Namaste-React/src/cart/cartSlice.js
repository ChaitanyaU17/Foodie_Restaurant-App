import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating (modifying) the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        //originalState = {items: ['pizza']};
        clearCart: (state, action) => {
            //console.log(state)  "gives you proxy obj which dont show the items"
            //console.log(current(state)) "which shows you the cart items"
    //state = [] "local variable change to this [] but originalState remains the same ['pizza']"
            state.items.length = 0; // state = [] "actually modifies the originalState = []"
            //or
//RTK = (reduxtoolkit) either mutate the existing state or return the new state (return { items: [] })
            //return { items: [] } //this new [] will be replace inside originalState = []
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;