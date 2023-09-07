import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    status: "",
  },
});

export default userSlice.reducer;
