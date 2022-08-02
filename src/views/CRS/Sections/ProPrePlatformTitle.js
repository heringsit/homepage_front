import React, { useContext } from "react";
import { ThemeContext } from "../../../context";

export default function ProPrePlatformTitle() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="card_titleDiv ">
      <span
        className={`textF53 FontB card_titleDiv_padding_b ${
          theme === "light" ? "tcb" : "tcw"
        }`}
      >
        PRO &middot; PRE Platform
      </span>
      <div className={`textF28 FontL ${theme === "light" ? "tcb" : "tcw"}`}>
        <span className="card_titleDiv_bold">P</span>
        <span>atient-</span>
        <span className="card_titleDiv_bold">R</span>
        <span>eported</span>
        <span className="card_titleDiv_bold">O</span>
        <span>utcome / </span>
        <span className="card_titleDiv_bold">P</span>
        <span>atient-</span>
        <span className="card_titleDiv_bold">R</span>
        <span>eported </span>
        <span className="card_titleDiv_bold">E</span>
        <span>xperience</span>
      </div>
      <span className="block card_middlebar" />
    </div>
  );
}
