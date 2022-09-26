import { configureStore } from "@reduxjs/toolkit";
import navToggleReducer from "../feature/navToggleSlice";
import shoppingCardReducer from "../feature/shoppingCardSlice";
import sliderReducer from "../feature/sliderSlice";
export const store = configureStore({
  reducer: {
    menu: navToggleReducer,
    slider: sliderReducer,
    shoppingCard: shoppingCardReducer,
  },
});
