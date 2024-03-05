// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './features/AdminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
}); 
