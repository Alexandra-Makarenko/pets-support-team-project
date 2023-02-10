import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchNotices = createAsyncThunk(
  "notices/fetchAll",
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

