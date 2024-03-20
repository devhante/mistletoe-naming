import { createSlice } from "@reduxjs/toolkit";
import { selectName } from "../type";

export type selectState = {
  kind:
    | "texture"
    | "normalmap"
    | "tilemap"
    | "prop"
    | "ui"
    | "background"
    | "animclip"
    | "fx";
  uikind: "panel" | "button" | "icon";
};

export type selectSetKindAction = {
  payload: selectSetKindPayload;
  type: string;
};

export type selectSetKindPayload = {
  name: selectName;
  value:
    | "texture"
    | "normalmap"
    | "tilemap"
    | "prop"
    | "ui"
    | "background"
    | "animclip"
    | "fx";
};

export type selectSetUIKindAction = {
  payload: selectSetUIKindPayload;
  type: string;
};

export type selectSetUIKindPayload = {
  name: selectName;
  value: "panel" | "button" | "icon";
};

export const initialState: selectState = {
  kind: "texture",
  uikind: "panel",
};

export const selectSlice = createSlice({
  name: "select",
  initialState: initialState,
  reducers: {
    setKind: (state: selectState, action: selectSetKindAction) => {
      state["kind"] = action.payload.value;
    },
    setUIKind: (state: selectState, action: selectSetUIKindAction) => {
      state["uikind"] = action.payload.value;
    },
  },
});

export const { setKind, setUIKind } = selectSlice.actions;
export default selectSlice.reducer;
