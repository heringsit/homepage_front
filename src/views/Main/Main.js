import React, { useContext, useEffect } from "react";
import Footer from "../Components/Footer";
import { useHistory } from "react-router-dom";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import "./Main.css";
import "../../index.css";
import { MediaQueryContext } from "../../context";
import main_sub1 from "../../assets/images/00main/main-sub1.svg";
import main_sub2 from "../../assets/images/00main/main-sub2.svg";
import main_sub3 from "../../assets/images/00main/main-sub3.svg";
import main_sub4 from "../../assets/images/00main/main-sub4.svg";
import main_sub5 from "../../assets/images/00main/main-sub5.svg";
import main_sub6 from "../../assets/images/00main/main-sub6.svg";
import main2 from "../../assets/images/00main/main2.png";

export default function Main(props) {
  const history = useHistory();

  // mTablet (768px)
  const { mTablet } = useContext(MediaQueryContext);

  const executeScroll = () => {
    const element = document.getElementById(props.location.hashId);
    const headOffset = mTablet ? 84 : 184;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    executeScroll();
  }, [props.location.update]);

  const subItems = [
    {
      imgUrl: main_sub1,
      title: "Patient care",
      content: `Providing services for patient health management`,
    },
    {
      imgUrl: main_sub2,
      title: "Patient monitoring",
      content:
        "Medical staff monitors the patient's condition and provides feedback",
    },
    {
      imgUrl: main_sub3,
      title: "Data research",
      content: "Clinical research progress through monitoring data",
    },
    {
      imgUrl: main_sub4,
      title: "Constant development",
      content: "Developing a system for both patients and medical staff",
    },
  ];

  return (
    <div id="main" style={{ height: "100%" }}>
      <Menubar slideIndex={0} />
      <Totop />
      <div className="main-container">
        {/* {
          // 768px > 이미지; 768px < 비디오
          mTablet ? (
            <div className="mainimagelayout w-full h-full">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#000000",
                  opacity: "32%",
                }}
              ></div>
              <div className="mainimagetext">
                <span className="block Font_Mont_600">HERINGS</span>
                <span className="block Font_Mont_400">
                  Our whole new digital care service
                </span>
                <span className="block Font_Mont_400">
                  for you is ready to be discovered.
                </span>
              </div>
            </div>
          ) : ( */}
        <>
          <div className="mainlayout">
            <div className="maintext ">
              <p>
                <span style={{ color: "#F88001" }}>HERINGS</span> is a
                <br />
                personalized healthcare service
                <br /> platform company based on
                <br />{" "}
                <span style={{ color: "#F88001" }}>
                  Remote Patient Monitoring solutions
                </span>
              </p>
            </div>
          </div>
          <div className="mainlayout2">
            <img
              src={main2}
              alt="main2"
              className="mainsublayout2"
              // style={{ height: "8vw", weight: "8vw" }}
              // style={{ height: "454px", weight: "300px" }}
            />
            <div>
              <p className="maintext2 ">
                <p
                  style={{
                    color: "#F68C29",
                    fontSize: "clamp(1rem, 1.65vw, 2rem)",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  Remote Patient Monitoring solutions
                </p>
                Every individual patient deserves heartful attention
                <br /> and personal care no matter where they are <br />
                HERINGS connects patients and medical professionals
                <br /> for more convenient and  immediate care through
                <br /> its Remote Patient Monitoring solutions
              </p>
            </div>

            {/* <div className="mainsublayout">
                  {subItems.map((item, i) => (
                    <div key={i} className="mainsublayout2">
                      <img
                        src={item.imgUrl}
                        alt="subImage"
                        style={{ height: "8vw", weight: "8vw" }}
                        // style={{ height: "150px", weight: "150px" }}
                      />
                      <div className="sublayout">
                        <p className="subTitle">{item.title}</p>
                        <p className="subContent">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
          </div>
          <div className="mainlayoutImage mainlayout3">
            <div className="mainsublayout3">
              <img src={main_sub5} alt="subImage" className="subImage" />
              <div className="mainsub3">
                <div>
                  <p className="maintext3">
                    The new leader in
                    <br /> Remote Patient Monitoring
                  </p>
                  <p className="subContent2">
                    Remote patient monitoring (RPM) allows doctors tomonitor,
                    report, and analyze a patient's acute or chronic conditions
                    while the patient is away from the hospital or clinic.
                    Herings uses RPM-based services to enable doctors and
                    patients to overcome distance barriers and provide
                    therapeutic action in a short period of time in any
                    location.
                  </p>
                </div>
                <div
                  className="moveButton"
                  onClick={() => history.push("/rpmsolution")}
                >
                  GO TO RPM SOLUTION
                </div>
              </div>
            </div>
            <div className="mainsublayout3 itemRight">
              <div className="mainsub3">
                <div>
                  <p className="maintext3">Want more news from HERINGS?</p>
                  <p className="subContent2">
                    Want more news from Herings? <br />
                    Check out new Herings news right now!
                    <br />
                    We always introduce Herings with new news.
                  </p>
                </div>
                <div
                  className="moveButton itemRight"
                  style={{ textAlign: "center" }}
                  onClick={() => history.push("/news")}
                >
                  GO TO News Release
                </div>
              </div>
              <img src={main_sub6} alt="subImage" className="subImage" />
            </div>
            <div className="mainlayout4">
              <div className="mainsub3_2">
                <div>
                  <p className="maintext4">OUR MISSION</p>
                  <p className="subContent3">
                    We aim to be the best companion to cancer
                    <br /> patients through their long journey to
                    <br /> overcome the disease.
                  </p>
                </div>
                <div
                  className="moveButton"
                  onClick={() => history.push("/contactus")}
                >
                  CONTACT US
                </div>
              </div>
              <div className="diamonds">
                <div className="diamond">
                  <p className="diamond-text">IDENTIFY</p>
                  <p className="diamond-text2">
                    the exact pain points in
                    <br /> current medical
                    <br /> care system
                  </p>
                </div>
                <div className="diamond">
                  <p className="diamond-text">PRIORITIZE</p>
                  <p className="diamond-text2">
                    them according to
                    <br /> their significance and
                    <br /> clinical implication
                  </p>
                </div>

                <div className="diamond">
                  <p className="diamond-text">DEVELOP</p>
                  <p className="diamond-text2">
                    evidence based, science
                    <br /> embedded solution
                    <br /> algorithms
                  </p>
                </div>
                <div className="diamond">
                  <p className="diamond-text">IMPLEMENT</p>
                  <p className="diamond-text2">
                    them through
                    <br /> our digital
                    <br /> service platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* ) */}
        {/* } */}
      </div>
      <Footer />
    </div>
  );
}
