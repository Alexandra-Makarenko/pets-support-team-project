import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

// const tasksInitialState = petsdata;

const petsSlice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addTask, deleteTask, toggleCompleted } = petsSlice.actions;
export const petsReducer = petsSlice.reducer;
