import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOwnerData = createAsyncThunk(
  'owner/fetchOwnerData',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/user/owner/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
