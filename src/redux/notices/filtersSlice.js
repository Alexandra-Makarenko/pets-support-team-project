import { createSlice } from '@reduxjs/toolkit';
// import { categoryFilters } from "./constants";

// const filtersInitialState = {
//   category: categoryFilters.sell,
// };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    category: '',
    searchValue: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.category = action.payload;
    },
    setSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setStatusFilter, setSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
