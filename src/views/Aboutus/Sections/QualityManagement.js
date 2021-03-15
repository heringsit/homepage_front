import React from "react";
import qmlmage from "../../../assets/images/02_about_quality_management/qm.png";
import "../Aboutus.css";

export default function QualityManagement(props) {
  return (
    <div className="SectionDiv" id="qualitymanagement">
      <div className="titleDiv">
        <div className="textT22 FontEB ">
          <span>QUALITY MANAGEMENT</span>
        </div>
        <hr></hr>
        <img src={qmlmage} alt="QualityManagement" className="platformImg" />
      </div>
    </div>
  );
}
