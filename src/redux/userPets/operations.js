import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPets = createAsyncThunk(
  'user/fetchPets',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('user');
      return res.data.result.pets;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postPet = createAsyncThunk(
  'user/postPet',
  async (data, thunkAPI) => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/user',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
