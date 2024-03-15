import { createSlice } from "@reduxjs/toolkit";

export const deliverySlice = createSlice({
    name: 'delivery',
    initialState: {
        login: false,
        // isApproved: 'Pending',
        deliverInfo: {}
    },
    reducers: {
        setdeliverDetails: (state, action) => {
            state.login = action.payload.login
            // state.isApproved = action.payload.RestaurantInfo.isApproved
            state.deliverInfo = action.payload
        }
    }

})

export const {setdeliverDetails} = deliverySlice.actions;
export default deliverySlice.reducer;