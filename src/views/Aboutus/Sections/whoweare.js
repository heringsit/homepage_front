import React, { useContext } from "react";
import "../Aboutus.css";
// import backgroundImg from "../../../assets/images/02about_who_we_are/about_banner_background.svg";
//about us 배경 변경
import backgroundImg from "../../../assets/images/02about_who_we_are/aboutus_background.svg"
import { MediaQueryContext } from "../../../context";
// import CommonCardTitle from "../../common/CommonCardTitle";

export default function Whoweare() {
  const { mobile, mTablet } = useContext(MediaQueryContext);

  const splits = {
    border: ["IDENTIFY", "PRIORITIZE", "DEVELOP", "IMPLEMENT"],
    text: [
      "  the exact pain points in current medical care system",
      "  them according to their significance and clinical implication,",
      "  evidence based, science embedded solution algorithms",
      "  them through our digital service platform.",
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "75% 50%",
        
      }}
      className={`whoweare aboutuscontents bg-gray ${
        mobile ? "mt-50" : mTablet ? "mt-84" : ""
      }`}
    >
      {/* <CommonCardTitle title="WHO WE ARE" fontSize="textF28" /> */}
      <div className="aboutustitle">
        <p className="textF20 FontCB tcw">WHO WE ARE</p>
        <div className="aboutusline"></div>
      </div>

      <div className="whoweareContent">
        <span className="whoweareContentTitle FontCB textF32 tcw">
          HERINGS is personalized Digital Health Care Service Company
        </span>
        <span className="flex-col align-items-center FontL textF20 tcw">
          We aim to be the best companion to cancer patients through their long
          journey to overcome the disease.
        </span>
        <div className={`${mobile ? "lineheight140" : "lineheight200"} whoweareContentsWrap`}>
          <div
            className={`${mTablet ? "mt-48" : "mt-124"}`}
          />
          <span className="we FontB tcw textF20">We</span>
          {splits.border.map((split, idx) => (
            <div className="mt-5" key={idx}>
              <span className="FontB textF20 tcw">{split}</span>
              <span className="FontL textF20 tcw split">
                {splits.text[idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
