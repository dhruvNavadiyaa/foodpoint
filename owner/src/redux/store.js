// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import RestaurantReducer from './features/RestaurantSlice';

export const store = configureStore({
  reducer: {
    restaurant: RestaurantReducer,
  },
}); 
