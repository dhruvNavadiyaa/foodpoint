import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    adminInfo: null
  },
  reducers: {
    setAdminDetails: (state, action) => {
      state.adminInfo = action.payload;
    },
    clearAdminDetails: (state) => {
      state.adminInfo = null
    },
  },
});

export const { setAdminDetails, clearAdminDetails } = adminSlice.actions;
export default adminSlice.reducer;
