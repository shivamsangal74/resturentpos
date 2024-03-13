import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,  
    },

    reducers: {
        additem: (state,action) => {
            const newItem = action.payload;
            const itemIndex = state.items.findIndex(item=> item.id == newItem.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity++
            }
            else{
                newItem.quantity = 1;
                state.items.push(newItem);
            } 
        },
        removeItems: (state,action) => {
            const {itemId} = action.payload;
            state.items = state.items.filter(item => item.id != itemId);
        },
        
    }
})

export const {additem,removeItems} = cartSlice.actions
export default cartSlice.reducer;