import { createSlice } from "@reduxjs/toolkit";
import { getOneProduct, getProducts } from "./ProductAction";

const searchParams = new URLSearchParams(window.location.search);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    oneProduct: null,
    error: null,
    page: +searchParams.get("_page") || 1,
    pageTotalCount: 1,
  },
  reducers: {
    clearOneProductState: (state) => {
      state.oneProduct = null;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageTotalCount: (state, action) => {
      state.pageTotalCount = action.payload;
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
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
    });
  },
});
export const { clearOneProductState, setPage, setPageTotalCount } =
  productsSlice.actions;
export default productsSlice.reducer;
