import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      products: [],
      totalPrice: 0,
    },
  },
  reducers: {
    setCart: (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { setCart, setTotalPrice } = cartSlice.actions;
