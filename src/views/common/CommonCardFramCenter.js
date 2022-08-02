import React, { useContext } from "react";
import { ThemeContext } from "../../context";
export default function CommonCardFrameCenter({
  image1src,
  image1alt,
  content,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex"
      style={{
        flexDirection: "column",
      }}
    >
      <img src={image1src} alt={image1alt} className="w-full" />
      <div
        className={`break-keepall textF26 ${theme === "light" ? "tcb" : "tcw"}`}
        style={{
          paddingTop: "68px",
          textAlign: "center",
        }}
      >
        {content}
      </div>
    </div>
  );
}
