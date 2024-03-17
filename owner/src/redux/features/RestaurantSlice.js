import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        login: false,
        isApproved: 'Pending',
        RestaurantInfo: {}
    },
    reducers: {
        setRestroDetails: (state, action) => {
            state.login = action.payload.login
            state.isApproved = action.payload.RestaurantInfo.isApproved
            state.RestaurantInfo = action.payload.RestaurantInfo
        }
    }

})

export const {setRestroDetails} = RestaurantSlice.actions;
export default RestaurantSlice.reducer;