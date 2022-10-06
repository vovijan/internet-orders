import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Order = {
  id: string,
  firstName: string,
}

const initialState: Order[] = []

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrdersSuccess: (state, {payload}: PayloadAction<Order[]>) => payload,
  }
})

export const {getOrdersSuccess} = ordersSlice.actions;
export default ordersSlice.reducer;