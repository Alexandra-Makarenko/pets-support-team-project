import { fetchOwnerNoticeData } from './ownerNoticesOperations';

const { createSlice } = require('@reduxjs/toolkit');
const { fetchOwnerData } = require('./ownerInfoOperations');

const initialState = {
  owner: {
    email: null,
    name: null,
    place: null,
    phone: null,
    dateofbirth: null,
  },
  notices: [],
  ownerLoading: false,
  noticesLoading: false,
  error: null,
};

const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  extraReducers: {
    [fetchOwnerData.pending](state) {
      state.ownerLoading = true;
      state.error = null;
    },
    [fetchOwnerData.fulfilled](state, action) {
      state.ownerLoading = false;
      state.error = null;
      state.owner = action.payload;
    },
    [fetchOwnerData.rejected](state, action) {
      state.ownerLoading = false;
      state.error = action.error;
    },
    [fetchOwnerNoticeData.pending](state) {
      state.noticesLoading = true;
      state.error = null;
    },
    [fetchOwnerNoticeData.fulfilled](state, action) {
      state.noticesLoading = false;
      state.error = null;
      state.notices = action.payload;
    },
    [fetchOwnerNoticeData.rejected](state, action) {
      state.noticesLoading = false;
      state.error = action.error;
    },
  },
});

export const ownerReducer = ownerSlice.reducer;
