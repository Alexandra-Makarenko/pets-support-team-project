import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ category, searchValue }, thunkAPI ) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      console.log(searchValue );
      if (!searchValue) {
        return response.data;
      } else {
        return response.data.filter(
          article => article.title.toLowerCase().indexOf(searchValue) >= 0
        );
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
