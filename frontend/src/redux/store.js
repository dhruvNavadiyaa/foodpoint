// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
}); 
