import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    oneProduct: null,
  },
  reducers: {
    clearOneProductState: (state) => {
      state.oneProduct = null;
    },
  },
});
export const { clearOneProductState } = productsSlice.actions;
export default productsSlice.reducer;
