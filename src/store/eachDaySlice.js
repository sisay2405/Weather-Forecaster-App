/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const eachDaySlice = createSlice({
  name: 'search',
  initialState: {
    loading: true,
    homepage: true,
  },
  reducers: {
    setSearch(state, { payload }) {
      return { ...payload };
    },
  },
});

export const { setSearch } = eachDaySlice.actions;

export default eachDaySlice.reducer;
