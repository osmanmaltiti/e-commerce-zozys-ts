import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
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

      const currentItem = current(state.cart).find(
        (item) => item.id === payload.id
      );

      !currentItem && (state.cart = [...state.cart, payload]);
    },
    increment: (
      state: { cart: Array<IItem> },
      action: PayloadAction<string>
    ) => {
      const { payload } = action;

      const currentItem = current(state.cart).find(
        (item: IItem) => item.id === payload
      );

      if (currentItem) {
        if (currentItem.quantity < currentItem.stock) {
          const increaseQuantity = {
            ...currentItem,
            quantity: currentItem.quantity + 1,
            amount: (currentItem.quantity + 1) * currentItem.price,
          };

          const updateCurrentCart = current(state.cart).filter(
            (item: IItem) => item.id !== payload
          );

          state.cart = [...updateCurrentCart, increaseQuantity];
        }
      }
    },
    decrement: (
      state: { cart: Array<IItem> },
      action: PayloadAction<string>
    ) => {
      const { payload } = action;

      const currentItem = current(state.cart).find(
        (item: IItem) => item.id === payload
      );

      if (currentItem) {
        if (currentItem.quantity > 0) {
          const increaseQuantity = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
            amount: (currentItem.quantity - 1) * currentItem.price,
          };

          const updateCurrentCart = current(state.cart).filter(
            (item: IItem) => item.id !== payload
          );

          state.cart = [...updateCurrentCart, increaseQuantity];
        }
      }
    },
    removeItem: (
      state: { cart: Array<IItem> },
      action: PayloadAction<string>
    ) => {
      const { payload } = action;
      const updateCart = current(state.cart).filter(
        (item) => item.id !== payload
      );
      state.cart = [...updateCart];
    },
    clearCart: (state: { cart: Array<IItem> }) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeItem, increment, decrement, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
