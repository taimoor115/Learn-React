import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
