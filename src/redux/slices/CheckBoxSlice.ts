import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialProps {
  cb1: boolean;
  cb2: boolean;
  cb3: boolean;
  cb4: boolean;
}

const initialState: IInitialProps = {
  cb1: false,
  cb2: true,
  cb3: false,
  cb4: false,
};

export const CheckboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleCheckbox: (state, actions: PayloadAction<keyof IInitialProps>): void => {
      state[actions.payload] = !state[actions.payload]
    },
  },
});

export const { toggleCheckbox } = CheckboxSlice.actions;

export default CheckboxSlice.reducer;
