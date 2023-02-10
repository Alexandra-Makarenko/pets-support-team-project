import { createSlice } from "@reduxjs/toolkit";
import { fetchNotices } from "./operations";

// const tasksInitialState = petsdata;

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
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
  },
});

// export const { addTask, deleteTask, toggleCompleted } = petsSlice.actions;
export const noticesReducer = noticesSlice.reducer;
