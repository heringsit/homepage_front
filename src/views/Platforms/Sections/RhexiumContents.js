import React, { useState } from "react";
import Slider from "react-slick";

import { ReactComponent as Icon1 } from "../../../assets/images/03rhexium/PLATFORMS_icon01.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/03rhexium/PLATFORMS_icon02.svg";
import { ReactComponent as Icon3 } from "../../../assets/images/03rhexium/PLATFORMS_icon03.svg";
import DiseaseRiskPrediction from "./selectedContents/diseaseRiskPrediction";
import PrognosisPrediction from "./selectedContents/prognosisPrediction";
import ComplianceManagement from "./selectedContents/complianceManagement";

import "../Platforms.css";

export default function RhexiumContents(props) {
  const SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [seletedIcon, setIcon] = useState(0);

  const iconClick = (e, val) => {
    setIcon(val);
  };
  if (props.matches) {
    return (
      <div className="SectionDiv">
        <div className="platformContent">
          <Slider {...SliderSettings}>
            <div className="platformMobile">
              <div className="rhexiumIconCircle">
                <div className="rhexiumIconContain rhexiumIconMobile">
                  <Icon1
                    width="70"
                    height="80"
                    style={{ fill: "url('#icon1Gradient')" }}
                  />
                </div>
                <div className="rhexiumIconText FontB textF14">
                  DISEASE RISK PREDICTION
                </div>
              </div>
              <div className="rhexiumContents">
                <div className="FontEB textF24">
                  <div>DISEASE RISK PREDICTION</div>
                </div>
                <div className="">
                  <DiseaseRiskPrediction />
                </div>
              </div>
            </div>
            <div className="platformMobile">
              <div className="rhexiumIconCircle">
                <div className="rhexiumIconContain rhexiumIconMobile">
                  <Icon2
                    width="75"
                    height="85"
                    style={{ fill: "url('#icon2Gradient')" }}
                  />
                </div>
                <div className="rhexiumIconText FontB textF14">
                  PROGNOSIS PREDICTION
                </div>
              </div>
              <div className="rhexiumContents">
                <div className=" FontEB textF24">
                  <div>PROGNOSIS PREDICTION</div>
                </div>
                <div className="">
                  <PrognosisPrediction />
                </div>
              </div>
            </div>
            <div className="platformMobile">
              <div className="rhexiumIconCircle">
                <div className="rhexiumIconContain3 rhexiumIconMobile">
                  <Icon3
                    width="95"
                    height="90"
                    style={{ fill: "url('#icon3Gradient2')" }}
                  />
                </div>
                <div className="rhexiumIconText FontB textF14">
                  COMPLIANCE MANAGEMENT
                </div>
              </div>
              <div className="rhexiumContents">
                <div className=" FontEB textF24">
                  <div>COMPLIANCE MANAGEMENT</div>
                </div>
                <div className="">
                  <ComplianceManagement />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  } else {
    return (
      <div className="SectionDivNT">
        <div className="platformContentRow">
          <div className="iconsDiv">
            <div
              className={`rhexiumIconCircle ${
                seletedIcon === 0 ? "circleSelected" : ""
              }`}
              onClick={(e) => {
                iconClick(e, 0);
              }}
            >
              <span
                className={`iconDots ${seletedIcon === 0 ? "tcgreen2" : "tcb"}`}
              >
                •
              </span>
              <div className="rhexiumIconContain">
                <Icon1
                  width="70"
                  height="80"
                  style={{
                    fill:
                      seletedIcon === 0 ? "url('#icon1Gradient')" : "#c0c0c0",
                  }}
                />
              </div>
              <div
                className={`rhexiumIconText FontB textF18 ${
                  seletedIcon === 0 ? "tcgreen2" : ""
                }`}
              >
                DISEASE RISK PREDICTION
              </div>
            </div>
            <div
              className={`rhexiumIconCircle ${
                seletedIcon === 1 ? "circleSelected" : ""
              }`}
              onClick={(e) => {
                iconClick(e, 1);
              }}
            >
              <span
                className={`iconDots ${seletedIcon === 1 ? "tcgreen2" : "tcb"}`}
              >
                •
              </span>
              <div className="rhexiumIconContain">
                <Icon2
                  width="75"
                  height="85"
                  style={{
                    fill:
                      seletedIcon === 1 ? "url('#icon2Gradient')" : "#c0c0c0",
                  }}
                />
              </div>
              <div
                className={`rhexiumIconText FontB textF18 ${
                  seletedIcon === 1 ? "tcgreen2" : ""
                }`}
              >
                PROGNOSIS PREDICTION
              </div>
            </div>
            <div
              className={`rhexiumIconCircle ${
                seletedIcon === 2 ? "circleSelected" : ""
              }`}
              onClick={(e) => {
                iconClick(e, 2);
              }}
            >
              <span
                className={`iconDots ${seletedIcon === 2 ? "tcgreen2" : "tcb"}`}
              >
                •
              </span>
              <div className="rhexiumIconContain3">
                <Icon3
                  width="95"
                  height="90"
                  // className="rhexiumIconForSvg"
                  style={{
                    fill:
                      seletedIcon === 2 ? "url('#icon3Gradient2')" : "#c0c0c0",
                  }}
                />
              </div>
              <div
                className={`rhexiumIconText FontB textF18 ${
                  seletedIcon === 2 ? "tcgreen2" : ""
                }`}
              >
                COMPLIANCE MANAGEMENT
              </div>
            </div>
          </div>
          <div className="rhexiumContents">
            {(() => {
              switch (seletedIcon) {
                case 0:
                  return (
                    <div className="rhexiumContentsDetailL">
                      <div className="FontB textF48F">
                        <div>DISEASE RISK</div>
                        <div>PREDICTION</div>
                      </div>
                      <div className="rhexiumIconContain bottomIconOpacity">
                        <Icon1
                          width="70"
                          height="80"
                          style={{ fill: "#c0c0c0" }}
                        />
                      </div>
                    </div>
                  );
                case 1:
                  return (
                    <div className="rhexiumContentsDetailL">
                      <div className="FontB textF48F">
                        <div>PROGNOSIS</div>
                        <div>PREDICTION</div>
                      </div>
                      <div className="rhexiumIconContain bottomIconOpacity">
                        <Icon2
                          width="75"
                          height="85"
                          style={{ fill: "#c0c0c0" }}
                        />
                      </div>
                    </div>
                  );
                case 2:
                  return (
                    <div className="rhexiumContentsDetailL">
                      <div className="FontB textF48F">
                        <div>COMPLIANCE</div>
                        <div>MANAGEMENT</div>
                      </div>
                      <div className="rhexiumIconContain3 bottomIconOpacity">
                        <Icon3
                          width="95"
                          height="90"
                          style={{ fill: "#c0c0c0" }}
                        />
                      </div>
                    </div>
                  );
                default:
                  return (
                    <div className="rhexiumContentsDetailL">
                      <div className="FontB textF48F">
                        <div>DISEASE RISK</div>
                        <div>PREDICTION</div>
                      </div>
                      <div className="rhexiumIconContain bottomIconOpacity">
                        <Icon1 style={{ fill: "#c0c0c0" }} />
                      </div>
                    </div>
                  );
              }
            })()}

            <div className="rhexiumContentsDetailR">
              {(() => {
                switch (seletedIcon) {
                  case 0:
                    return <DiseaseRiskPrediction />;
                  case 1:
                    return <PrognosisPrediction />;
                  case 2:
                    return <ComplianceManagement />;
                  default:
                    return <DiseaseRiskPrediction />;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
