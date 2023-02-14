import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPets = createAsyncThunk(
  'user/fetchPets',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('user');
      console.log(res.data.result.pets);
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

export const deletePet = createAsyncThunk(
  'user/deletePet',
  async (id, thunkAPI) => {
    try {
      const data = { pet_id: id };
      console.log(data);
      const res = await axios.delete('user', { data: data });
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
