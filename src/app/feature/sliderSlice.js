import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    next: (state, action) => {
      if (state.count <= action.payload - 2) {
        state.count++;
      } else {
        state.count = 0;
      }
    },
    prev: (state, action) => {
      if (state.count > 0) {
        state.count--;
      } else {
        state.count = action.payload - 1;
      }
    },
  },
});

export const { next, prev } = sliderSlice.actions;
export default sliderSlice.reducer;
