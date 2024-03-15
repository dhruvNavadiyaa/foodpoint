// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import deliverySlice from './features/deliverySlice';

export const store = configureStore({
  reducer: {
    deliver: deliverySlice,
  },
}); 
