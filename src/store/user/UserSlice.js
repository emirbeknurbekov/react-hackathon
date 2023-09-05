import { createSlice } from "@reduxjs/toolkit";
import { ACCOUNT_API } from "../../helpers/consts";
import { create } from "@mui/material/styles/createTransitions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    status: "",
  },
});

export default userSlice.reducer;
