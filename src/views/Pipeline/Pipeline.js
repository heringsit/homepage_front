import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";

// import craimonbg from "../../assets/images/04pipeline/Craimon_candidate";
// import rhexiumbg from "../../assets/images/04pipeline/Rhexium_candidate";

import snuh from "../../assets/images/04pipeline/snuh.png";
import sam from "../../assets/images/04pipeline/sam.png";
import sev from "../../assets/images/04pipeline/sev.png";
// import snuh from "../../assets/images/04pipeline/snuh.png";
import bg from "../../assets/images/04pipeline/background.png";

import "./Pipeline.css";

export default function Pipeline() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div id="content" style={{ position: "relative" }}>
      <Menubar slideIndex={0} />
      <Totop />
      {/* <div id="pipeline">
        <ContentsTitle matches={matches} title={"PIPELINE"} />
        <div className="SectionDivNT SectionDivUpBlank" id="craimon">
          <div className="titleDiv">
            <div className="textT22 FontEB">
              <span>CRAIMON PIPELINE</span>
            </div>
            <hr></hr>
          </div>
          <div className="pipelineContent">
            <div className="div-table-wrap">
              <div className="div-table-head-row">
                <div className="div-table-col-head textF16 FontB">
                  <div>CANDIDATE</div>
                </div>
                <div className="div-table-col textF16 FontB">
                  <div>THERAPEUTIC</div>
                  <div>AREA</div>
                </div>
                <div className="div-table-col textF16 FontB">SEGMENT</div>
                <div className="div-table-col textF16 FontB">
                  <div>DATA</div>
                  <div>GATHERING</div>
                </div>
                <div className="div-table-col textF16 FontB">
                  <div>BIOSTATISTICS</div>
                  <div>ALGORITHM</div>
                </div>
                <div className="div-table-col textF16 FontB">
                  <div>DEEP</div>
                  <div>LEARNING</div>
                </div>
                <div className="div-table-col textF16 FontB">DEVELOPMENT</div>
                <div className="div-table-col textF16 FontB">COMMERCIAL</div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-101
                </div>
                <div className="div-table-col">
                  <div>Pancreatic</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `70%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-102
                </div>
                <div className="div-table-col">
                  <div>Gastric</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `40%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-103
                </div>
                <div className="div-table-col">
                  <div>Lung</div>
                  <div>Cancer</div>
                  <div>(Male)</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `40%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-104
                </div>
                <div className="div-table-col">
                  <div>Colorectal</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `40%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-105
                </div>
                <div className="div-table-col">
                  <div>Prostate</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `40%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col-head"
                  style={{
                    background: `url(${craimonbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-106
                </div>
                <div className="div-table-col">
                  <div>Breast</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-col">Prevention</div>
                <div className="div-table-bar-cols divfill5">
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="div-table-col bar craimonBar">&nbsp;</div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `30%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <div id="pipeline">
        <ContentsTitle matches={matches} title={"PIPELINE"} />
        <div className="SectionDivNT SectionDivUpBlank" id="DTx PIPELINES">
          <div className="titleDiv">
            <div className="textT22 FontEB">
              <span>DTx PIPELINES</span>
            </div>
            <hr />
          </div>
          <div className="pipelineContent">
            <div className="div-table-wrap">
              <div className="div-table-head-row">
                <div className="div-table-col textF16 FontB">
                  <div>PIPELINES</div>
                </div>
                <div className="div-table-col textF16 FontB">
                  <div>TARGET DISEASE</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>DISCOVERY AND</div>
                  <div>TRANSLATION</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>POC</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>FEASIBILITY</div>
                  <div>STUDY</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>PIVOTAL</div>
                  <div>STUDY</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>COMMERCIAL</div>
                </div>
                <div
                  className="div-table-col textF16 FontB"
                  style={{ color: "#008b71" }}
                >
                  <div>MODULE</div>
                </div>
                <div className="div-table-col textF16 FontB">
                  <div>STUDY</div>
                  <div>PARTNER</div>
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${rhexiumbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-201
                </div>
                <div className="div-table-col" style={{ fontWeight: "bold" }}>
                  <div>Gynecologic</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-bar-cols divfill5">
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `28%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="div-table-col">
                  <div>AE/Symptom</div>
                </div>
                <div
                  className="div-table-col"
                  style={{
                    background: `url(${sev})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  &nbsp;
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${rhexiumbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-202
                </div>
                <div className="div-table-col" style={{ fontWeight: "bold" }}>
                  <div>Gastric</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-bar-cols divfill5">
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `50%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="div-table-col">
                  <div>Nutrition</div>
                </div>
                <div
                  className="div-table-col"
                  style={{
                    background: `url(${snuh})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  &nbsp;
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${rhexiumbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-203
                </div>
                <div className="div-table-col" style={{ fontWeight: "bold" }}>
                  <div>Breast</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-bar-cols divfill5">
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `4%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="div-table-col">
                  <div>Drug</div>
                  <div> compliance</div>
                </div>
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${sev})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  &nbsp;
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${rhexiumbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-204
                </div>
                <div className="div-table-col" style={{ fontWeight: "bold" }}>
                  <div>Lung</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-bar-cols divfill5">
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="fillDiv">
                    <div className="fill" style={{ width: `20%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="div-table-col">
                  <div>AE/Early</div>
                  <div> Detection</div>
                </div>
                <div
                  className="div-table-col"
                  style={{
                    background: `url(${sam})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  &nbsp;
                </div>
              </div>
              <div className="div-table-cell-row textF16 FontR">
                <div
                  className="div-table-col"
                  style={{
                    // background: `url(${rhexiumbg})`,
                    backgroundOrigin: "content-box",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  HDT-205
                </div>
                <div className="div-table-col" style={{ fontWeight: "bold" }}>
                  <div>Coloretal</div>
                  <div>Cancer</div>
                </div>
                <div className="div-table-bar-cols divfill5">
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>
                  <div className="div-table-col bar rhexiumBar">&nbsp;</div>
                  <div
                    className="div-table-col bar rhexiumBar"
                    style={{ background: `url(${bg})` }}
                  >
                    &nbsp;
                  </div>

                  <div className="fillDiv">
                    <div className="fill" style={{ width: `4%` }}>
                      <div className="fillLine">&nbsp;</div>
                      <div className="fillPointer">&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="div-table-col">
                  <div>Exercise</div>
                </div>
                <div className="div-table-col">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
