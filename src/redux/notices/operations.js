import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOneNotice = createAsyncThunk(
  'notices/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/pet/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
