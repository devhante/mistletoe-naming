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
    | "fx"
    | "bgm"
    | "efx"
    | "prefab"
    | "material"
    | "scene"
    | "scriptable"
    | "font"
    | "prefab-efx"
    | "shader"
    | "fbx";
  uikind: "panel" | "button" | "icon";
  soundkind: "once" | "loop";
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
    | "fx"
    | "bgm"
    | "efx"
    | "prefab"
    | "material"
    | "scene"
    | "scriptable"
    | "font"
    | "prefab-efx"
    | "shader"
    | "fbx";
};

export type selectSetUIKindAction = {
  payload: selectSetUIKindPayload;
  type: string;
};

export type selectSetUIKindPayload = {
  name: selectName;
  value: "panel" | "button" | "icon";
};

export type selectSetSoundKindAction = {
  payload: selectSetSoundKindPayload;
  type: string;
};

export type selectSetSoundKindPayload = {
  name: selectName;
  value: "once" | "loop";
};

export const initialState: selectState = {
  kind: "texture",
  uikind: "panel",
  soundkind: "once",
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
    setSoundKind: (state: selectState, action: selectSetSoundKindAction) => {
      state["soundkind"] = action.payload.value;
    },
  },
});

export const { setKind, setUIKind, setSoundKind } = selectSlice.actions;
export default selectSlice.reducer;
