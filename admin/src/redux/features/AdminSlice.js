import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    login: false,
    adminInfo: {}
  },
  reducers: {
    setAdminDetails: (state, action) => {
      state.login = action.payload.login
      state.adminInfo = action.payload;
    },
    clearAdminDetails: (state) => {
      state.adminInfo = null
    },
  },
});

export const { setAdminDetails, clearAdminDetails } = adminSlice.actions;
export default adminSlice.reducer;
