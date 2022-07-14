/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'weather',
  },
  reducers: {
    toggleTheme(state, action) {
      state.value = state.value === 'weather' ? 'seven-days-Weather' : 'weather';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
