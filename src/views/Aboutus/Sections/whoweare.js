import React from "react";
import "../Aboutus.css";
export default function Whoweare(props) {
  return (
    <div className="SectionDiv" id="whoweare">
      <div className="titleDiv">
        <div className="textT22 FontB tcb">
          <span>WHO WE ARE</span>
        </div>
        <hr></hr>
      </div>
      <div className="whoweareContent">
        <div className="whoweareContentTitle">
          <span className="textF40 tcb">Companion</span>
          <span className="textF40 FontB tcb" style={{ marginRight: "7.5px" }}>
            Digital
          </span>
          <span className="textF40 FontB tcb">Therapeutics</span>
          <span className="textF40 tcb">Company</span>
        </div>
        <div className="whoweareContentsWrap">
          <div className="whoweareContents">
            <span className="textF18 tcgreen1">Forefront pioneer</span>
            <span className="textF18 tcb">
              of companion digital therapeutics for enhancing quality of life of
              those with serious chronic disease.
            </span>
          </div>
          <div className="whoweareContents">
            <span className="textF18 tcgreen1">Focuses</span>
            <span className="textF18 tcb">
              on Oncology for prevention, prognosis prediction, and
              compliance(care, daily life) management.
            </span>
          </div>
          <div className="whoweareContents">
            <span className="textF18 tcgreen1">Incorporates extensive</span>
            <span className="textF18 tcb">
              therapeutic knowledge, clinical research expertise, and
              comprehensive innovative technology to develop novel digital
              therapeutics.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
