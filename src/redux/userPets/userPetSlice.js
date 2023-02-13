const { createSlice } = require('@reduxjs/toolkit');
const { fetchPets, postPet } = require('./operations');

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
      console.log(action.payload);
      state.newPet = action.payload;
      state.items.push(action.payload.data);
    },
    [postPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const petsReducer = petsSlice.reducer;
