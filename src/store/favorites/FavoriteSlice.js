import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      console.log(action.payload);
      state.favorites = action.payload;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { setFavorites } = favoritesSlice.actions;
