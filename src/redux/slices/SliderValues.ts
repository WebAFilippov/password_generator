import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  value: number[];
}

const initialState: IInitialState = {
  value: [0],
};

export const SliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    changeValue: (state, actions: PayloadAction<number[]>) => {
      state.value = actions.payload;
    },
  },
});

export const { changeValue } = SliderSlice.actions;

export default SliderSlice.reducer;
