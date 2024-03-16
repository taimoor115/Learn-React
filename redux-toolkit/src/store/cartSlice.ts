// Slice are not support in core redux but we can use in redux toolkit..
// Slicing are used to organize the data of application in smaller parts
// Reducers are the pure function. Pure fumctions are the one that cannot change the state/data
// outside the function. With the help of reducers we can mutate out state.

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "../Components/Products";

interface CartState {
  items: Products[];
}

const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Products>) {
      state.items.push(action.payload);
      return
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
