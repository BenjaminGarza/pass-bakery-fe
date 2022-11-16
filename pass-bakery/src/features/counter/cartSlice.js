import {
  createSlice,
  createReducer,
  createAction,
  current,
} from "@reduxjs/toolkit";

const initialState = {
  items: [["test", "5.99"]],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //loop through current cart and add every item to new cart
      //at the end, push action.payload to the array
      //state.items.map()?
      //state.cart.items = ["action.payload"];
      // console.log(state.items[0][0], action.payload);

      console.log(current(state));
    },
    remove: (state, action) => {
      //declare index for removal
      //use array.splice(indexForRemoval,1)

      state.cart.splice(action.payload, 1);
    },
    //incrementByAmount: (state, action) => {
    //  state.value += action.payload;
    //},
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
