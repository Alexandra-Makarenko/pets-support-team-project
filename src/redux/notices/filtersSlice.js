import { createSlice } from '@reduxjs/toolkit';
// import { categoryFilters } from "./constants";

// const filtersInitialState = {
//   category: categoryFilters.sell,
// };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    category: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
