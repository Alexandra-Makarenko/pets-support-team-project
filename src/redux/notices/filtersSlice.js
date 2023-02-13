import { createSlice } from '@reduxjs/toolkit';

const categoryFilter =
  localStorage.getItem('category') !== '/notices/sell'
    ? JSON.parse(localStorage.getItem('category'))
    : 'sell';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    category: categoryFilter,
    searchValue: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.category = action.payload;
      localStorage.setItem('category', JSON.stringify(state.category));
    },
    setSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setStatusFilter, setSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
