import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";
import { setUser } from "./UserSlice";

export const login = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post(`${ACCOUNT_API}/api/token/`, credentials);

      localStorage.setItem("user", credentials.username);

      return credentials.username;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post(`${ACCOUNT_API}/register/`, credentials);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const logout = createAsyncThunk("logout", async (_, { dispatch }) => {
  localStorage.removeItem("user");
  dispatch(setUser(null));
});
export const checkAuth = createAsyncThunk(
  "checkAuth",
  async (_, { dispatch }) => {
    const user = localStorage.getItem("user");
    dispatch(setUser(user));
  }
);
