import { createSlice } from "@reduxjs/toolkit";
import { login } from "./UserActions";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
