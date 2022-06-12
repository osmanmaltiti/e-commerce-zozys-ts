import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, init } from "./types";

const CartSlice = createSlice({
  name: "cart",
  initialState: init,
  reducers: {
    addToCart: (
      state: { cart: Array<IItem> },
      action: PayloadAction<IItem>
    ) => {
      const { payload } = action;
      state.cart = [...state.cart, payload];
    },
    removeItem: () => {},
  },
});

export const { addToCart, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
