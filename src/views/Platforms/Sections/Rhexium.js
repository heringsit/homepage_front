import React from "react";

import rhexiumImage from "../../../assets/images/03craimon/PLATFORMS_RHEXIUM.svg";
import "../Platforms.css";

export default function Rhexium(props) {
  return (
    <div className="SectionDivNP SectionDivUpBlank" id="rhexium">
      <div className="platformContentBackLine"></div>
      <div className="SectionDivNT">
        <div className="titleDiv">
          <div className="textT22 FontEB">
            <span>RHEXIUM</span>
          </div>
          <hr></hr>
        </div>
        <div className="platformContent">
          <div className="platformImage">
            <img src={rhexiumImage} alt="rhexium" className="platformImg" />
          </div>
          <div className="platformDescript tcw">
            <div className="platformExplain">
              <span className="textF48 FontB">RHEXIUM</span>
            </div>
            <div className="platformExplain">
              <span className="textF16 FontB">
                Core Platform for Digital Therapeutics
              </span>
              <span className="textF16 FontL">
                to provide tailored interventions for each patient in various
                situation
              </span>
            </div>
            <div className="platformExplain">
              <span className="textF16 FontB">
                Integrating Care-team and Patients
              </span>
              <span className="textF16 FontL">
                Real-time intervention in daily life put patients closer to
                their care team while undergoing treatments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
