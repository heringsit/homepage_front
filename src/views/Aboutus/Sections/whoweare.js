import React from "react";
import "../Aboutus.css";
import backgroundImg from "../../../assets/images/02about_who_we_are/about_banner_background.svg";
import { useMediaQuery } from "@material-ui/core";

export default function Whoweare() {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 320px)");

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
      className="SectionDiv whoweare"
    >
      <div className="titleDiv">
        <span className="FontB textF20">WHO WE ARE</span>
        <hr />
      </div>
      <div className="whoweareContent">
        <div className="whoweareContentTitle">
          {mobile ? (
            <>
              <span className="FontR textF32 tcw">HERINGS is personalized</span>
              <span className="FontR textF32 tcw">Digital Health Care Service Company</span>
            </>
          ) : (
            <span className="FontB textF32 tcw">
              HERINGS is personalized Digital Health Care Service Company
            </span>
          )}
        </div>
        <div className="mt-8 whoweareContentsWrap">
          {mobile ? (
            <>
              <span className="FontL textF20 tcw">
                We aim to be the best companion to cancer patients
              </span>
              <span className="FontL textF20 tcw">through their long journey to overcome the disease.</span>
            </>
          ) : (
            <span className="FontL textF20 tcw">
              We aim to be the best companion to cancer patients through their
              long journey to overcome the disease.
            </span>
          )}
        </div>
        <div className="whoweareContentsWrap">
          <div
            className={`${mobile ? "pt-30" : tablet ? "pt-100" : "pt-150"}`}
          />
          <span className="we FontB tcw textF20">We</span>
          {splits.border.map((split, idx) => (
            <div className="mt-8" key={idx}>
              <span className="FontB tcw">{split}</span>
              <span className="FontL tcw">{splits.text[idx]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
