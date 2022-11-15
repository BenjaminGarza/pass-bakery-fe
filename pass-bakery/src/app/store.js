import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/counter/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
