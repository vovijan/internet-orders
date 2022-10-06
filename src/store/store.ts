import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ordersSlice from "./reducers/ordersSlice";

const rootReducer = combineReducers({
  orders: ordersSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];