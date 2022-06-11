import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../feature/home/HomeSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
