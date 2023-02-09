import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {getCategoryFilter} from "./selectors";


// axios.defaults.baseURL = "http://localhost:3030/api/";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3030/api/notices/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
