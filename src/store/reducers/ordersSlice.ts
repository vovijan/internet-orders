import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrder} from "../../mocks/models/Orders.model";

const initialState: IOrder[] = []

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrdersSuccess: (state, {payload}: PayloadAction<IOrder[]>) => payload,
  }
})

export const {setOrdersSuccess} = ordersSlice.actions;
export default ordersSlice.reducer;