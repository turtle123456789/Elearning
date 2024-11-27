import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slides/languageSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
