import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userinfo: null
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userinfo = action.payload;
    },
    clearUserDetails: (state) => {
      state.userinfo = null
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
