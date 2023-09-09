import { createAsyncThunk } from "@reduxjs/toolkit";
import { LIMIT, PRODUCTS_API } from "../../helpers/consts";
import axios from "axios";
import { setPageTotalCount } from "./ProductSlice";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data, headers } = await axios.get(
        `${PRODUCTS_API}${window.location.search}`
      );
      const total = Math.ceil(headers["x-total-count"] / LIMIT);

      dispatch(setPageTotalCount(total));

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "getOneProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${PRODUCTS_API}/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createProduct = createAsyncThunk(
  "createProducts",
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
  "deleteProducts",
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
  "editProducts",
  async (editedProduct, { rejectWithValue, dispatch }) => {
    try {
      await axios.patch(`${PRODUCTS_API}/${editedProduct.id}`, editedProduct);
      dispatch(getProducts());
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
