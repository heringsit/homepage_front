import React, {useContext} from "react";
import { ThemeContext } from "../../context";
import "../../index.css"
const CommonCardFrame = (
  {
    imageSrc, 
    imageAlt,     
    contentStyle = "align-items-center" , // ex: content align style
    contentPadding = "ps-48", // ex: content padding
    flexStyle = "flex-row-reverse gap-64", // ex: "flex-row-reverse gap-64"
    mainTextStyle = "text-align-start textT18 FontR lineheight160",
    subText1Style,
    subText2Style,
    content1,
    content2,
    content3,
    subText1,
    subText2
  }
) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${contentStyle} ${flexStyle} ${contentPadding}`}>
      <img
        className="image-fit"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={`flex-col m-reset ${
        theme === "light" ? "tcb" : "tcw"
      }`}>
        <div>
          {/* m-reset -> margin reset; mb-8-> margin bottom */}
          <p className={`tco2 ${subText1Style} m-reset`}>{subText1}</p>
          <p className={`${subText2Style} m-reset`}>{subText2}</p>
          <p className={`${mainTextStyle} m-reset`}>
            {content1}
          </p>
        </div>
        <div>
          <p className={`${mainTextStyle} m-reset`}>
            {content2}
          </p>
        </div>
        <div>
          <p className={`${mainTextStyle} m-reset`}>
            {content3}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommonCardFrame;