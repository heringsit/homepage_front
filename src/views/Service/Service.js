import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Service.css";
/*component*/
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";
import ostomy_main from "../../assets/images/07service/ostomy_main.png";
import ostomy_popup from "../../assets/images/07service/ostomy_popup.png";
import healiary_main from "../../assets/images/07service/healiary_main.png";
import healiary_kitchen from "../../assets/images/07service/healiary_kitchen.png";

import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
import CommonCardFrameRight from "../common/CommonCardFrameRight";

export default function Service({ match }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div id="content">
      <Menubar slideIndex={0} />
      <Totop />
      <div
        id="service"
        style={{
          paddingBottom: "200px"
        }}
      >
        <ContentsTitle matches={matches} title={"DIGITAL CARE SERVICE"} />
        <div className="SectionDivNT SectionDivUpBlank" id="digitalcareservice">
          <div className="servicecontent">
            {/* ostomy */}
            <CommonCardFrameLeft
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
                height: "180px"
              }}
            ></div>
            {/* healiary */}
            <CommonCardFrameRight
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
            <iframe
              id="healiarymp4"
              src="https://www.youtube.com/embed/_d_OvUMhbho?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
