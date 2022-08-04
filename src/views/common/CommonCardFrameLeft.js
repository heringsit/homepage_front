import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../Research/Research.css"
export default function CommonCardFrameLeft({
  subTitle,
  Title,
  content1,
  content1style,
  content2,
  image1src,
  image2src,
  image1alt,
  image2alt,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="ptb-24 flex-col gap-68">
      <img src={image1src} alt={image1alt} />
      <p className={`${theme === "light" ? "tcb" : "tcw"} ${content1style}`} >
        {content1}
      </p>
    </div>
  );
}
