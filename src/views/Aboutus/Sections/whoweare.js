import React from "react";
import "../Aboutus.css";
export default function Whoweare(props) {
  return (
    <div className="addPadding" id="whoweare">
      <div className="SectionDiv ">
        <div className="titleDiv">
          <div className="textT22 FontB tcb">
            <span>WHO WE ARE</span>
          </div>
          <hr></hr>
        </div>
        <div className="whoweareContent">
          <div className="whoweareContentTitle">
            <span className="textF40 tcb">A personalized</span>
            <span
              className="textF40 FontB tcb"
              style={{ marginRight: "7.5px" }}
            >
              Digital Care
            </span>
            <span className="textF40 FontB tcb">Service</span>
            <span className="textF40 tcb">Company</span>
          </div>
          <div className="whoweareContentsWrap" style={{ textAlign: "center" }}>
            <span className="textF18 tcb">
              We aim to be the best companion to cancer patients through their
              long journey
            </span>
            <span className="textF18 tcb">to overcome the disease.  </span>
          </div>
        </div>
      </div>
    </div>
  );
}
