import { createSlice } from "@reduxjs/toolkit";
import { inputName } from "../type";

export type inputState = {
  fileName: string;
  result: string;
};

export type inputSetAction = {
  payload: inputSetPayload;
  type: string;
};

export type inputSetPayload = {
  name: inputName;
  value: string;
};

export const initialState: inputState = {
  fileName: "",
  result: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState: initialState,
  reducers: {
    set: (state: inputState, action: inputSetAction) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { set } = inputSlice.actions;
export default inputSlice.reducer;
