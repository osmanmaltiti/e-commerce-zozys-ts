import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../feature/cart/CartSlice";
import HomeSlice from "../feature/home/HomeSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    cart: CartSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
