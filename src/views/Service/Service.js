import React, { useContext } from "react";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
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
import CommonCardFrame from "../common/CommonCardFrame";
import ContentsTitle from "../Components/ContentsTitle";

// import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
// import CommonCardFrameRight from "../common/CommonCardFrameRight";
// import ServiceTitleImage from "../../assets/images/07service/service_title.svg";

export default function Service({ match }) {
  const { theme } = useContext(ThemeContext);

  // console.log(match, ">>match ");
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
      
      {/* TITLE */}
      <ContentsTitle title={"SERVICE"} />

      {/* CONTENTS */}
      <div className="w-screen flex-col justify-between "> 
        <div className="contentsmargin pb-200">
          <div className="servicecontents contentspadding flex-col gap-88">
            <div> {/* Content Title */}
              <p
                className={`introtxt textF24 FontEB ${
                  theme === "light" ? "tcb" : "tcw"
                }`}
              >
                HERINGS’ Two Service platforms.
                
              </p>
              <div className="vertical_line"/>

              {/* <hr className="vertical_line"></hr> */}
            </div>
            <div className="flex-col gap-240"> 
              {/* HEALIARY */}
              <div
                className="text-align-center flex-wrap gap-40 inline-block"
                id="digitalcareservice"
              >
                <div className="flex-wrap gap-16 ">
                  <div className="flatformtitle">
                    <div className="flatformnum flex-col gap-4 w-100px">
                      <span className="tcw FontB textF16 ">Platform 1</span>
                    </div>
                    <span className="tco2 textF28 FontEB">
                      DIGITAL HEALTHCARE SERVICE PLATFORM
                    </span>
                  </div>
                  <p className="textF18 explanation FontL m-reset">
                    Patients get direct services everyday through this platform.
                    <br />
                    Main services include nutrition, symptom management, drug
                    adherence, exercise, and medication.
                  </p>
                </div>
                <div className="youtube mb-40 mt-40">
                  <iframe
                    src="https://www.youtube.com/embed/_d_OvUMhbho?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <CommonCardFrame
                  imageSrc={healiary_application}
                  imageAlt="healiary application"
                  subText1="Application"
                  subText2="HEALIARY"
                  content1={
                    "The personalized companion digital platform that takes care of cancer patients’ daily challenges including nutrition/food intake, symptom management, and exercise."
                  }
                  content2={
                    "Patient Engagement Mobile Application. It is a tool for cancer patients to remain engaged and active throughout their therapy with their care team."
                  }
                  flexStyle="flex-row gap-120"
                  mainContentStyle="flex-col gap-56"
                  contentPadding=""
                  subText1Style="textT18 FontB mb-4"
                  subText2Style="textF24 FontEB  mb-8"
                />
              </div>

              {/* OSTOMY */}
              <div className="text-align-center flex-col gap-24" id="telehealthcareservice">
                <div className="flex-wrap gap-16">
                  <div className="flatformtitle">
                    <div className="flatformnum flex-col gap-4 w-100px">
                      <span className="tcw FontB textF16">Platform 2</span>
                    </div>
                    <span className="tco2 textF28 FontEB ">
                      TELE-HEALTHCARE SERVICE PLATFORM
                    </span>
                  </div>
                  <p className="textF18 explanation FontL m-reset">
                    Gateway service platform between providers and patients for
                    remote and home care management.​
                  </p>
                </div>
                <CommonCardFrame
                  imageSrc={ostomy_application}
                  imageAlt="ostomy application"
                  subText1="Application"
                  subText2="OSTOMY CARE"
                  content1={
                    "Home Health Care Service Platform for Ostomy patients."
                  }
                  content2={
                    "Medical care teams can directly communicate with their patients in this platform. Patients inform their current medical conditions including photos then care teams evaluate them and provide appropriate feedbacks with self-management guidance."
                  }
                  flexStyle="flex-row-reverse gap-120"
                  mainContentStyle="flex-col gap-56"
                  contentPadding=""
                  subText1Style="textF18 FontB mb-4"
                  subText2Style="textF24 FontEB  mb-8"
                />
              </div>
            </div>
          </div>
        </div>
        <Totop />
        <Footer />
      </div>
      
    </div>
  );
}
