import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductAction";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    oneProduct: null,
    error: null,
  },
  reducers: {
    clearOneProductState: (state) => {
      state.oneProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { clearOneProductState } = productsSlice.actions;
export default productsSlice.reducer;
