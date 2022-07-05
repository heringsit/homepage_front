import React from "react";
export default function CommonCardFrameCenter({
  image1src,
  image1alt,
  content
}) {
  return (
    <div
      className="flex"
      style={{
        flexDirection: "column"
      }}
    >
      <img src={image1src} alt={image1alt} className="w-full" />
      <div
        className="break-keepall textF26"
        style={{
          paddingTop: "68px",
          textAlign: "center"
        }}
      >
        {content}
      </div>
    </div>
  );
}
