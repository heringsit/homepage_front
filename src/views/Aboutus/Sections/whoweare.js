import React, { useContext } from "react";
import "../Aboutus.css";
import backgroundImg from "../../../assets/images/02about_who_we_are/about_banner_background.svg";
import { MediaQueryContext } from "../../../context";
import CommonCardTitle from "../../common/CommonCardTitle";

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
        backgroundPosition: "center",
      }}
      className={`whoweare aboutuscontents bg-gray ${
        mobile ? "mt-50" : mTablet ? "mt-84" : ""
      }`}
    >
      <CommonCardTitle title={"WHO WE ARE"} />
      <div className="whoweareContent">
        <div className="whoweareContentTitle mb-16">
          <span className="FontB textF32 tcw">
            HERINGS is personalized Digital Health Care Service Company
          </span>
        </div>
        <div className="mt-8 whoweareContentsWrap">
          <span className="FontL textF20 tcw">
            We aim to be the best companion to cancer patients through their
            long journey to overcome the disease.
          </span>
        </div>
        <div className="whoweareContentsWrap">
          <div
            className={`${mobile ? "pt-30" : mTablet ? "pt-100" : "pt-150"}`}
          />
          <span className="we FontB tcw textF20">We</span>
          {splits.border.map((split, idx) => (
            <div className="mt-5" key={idx}>
              <span className="FontB textF20 tcw">{split}</span>
              <span className="FontL textF20 tcw split">{splits.text[idx]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
