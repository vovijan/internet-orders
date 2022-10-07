import { useAppDispatch } from "./store/store";
import {useEffect} from "react";
import {fetchOrders} from "./store/actions/ordersAction";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  return <h1>Hello!</h1>
}