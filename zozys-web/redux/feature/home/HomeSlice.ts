import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { init, IViewItem } from "./type";

const HomepageSlice = createSlice({
  name: "home",
  initialState: init,
  reducers: {
    setViewItem: (
      state: { viewItem: IViewItem },
      action: PayloadAction<IViewItem>
    ) => {
      const { payload } = action;
      state.viewItem = payload;
    },
  },
});

export const { setViewItem } = HomepageSlice.actions;
export default HomepageSlice.reducer;
