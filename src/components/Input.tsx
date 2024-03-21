import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Input.css";
import { inputState, set } from "../slices/inputSlice";
import { selectState } from "../slices/selectSlice";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Input() {
  const selectState: selectState = useSelector((state: any) => state.select);
  const inputState: inputState = useSelector((state: any) => state.input);
  const dispatch = useDispatch();

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(set({ name: "fileName", value: event.target.value }));
  }

  function handleClickButton() {
    let result = "",
      front = "",
      back = "";

    if (selectState.kind === "texture") {
      front = "img_txr";
    } else if (selectState.kind === "normalmap") {
      front = "img_txr";
      back = "normal";
    } else if (selectState.kind === "tilemap") {
      front = "img_tile";
    } else if (selectState.kind === "prop") {
      front = "img_prop";
    } else if (selectState.kind === "ui") {
      front = "img_ui";
      if (selectState.uikind === "panel") {
        back = "pnl";
      } else if (selectState.uikind === "button") {
        back = "btn";
      } else if (selectState.uikind === "icon") {
        back = "icn";
      }
    } else if (selectState.kind === "background") {
      front = "img_bg";
    } else if (selectState.kind === "animclip") {
      front = "ani_clip";
    } else if (selectState.kind === "fx") {
      front = "ani_fx";
    } else if (selectState.kind === "bgm") {
      front = "snd_bgm";
      if (selectState.soundkind === "once") {
        back = "once";
      } else if (selectState.soundkind === "loop") {
        back = "loop";
      }
    } else if (selectState.kind === "efx") {
      front = "snd_efx";
      if (selectState.soundkind === "once") {
        back = "once";
      } else if (selectState.soundkind === "loop") {
        back = "loop";
      }
    } else if (selectState.kind === "prefab") {
      front = "prfb";
    } else if (selectState.kind === "material") {
      front = "mtr";
    } else if (selectState.kind === "scene") {
      front = "sn";
    } else if (selectState.kind === "scriptable") {
      front = "data";
    } else if (selectState.kind === "font") {
      front = "ft";
    } else if (selectState.kind === "prefab-efx") {
      front = "prfb_efx";
    } else if (selectState.kind === "shader") {
      front = "shdr";
    } else if (selectState.kind === "fbx") {
      front = "fbx";
    }

    if (front !== "") {
      if (back !== "") {
        result = `${front}-${inputState.fileName}-${back}`;
      } else {
        result = `${front}-${inputState.fileName}`;
      }
    } else {
      result = `${inputState.fileName}`;
    }

    dispatch(set({ name: "result", value: result }));
  }

  return (
    <div className="Input">
      <div className="input-wrap">
        <div className="input-top">
          <div className="label">입력</div>
          <input
            className="filename"
            onChange={handleChangeInput}
            value={inputState.fileName}
          />
          <div className="button" onClick={handleClickButton}>
            생성
          </div>
        </div>
        <div className="input-bottom">
          <div className="label">결과</div>
          <input className="result" value={inputState.result} />
          <CopyToClipboard text={inputState.result}>
            <div className="paste">복사</div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
