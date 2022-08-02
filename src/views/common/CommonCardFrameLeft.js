import React, { useContext } from "react";
import { ThemeContext } from "../../context";
export default function CommonCardFrameLeft({
  subTitle,
  Title,
  content1,
  content2,
  image1src,
  image2src,
  image1alt,
  image2alt,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="cardLeft card_between">
      <div className="card_flexcolumn">
        {/* <span className="tco2 FontEB textF22 block" style={{ width: "70%" }}>
          {subTitle}
        </span> */}
        <span
          style={{ paddingTop: "8px", width: "70%" }}
          className={`FontB textF32 block ${theme === "light" ? "tcb" : "tcw"}`}
        >
          {Title}
        </span>
        <div
          className={`textF26 break-keepall card_MinWidth ${
            theme === "light" ? "tcb" : "tcw"
          }`}
        >
          <span className="card_content_block ">{content1}</span>
          <span className="card_content_block ">{content2}</span>
        </div>
      </div>
      <div className="img_trans">
        <img src={image1src} alt={image1alt} className="image_shadow" />
        <img src={image2src} alt={image2alt} className="image_shadow" />
      </div>
    </div>
  );
}
