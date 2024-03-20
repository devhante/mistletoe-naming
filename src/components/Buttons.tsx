import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectState, setKind, setUIKind } from "../slices/selectSlice";
import "./Buttons.css";

export default function Buttons() {
  const selectState: selectState = useSelector((state: any) => state.select);
  const dispatch = useDispatch();

  function handleClickTexture() {
    dispatch(setKind({ name: "kind", value: "texture" }));
  }

  function handleClickNormalMap() {
    dispatch(setKind({ name: "kind", value: "normalmap" }));
  }

  function handleClickTileMap() {
    dispatch(setKind({ name: "kind", value: "tilemap" }));
  }

  function handleClickProp() {
    dispatch(setKind({ name: "kind", value: "prop" }));
  }

  function handleClickUI() {
    dispatch(setKind({ name: "kind", value: "ui" }));
  }

  function handleClickBackground() {
    dispatch(setKind({ name: "kind", value: "background" }));
  }

  function handleClickAnimClip() {
    dispatch(setKind({ name: "kind", value: "animclip" }));
  }

  function handleClickFX() {
    dispatch(setKind({ name: "kind", value: "fx" }));
  }

  function handleClickUIPanel() {
    dispatch(setUIKind({ name: "uikind", value: "panel" }));
  }

  function handleClickUIButton() {
    dispatch(setUIKind({ name: "uikind", value: "button" }));
  }

  function handleClickUIIcon() {
    dispatch(setUIKind({ name: "uikind", value: "icon" }));
  }

  return (
    <div className="Buttons">
      <div className="buttons-wrap">
        <div className="buttons-kind">
          <div
            className={`button button-texture ${
              selectState.kind === "texture" ? "selected" : ""
            }`}
            onClick={handleClickTexture}
          >
            텍스쳐
          </div>
          <div
            className={`button button-normalmap ${
              selectState.kind === "normalmap" ? "selected" : ""
            }`}
            onClick={handleClickNormalMap}
          >
            노말맵
          </div>
          <div
            className={`button button-tilemap ${
              selectState.kind === "tilemap" ? "selected" : ""
            }`}
            onClick={handleClickTileMap}
          >
            타일맵
          </div>
          <div
            className={`button button-prop ${
              selectState.kind === "prop" ? "selected" : ""
            }`}
            onClick={handleClickProp}
          >
            프랍
          </div>
          <div
            className={`button button-ui ${
              selectState.kind === "ui" ? "selected" : ""
            }`}
            onClick={handleClickUI}
          >
            UI
          </div>
          <div
            className={`button button-background ${
              selectState.kind === "background" ? "selected" : ""
            }`}
            onClick={handleClickBackground}
          >
            원화(배경)
          </div>
          <div
            className={`button button-animclip ${
              selectState.kind === "animclip" ? "selected" : ""
            }`}
            onClick={handleClickAnimClip}
          >
            애니메이션 클립
          </div>
          <div
            className={`button button-fx ${
              selectState.kind === "fx" ? "selected" : ""
            }`}
            onClick={handleClickFX}
          >
            FX
          </div>
        </div>
        <div
          className={`buttons-uikind ${
            selectState.kind !== "ui" ? "none" : ""
          }`}
        >
          <div
            className={`button button-panel ${
              selectState.uikind === "panel" ? "selected" : ""
            }`}
            onClick={handleClickUIPanel}
          >
            패널
          </div>
          <div
            className={`button button-button ${
              selectState.uikind === "button" ? "selected" : ""
            }`}
            onClick={handleClickUIButton}
          >
            버튼
          </div>
          <div
            className={`button button-icon ${
              selectState.uikind === "icon" ? "selected" : ""
            }`}
            onClick={handleClickUIIcon}
          >
            아이콘
          </div>
        </div>
      </div>
    </div>
  );
}
