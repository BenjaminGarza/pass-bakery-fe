import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(current(state));
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item, indice) => indice !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
