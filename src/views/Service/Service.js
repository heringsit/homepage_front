import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Service.css";
/*component*/
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
// import ContentsTitle from "../Components/ContentsTitle";
// import ostomy_main from "../../assets/images/07service/ostomy_main.png";
// import ostomy_popup from "../../assets/images/07service/ostomy_popup.png";
// import healiary_main from "../../assets/images/07service/healiary_main.svg";
// import healiary_kitchen from "../../assets/images/07service/healiary_kitchen.svg";
import healiary_application from "../../assets/images/07service/healiary_application.svg";
import ostomy_application from "../../assets/images/07service/ostomy_application.svg"

// import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
// import CommonCardFrameRight from "../common/CommonCardFrameRight";
// import ServiceTitleImage from "../../assets/images/07service/service_title.svg";

export default function Service({ match }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div
      id="service"
      style={{
        position: "relative",
        paddingBottom: "400px",
        textAlign: "center",
      }}
    >
      <Menubar slideIndex={0} />
      <Totop />

      {/* TITLE */}
      <div className="banner_img servicetitle">
        <span className="textF53 tcw title_default">SERVICE</span>
      </div>

      {/* CONTENTS */}
      <div className="servicecontents">
        <p className="introtxt textF24 tcb FontEB">
          HERINGS’ Two Service platforms.
        </p>
        <hr className="vertical_line"></hr>

        {/* HEALIARY */}
        <div className="healiary">
          <div className="flatformtitle">
            <div className="flatformnum">
              <span className="tcw">Platform 1</span>
            </div>
            <span className="tco2 textF28 FontEB">
              DIGITAL HEALTHCARE SERVICE PLATFORM
            </span>
          </div>
          <p className="textT18 explanation">
            Patients get direct services everyday through this platform. <br />
            Main services include nutrition, symptom management, drug adherence,
            exercise, and medication.
          </p>
          <iframe
            id="healiarymp4"
            src="https://www.youtube.com/embed/_d_OvUMhbho?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="application">
            <img src={healiary_application} alt="healiary application" />
            <div className="explanation">
              <p className="tco2 textT18 FontB">Application</p>
              <p className="FontEB textT24">HEALIARY</p>
              <p className="textT18" style={{ marginBottom: "60px" }}>
                The personalized companion digital platform that takes care of
                cancer patients’ daily challenges including nutrition/food
                intake, symptom management, and exercise.
              </p>
              <p className="textT18">
                Patient Engagement Mobile Application. It is a tool for cancer
                patients to remain engaged and active throughout their therapy
                with their care team.
              </p>
            </div>
          </div>
        </div>

        {/* OSTOMY */}
        <div className="ostomy">
          <div className="flatformtitle">
            <div className="flatformnum">
              <span className="tcw">Platform 2</span>
            </div>
            <span className="tco2 textF28 FontEB">
              TELE-HEALTHCARE SERVICE PLATFORM
            </span>
          </div>
          <p className="textT18 explanation">
            Gateway service platform between providers and patients for remote
            and home care management.​
          </p>
          <div className="application">
            <div className="explanation">
              <p className="tco2 textT18 FontB">Application</p>
              <p className="FontEB textT24">HEALIARY</p>
              <p className="textT18" style={{ marginBottom: "60px" }}>
                Home Health Care Service Platform for Ostomy patients. ​
              </p>
              <p className="textT18">
                Medical care teams can directly communicate with their patients
                in this platform. Patients inform their current medical
                conditions including photos then care teams evaluate them and
                provide appropriate feedbacks with self-management guidance.
              </p>
            </div>
            <img src={ostomy_application} alt="ostomy application" />
          </div>
        </div>
      </div>

      {/* <ContentsTitle matches={matches} title={"DIGITAL CARE SERVICE"} /> */}
      {/* <div className="SectionDivNT SectionDivUpBlank" id="digitalcareservice">
          <div className="servicecontent"> */}
      {/* ostomy */}
      {/* <CommonCardFrameLeft
              // subTitle={"Digital Care Service"}
              Title={"Ostomy Care"}
              content1={"Monitoring Tools to Facilitate Care."}
              content2={
                "It is fully integrated Tele-health tools to support remote patients and ostomy care program."
              }
              image1src={ostomy_main}
              image2src={ostomy_popup}
              image1alt={"ostomy_main"}
              image2alt={"osstomy_popup"}
            />
            <div
              style={{
                height: "180px",
              }}
            ></div> */}
      {/* healiary */}
      {/* <CommonCardFrameRight
              // subTitle={"Digital Care Service"}
              Title={"Healiary"}
              content1={"Patient Engagement Mobile Application."}
              content2={
                "It is a tool for cancer patients to remain engaged and active throughout their therapy with their care team."
              }
              image1src={healiary_main}
              image2src={healiary_kitchen}
              image1alt={"healiary_main"}
              image2alt={"healiary_kitchen"}
            />
          </div>
        </div> */}
      <Footer />
    </div>
  );
}
