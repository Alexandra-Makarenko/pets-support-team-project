import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',

  async ({ category, searchValue, currentPage, options = {} }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/notices/${category}?page=${currentPage}`,
        options
      );
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

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavorite',

  async ({ searchValue }, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favorite`);
      console.log(searchValue);
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

export const fetchAddFavoriteNotice = createAsyncThunk(
  'notices/fetchAddToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favorite/add/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRemoveFavoriteNotice = createAsyncThunk(
  'notices/fetchRemoveFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favorite/remove/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeMyAddNotice = createAsyncThunk(
  'notices/removeMyAddNotice',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/pet/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (noticeInfo, thunkAPI) => {
    console.log(noticeInfo);
    try {
      const response = await axios.post('/notices', noticeInfo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response:');
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
