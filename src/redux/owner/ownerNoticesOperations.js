import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOwnerNoticeData = createAsyncThunk(
  'owner/fetchNoticeData',
  async ({ id, searchValue, currentPage }, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/ownernotices/${id}`, {
        params: { keyword: searchValue, page: currentPage },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
