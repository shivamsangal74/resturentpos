import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,  
    },

    reducers: {
        additem: (state,action) => {
            const item = action.payload;
            const itemIndex = state.items.findIndex(item=> item.id == itemID);
            if(itemIndex) {
                state.items[isAlreadyAdded].quantity = state.items[isAlreadyAdded].quantity++
            } 
            state.items = state.items.push(action.payload)
        },
        removeItems: (state,action) => {
            const {itemId} = action.payload;
            state.items = state.items.filter(item => item.id != itemId);
        },
        
    }
})

export const {additem,removeItems} = cartSlice.actions
export default cartSlice.reducer;