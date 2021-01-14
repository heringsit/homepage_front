import React from "react";
import craimonImage from "../../../assets/images/03craimon/PLATFORMS_CRAIMON.svg";

import "../Platforms.css";

export default function Craimon(props) {
  return (
    <div className="SectionDivNP SectionDivUpBlank" id="craimon">
      <div className="platformContentBackLine"></div>
      <div className="SectionDivNT">
        <div className="titleDiv">
          <div className="textT22 FontEB">
            <span>CRAIMON</span>
          </div>
          <hr></hr>
        </div>
        <div className="platformContentR">
          <div className="platformDescript tcw">
            <div className="platformExplain">
              <span className="textF48 FontB">CRAIMON</span>
            </div>
            <div className="platformExplain">
              <span className="textF16 FontB">
                AI Algorithm Development Platform
              </span>
              <span className="textF16 FontL">
                to facilitate our digital therapeutics pipelines
              </span>
            </div>
            <div className="platformExplain">
              <span className="textF16 FontB">
                Evidence-Based Therapeutic Intervention
              </span>
              <span className="textF16 FontL">
                through clinical validation, provides reliable and accurate
                algorithm
              </span>
            </div>
          </div>
          <div className="platformImage">
            <img src={craimonImage} alt="craimon" className="platformImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
