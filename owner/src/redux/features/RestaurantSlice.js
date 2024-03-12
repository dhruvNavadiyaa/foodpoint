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
            state.isApproved = action.payload.resturantInfo.isApproved
            state.RestaurantInfo = action.payload
        }
    }

})

export const {setRestroDetails} = RestaurantSlice.actions;
export default RestaurantSlice.reducer;