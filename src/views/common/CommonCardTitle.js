import React, { useContext } from "react";
import { ThemeContext } from "../../context";
export default function CommonCardTitle({ title, fontSize }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="card_titleDiv">
      <span className={`${fontSize} FontB ${theme === "light" ? "tcb" : "tcw"}`}>
        {title}
      </span>
      <span className="card_middlebar" />
    </div>
  );
}
