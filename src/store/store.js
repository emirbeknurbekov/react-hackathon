import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/UserSlice";
import productReducer from "./products/ProductSlice";
import { cartReducer } from "./cart/CartSlice";
import { favoritesReducer } from "./favorites/FavoriteSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userSlice,
    products: productReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
