import React, { useContext } from "react";
import { ThemeContext } from "../../../context";
import "../Aboutus.css";
import backgroundImg from "../../../assets/images/02about_who_we_are/about_banner_background.svg";
export default function Whoweare(props) {
  const theme = useContext(ThemeContext);
  // addPadding <-> top badding of the img in about us
  return (
    <div className="" id="" >
      <div style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
      }} className="SectionDiv" >
        <div className="titleDiv">
          <div className="textT22 FontB tcw">
            <span>WHO WE ARE</span>
          </div>
          <hr style={{border: "1px solid " + (theme === "dark" ? "black" : "white")}}></hr>
        </div>
        <div className="whoweareContent">
          <div className="whoweareContentTitle">
            <span className="textF32 FontB tcw">
              HERINGS is personalized Digital Health Care Service Company
            </span>
          </div>
          <div className="whoweareContentsWrap">
            <span className="textF20 tcw">
              We aim to be the best companion to cancer patients through their
              long journey to overcome the disease.
            </span>
          </div>
          <div className="whoweareContentsWrap">
            <div className="addPaddingBig" />
            <span className="whoweareLinePadding textF22 FontB tcw">We</span>
            <div className="whoweareLinePadding">
              <span className="textF22 FontB tcw">IDENTIFY </span>
              <span className="textF22 tcw">
                the exact pain points in current medical care system
              </span>
            </div>
            <div className="whoweareLinePadding">
              <span className="textF22 FontB tcw">PRIORITIZE </span>
              <span className="textF22 tcw">
                them according to their significance and clinical implication,
              </span>
            </div>
            <div className="whoweareLinePadding">
              <span className="textF22 FontB tcw">DEVELOP </span>
              <span className="textF22 tcw">
                evidence based, science embedded solution algorithms
              </span>
            </div>
            <div className="whoweareLinePadding">
              <span className="textF22 FontB tcw">IMPLEMENT </span>
              <span className="textF22 tcw">
                them through our digital service platform.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
