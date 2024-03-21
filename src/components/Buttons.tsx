import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setKind,
  setUIKind,
  setSoundKind,
} from "../slices/selectSlice";
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

  function handleClickBgm() {
    dispatch(setKind({ name: "kind", value: "bgm" }));
  }

  function handleClickEfx() {
    dispatch(setKind({ name: "kind", value: "efx" }));
  }

  function handleClickOncePanel() {
    dispatch(setSoundKind({ name: "soundkind", value: "once" }));
  }

  function handleClickLoopPanel() {
    dispatch(setSoundKind({ name: "soundkind", value: "loop" }));
  }

  function handleClickPrefab() {
    dispatch(setKind({ name: "kind", value: "prefab" }));
  }

  function handleClickMaterial() {
    dispatch(setKind({ name: "kind", value: "material" }));
  }

  function handleClickScene() {
    dispatch(setKind({ name: "kind", value: "scene" }));
  }

  function handleClickScriptable() {
    dispatch(setKind({ name: "kind", value: "scriptable" }));
  }

  function handleClickFont() {
    dispatch(setKind({ name: "kind", value: "font" }));
  }

  function handleClickPrefabEfx() {
    dispatch(setKind({ name: "kind", value: "prefab-efx" }));
  }

  function handleClickShader() {
    dispatch(setKind({ name: "kind", value: "shader" }));
  }

  function handleClickFbx() {
    dispatch(setKind({ name: "kind", value: "fbx" }));
  }

  return (
    <div className="Buttons">
      <div className="buttons-wrap">
        <div className="small-title">그래픽</div>
        <div className="buttons-kind-graphic">
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
          className={`buttons-kind-ui ${
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
        <div className="space" />
        <div className="small-title">사운드</div>
        <div className="buttons-kind-sound">
          <div
            className={`button button-bgm ${
              selectState.kind === "bgm" ? "selected" : ""
            }`}
            onClick={handleClickBgm}
          >
            배경음악
          </div>
          <div
            className={`button button-efx ${
              selectState.kind === "efx" ? "selected" : ""
            }`}
            onClick={handleClickEfx}
          >
            효과음
          </div>
        </div>
        <div
          className={`buttons-kind-sound ${
            selectState.kind === "bgm" || selectState.kind === "efx"
              ? ""
              : "none"
          }`}
        >
          <div
            className={`button button-once ${
              selectState.soundkind === "once" ? "selected" : ""
            }`}
            onClick={handleClickOncePanel}
          >
            once
          </div>
          <div
            className={`button button-loop ${
              selectState.soundkind === "loop" ? "selected" : ""
            }`}
            onClick={handleClickLoopPanel}
          >
            loop
          </div>
        </div>
        <div className="space" />
        <div className="small-title">엔진</div>
        <div className="buttons-kind-engine">
          <div
            className={`button button-prefab ${
              selectState.kind === "prefab" ? "selected" : ""
            }`}
            onClick={handleClickPrefab}
          >
            프리팹
          </div>
          <div
            className={`button button-material ${
              selectState.kind === "material" ? "selected" : ""
            }`}
            onClick={handleClickMaterial}
          >
            머티리얼
          </div>
          <div
            className={`button button-scene ${
              selectState.kind === "scene" ? "selected" : ""
            }`}
            onClick={handleClickScene}
          >
            씬
          </div>
          <div
            className={`button button-scriptable ${
              selectState.kind === "scriptable" ? "selected" : ""
            }`}
            onClick={handleClickScriptable}
          >
            Scriptable
          </div>
          <div
            className={`button button-font ${
              selectState.kind === "font" ? "selected" : ""
            }`}
            onClick={handleClickFont}
          >
            폰트
          </div>
          <div
            className={`button button-prefab-efx ${
              selectState.kind === "prefab-efx" ? "selected" : ""
            }`}
            onClick={handleClickPrefabEfx}
          >
            이펙트
          </div>
          <div
            className={`button button-shader ${
              selectState.kind === "shader" ? "selected" : ""
            }`}
            onClick={handleClickShader}
          >
            쉐이더
          </div>
          <div
            className={`button button-fbx ${
              selectState.kind === "fbx" ? "selected" : ""
            }`}
            onClick={handleClickFbx}
          >
            모델
          </div>
        </div>
      </div>
    </div>
  );
}
