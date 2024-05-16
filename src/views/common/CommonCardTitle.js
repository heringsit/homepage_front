import React, { useContext } from "react";
import { ThemeContext } from "../../context";
export default function CommonCardTitle({
  title,
  fontStyle = "FontB",
  fontSize = "card_default_font",
  tc = 1,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="card_titleDiv">
      <span
        className={`${fontStyle} ${fontSize} ${
          tc === 1 ? (theme === "light" ? "tcb" : "tcw") : "tcb"
        }`}
      >
        {title}
      </span>
      {/* <span className="card_middlebar" /> */}
    </div>
  );
}
