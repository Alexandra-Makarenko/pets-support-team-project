import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchFavoriteNotices,
  fetchOneNotice,
  fetchAddFavoriteNotice,
  fetchRemoveFavoriteNotice,
  removeMyAddNotice,
} from './operations';

// const tasksInitialState = petsdata;

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    oneNotice: {},
    favoriteNotices: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchNotices.pending](state) {
      state.isLoading = true;
    },
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchFavoriteNotices.pending](state) {
      state.isLoading = true;
    },
    [fetchFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favoriteNotices = action.payload;
      // console.log(action.payload);
    },
    [fetchFavoriteNotices.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchOneNotice.pending](state) {
      // state.isLoading = true;
    },
    [fetchOneNotice.fulfilled](state, action) {
      // state.isLoading = false;
      state.error = null;
      state.oneNotice = action.payload;
    },
    [fetchOneNotice.rejected](state, action) {
      // state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddFavoriteNotice.pending](state) {
      // state.isLoading = true;
    },
    [fetchAddFavoriteNotice.fulfilled](state, action) {
      // state.isLoading = false;
      state.error = null;
      state.favoriteNotices.unshift(action.payload);
      // state.favoriteNotices = action.payload;
    },
    [fetchAddFavoriteNotice.rejected](state, action) {
      // state.isLoading = false;
      state.error = action.payload;
    },
    [fetchRemoveFavoriteNotice.pending](state) {
      // state.isLoading = true;
    },
    [fetchRemoveFavoriteNotice.fulfilled](state, action) {
      state.error = null;
      const index = state.favoriteNotices.findIndex(
        pet => pet._id === action.payload.id
      );
      state.favoriteNotices.splice(index, 1);
    },
    [fetchRemoveFavoriteNotice.rejected](state, action) {
      // state.isLoading = false;
      state.error = action.payload;
    },
    [removeMyAddNotice.pending](state, action) {
      // state.isLoading = true;
    },
    [removeMyAddNotice.fulfilled](state, action) {
      // console.log(action.meta.arg);
      // console.log(state.items);
      state.error = null;
      const index = state.items.findIndex(pet => pet._id === action.meta.arg);
      state.items.splice(index, 1);
    },
    [removeMyAddNotice.rejected](state, action) {
      // state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addTask, deleteTask, toggleCompleted } = petsSlice.actions;
export const noticesReducer = noticesSlice.reducer;
