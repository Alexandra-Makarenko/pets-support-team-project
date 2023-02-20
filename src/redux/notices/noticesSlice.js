import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchFavoriteNotices,
  fetchOneNotice,
  fetchAddFavoriteNotice,
  fetchRemoveFavoriteNotice,
  removeMyAddNotice,
  addNotice,
} from './operations';

// const tasksInitialState = petsdata;

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    oneNotice: {},
    favoriteNotices: [],
    category: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    clearNotices(state) {
      state.items = [];
    },
    setCategoryGlobal(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [fetchNotices.pending](state) {
      state.isLoading = true;
    },
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      if (action.payload.page === 1) {
        state.items = action.payload;
      } else {
        if (action?.payload?.notices) {
          for (let i = 0; i < action.payload.notices.length; i++) {
            state.items.notices.push(action.payload.notices[i]);
          }
        }
      }
    },
    [fetchNotices.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchFavoriteNotices.pending](state) {
      state.isLoading = true;
    },
    [fetchFavoriteNotices.fulfilled](state, action) {
      // console.log(action.payload.notices);
      state.isLoading = false;
      state.error = null;
      state.favoriteNotices = action.payload.notices;
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
      const index = state.items.notices.findIndex(
        pet => pet._id === action.meta.arg
      );
      state.items.notices.splice(index, 1);
    },
    [removeMyAddNotice.rejected](state, action) {
      // state.isLoading = false;
      state.error = action.payload;
    },
    [addNotice.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [addNotice.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      const stateCategory = JSON.parse(JSON.stringify(state.category));
      if (
        action?.payload?.category === stateCategory ||
        stateCategory === 'mynotices'
      ) {
        console.log('payload', action.payload);
        state.items.notices.unshift(action.payload);
      }
    },
    [addNotice.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// export const { addTask, deleteTask, toggleCompleted } = petsSlice.actions;
export const { clearNotices, setCategoryGlobal } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
