/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const homepageSlice = createSlice({
  name: 'home',
  initialState: {
    locations: null,
    details: '',
  },
  reducers: {
    setLocations(state, { payload }) {
      state.locations = payload;
    },
    setDetails(state, { payload }) {
      state.details = payload;
    },
  },
});

export const { setDetails, setLocations } = homepageSlice.actions;

export default homepageSlice.reducer;
