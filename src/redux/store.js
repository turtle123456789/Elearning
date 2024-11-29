import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slides/languageSlice';
import cartSlice from './slides/cartSlice'
export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartSlice,
  },
});
