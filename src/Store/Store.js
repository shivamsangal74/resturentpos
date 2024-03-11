import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

let rootReducer = combineReducers({
    cart : cartSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;