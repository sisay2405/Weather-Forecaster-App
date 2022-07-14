import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import searchReducer from './eachDaySlice';
import homeReducer from './homepageSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    home: homeReducer,
  },
});
