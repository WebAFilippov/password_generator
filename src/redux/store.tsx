import { configureStore } from "@reduxjs/toolkit";

import SliderReducer from "./slices/SliderValues";
import CheckboxReducer from "./slices/CheckBoxSlice";

export const store = configureStore({
  reducer: {
    slider: SliderReducer,
    checkbox: CheckboxReducer,
  },
  devTools: true,
});
