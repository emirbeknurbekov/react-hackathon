import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/UserSlice";
import productReducer from "./products/ProductSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userSlice,
    product: productReducer,
  },
});
