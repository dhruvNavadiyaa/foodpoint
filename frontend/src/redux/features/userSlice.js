import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    userInfo: {}
  },
  reducers: {
    setUserDetails: (state, action) => {
      // console.log('Updating user details with:', action.payload);
      state.userInfo = action.payload;
      state.login = action.payload.login;
    },
    clearUserDetails: (state) => {
      state.userInfo = null
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
