import React, { useContext } from "react";
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
import ostomy_application from "../../assets/images/07service/ostomy_application.svg";
import { ThemeContext } from "../../context";

// import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
// import CommonCardFrameRight from "../common/CommonCardFrameRight";
// import ServiceTitleImage from "../../assets/images/07service/service_title.svg";

export default function Service({ match }) {
  const matches = useMediaQuery("(max-width:1260px)");
  const { theme } = useContext(ThemeContext);

  console.log(match, ">>match ");
  return (
    <div
      id="service"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "white",
      }}
      className="servicecontainer"
    >
      <Menubar slideIndex={0} />
      <Totop />

      {/* TITLE */}
      <div className="banner_img servicetitle">
        <span className="textF53 tcw title_default">SERVICE</span>
      </div>

      {/* CONTENTS */}
      <div className="contentsmargin">
      <div className="servicecontents contentspadding flex-col">
        <p
          className={`introtxt textF24 FontEB ${
            theme === "light" ? "tcb" : "tcw"
          }`}
        >
          HERINGS’ Two Service platforms.
        </p>
        <hr className="vertical_line"></hr>

        {/* HEALIARY */}
        <div id="digitalcareservice">
          <div className="healiary flex-wrap gap40">
            <div className="flex-wrap gap16">
              <div className="flatformtitle">
                <div className="flatformnum flex-col gap4">
                  <span className="tcw">Platform 1</span>
                </div>
                <span className="tco2 textF28 FontEB">
                  DIGITAL HEALTHCARE SERVICE PLATFORM
                </span>
              </div>
              <p className="textT18 explanation mr">
                Patients get direct services everyday through this platform.
                <br />
                Main services include nutrition, symptom management, drug
                adherence, exercise, and medication.
              </p>
            </div>
            <iframe
              id="healiarymp4"
              src="https://www.youtube.com/embed/_d_OvUMhbho?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          <div className="application flex-row gap120">
            <img className="image-fit" src={healiary_application} alt="healiary application" />
            <div className="explanation lineheight160 flex-col gap56 mr">
              <div> {/* mr -> margin reset; mb -> margin bottom */}
                <p className="tco2 textT18 FontB mr mbsm">Application</p>
                <p className="FontEB textF24 mr mb">HEALIARY</p>
                <p className="textT18 mr">
                  The personalized companion digital platform that takes care of
                  cancer patients’ daily challenges including nutrition/food
                  intake, symptom management, and exercise.
                </p>
              </div>
              <div>
                <p className="textT18 mr">
                  Patient Engagement Mobile Application. It is a tool for cancer
                  patients to remain engaged and active throughout their therapy
                  with their care team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OSTOMY */}
        <div className="ostomy flex-col gap24">
          <div className="flex-col gap16">
            <div className="flatformtitle">
              <div className="flatformnum flex-col gap4">
                <span className="tcw">Platform 2</span>
              </div>
              <p className="textT18 mr">
                Gateway service platform between providers and patients for
                remote and home care management.​
              </p>
            </div>
            <p className="textT18 explanation mr">
              Gateway service platform between providers and patients for remote
              and home care management.​
            </p>
          </div>
          <div className="application flex-row-reverse gap120">
            <img className="image-fit" src={ostomy_application} alt="ostomy application" />
            <div className="explanation lineheight160 flex-col gap56">
              <div>
                <p className="tco2 textT18 FontB mr mbsm">Application</p>
                <p className="FontEB textF24 mr mb">OSTOMY CARE</p>
                <p className="textT18 mr">
                  Home Health Care Service Platform for Ostomy patients. ​
                </p>
              </div>
              <div>
                <p className="textT18 mr">
                  Medical care teams can directly communicate with their
                  patients in this platform. Patients inform their current
                  medical conditions including photos then care teams evaluate
                  them and provide appropriate feedbacks with self-management
                  guidance.
                </p>
              </div>
              <img src={ostomy_application} alt="ostomy application" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
