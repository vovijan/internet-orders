import {AppDispatch} from "../store";
import {setOrdersSuccess} from "../reducers/ordersSlice";

export const fetchOrders = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('/orders');

    if (response.ok) {
      dispatch(setOrdersSuccess(await response.json()))
    }
  } catch (error) {
    console.error(error)
  }
}