import { createSlice } from "@reduxjs/toolkit";
export const navToggleSlice = createSlice({
  name: "navtoggle",
  initialState: { toggle: false },
  reducers: {
    open: (state) => {
      state.toggle = true;
    },
    close: (state) => {
      state.toggle = false;
    },
  },
});

export const { open, close } = navToggleSlice.actions;
export default navToggleSlice.reducer;
