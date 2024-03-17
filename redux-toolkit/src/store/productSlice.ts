import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
export interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
}
interface ProductState {
  data: Product[];
  status: string;
}
const initialState: ProductState = {
  data: [],
  status: STATUSES.IDLE,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk is the middleware that are used to do some delayed work.
// Thunk is the function that return some function.
// getState are used to request with something that are in the store
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
