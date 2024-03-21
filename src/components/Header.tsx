import React from "react";
import "./Header.css";
import umbrellaIcon from "../umbrella-128.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-wrap">
        <img className="umbrella-icon" src={umbrellaIcon} />
        <div className="title">겨우살이 에셋 네이밍 컨벤션 헬퍼</div>
      </div>
    </div>
  );
}
