import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../../index.css";
const CommonCardFrame = (
  // main(textStyle, ContentStyle) -> Main content 수정
  // content(padding, style, 1,2,3) -> Content text and Content style 수정
  {
    imageSrc,
    imageAlt,
    imageFit,
    contentStyle = "align-items-center", // ex: content align style
    contentPadding = "ps-48", // ex: content padding
    flexStyle = "flex-row-reverse gap-64", // ex: "flex-row-reverse gap-64"
    mainTextStyle = "text-align-start textF18 FontL lineheight160",
    headerStyle = "tco2",
    subText1Style,
    subText2Style,
    mainContentStyle = "flex-col",
    content1,
    content2,
    content3,
    subText1,
    subText2,
    menu,
    btntext,
    landingURL,
  }
) => {
  const { theme } = useContext(ThemeContext);

  const moveLanding = (URL) => {
    window.open(URL);
  };
  return (
    <div className={`${contentStyle} ${flexStyle} ${contentPadding}`}>
      <img
        className={imageFit ? imageFit : "image-fit"}
        src={imageSrc}
        alt={imageAlt}
      />
      <div
        className={`${mainTextStyle} ${mainContentStyle} m-reset ${
          theme === "light" ? "tcb" : "tcw"
        }`}
      >
        <div>
          {/* m-reset -> margin reset; mb-8-> margin bottom */}
          <div className="movecontainer">
            <div>
              <p className={`${headerStyle} ${subText1Style} m-reset`}>
                {subText1}
              </p>

              <p className={`${subText2Style} m-reset`}>{subText2}</p>
            </div>
            {menu === "SERVICE" ? (
              <div
                className="movebtn movetext"
                onClick={() => moveLanding(landingURL)}
              >
                {btntext}
              </div>
            ) : null}
          </div>

          <p className={`${mainTextStyle} m-reset`}>{content1}</p>
        </div>
        <div>
          <p className={`${mainTextStyle} m-reset`}>{content2}</p>
        </div>
        <div>
          <p className={`${mainTextStyle} m-reset`}>{content3}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonCardFrame;
