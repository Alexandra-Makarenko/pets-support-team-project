const { createSlice } = require('@reduxjs/toolkit');
const { fetchPets, postPet, deletePet } = require('./operations');

const initialState = {
  items: [],
  newPet: {},
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pet',
  initialState: initialState,
  extraReducers: {
    [fetchPets.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPets.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postPet.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [postPet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.newPet = action.payload;
      state.items.unshift(action.payload.data);
    },
    [postPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deletePet.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [deletePet.fulfilled](state, action) {
      state.items = state.items.filter(pet => pet._id !== action.meta.arg);
      state.isLoading = false;
      state.error = null;
    },
    [deletePet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const petsReducer = petsSlice.reducer;
