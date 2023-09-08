import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS_API } from "../../helpers/consts";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(PRODUCTS_API);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createProduct = createAsyncThunk(
  "getProducts",
  async (product, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(PRODUCTS_API, product);
      dispatch(getProducts());
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "getProducts",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${PRODUCTS_API}/${id}`);
      dispatch(getProducts());
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const editProduct = createAsyncThunk(
  "getProducts",
  async (editedProduct, { rejectWithValue, dispatch }) => {
    try {
      await axios.patch(`${PRODUCTS_API}/${editedProduct.id}`, editedProduct);
      dispatch(getProducts());
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
