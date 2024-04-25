import React, { useContext } from "react";

import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import "./Rpm.css";
import "../../index.css";
import { MediaQueryContext } from "../../context";
import rpm_img2 from "../../assets/images/03rpm/rpm_img2.svg";
import boximg1 from "../../assets/images/03rpm/boximg1.svg";
import boximg2 from "../../assets/images/03rpm/boximg2.svg";
import boximg3 from "../../assets/images/03rpm/boximg3.svg";
import boximg4 from "../../assets/images/03rpm/boximg4.svg";
import serviceimg1 from "../../assets/images/03rpm/service1.svg";
import serviceimg2 from "../../assets/images/03rpm/service2.svg";
import serviceimg3 from "../../assets/images/03rpm/service3.svg";
import nutrition from "../../assets/images/03rpm/nutrition_card.svg";
import riskPrediction from "../../assets/images/03rpm/risk_card.svg";
import drugAdherence from "../../assets/images/03rpm/drug_card.svg";
import aiDeepLearning from "../../assets/images/03rpm/ai_deep_learning_card.svg";
import drugAdverse from "../../assets/images/03rpm/drug_adverse_card.svg";
import CGM from "../../assets/images/03rpm/cgm_card.svg";
import HDT101 from "../../assets/images/03rpm/hdt_101_card.svg";

const RpmSolution = () => {
  // mTablet (768px)
  const { mTablet } = useContext(MediaQueryContext);

  const boxItems = [
    {
      imgUrl: boximg1,
      title: "High efficiency",
      content: `Multiple patients can be managed \n which increases the efficiency of\nmedical staff treating patients.`,
    },
    {
      imgUrl: boximg2,
      title: "Time saving",
      content:
        "It is possible to receive and analyze\npatient monitoring information\nwithin a short period of time.",
    },
    {
      imgUrl: boximg3,
      title: "Better results",
      content: `It can be managed easily and\nconveniently anywhere, improving\npatient treatment outcomes.`,
    },
    {
      imgUrl: boximg4,
      title: "Low cost",
      content: `By saving medical resources,\nit is possible to manage patients\nwithout spending a lot of money.`,
    },
  ];

  const serviceItems = [
    {
      imgUrl: serviceimg1,
      title: "OSTO CARE",
      content:
        "OstoCare is a platform developed to facilitate\n non-face-to-face management of ostomy\n patients by ostomy staff.",
      btnText: "GO TO OSTO CARE",
    },
    {
      imgUrl: serviceimg2,
      title: "ATTI",
      content:
        "ATTI closely monitors the side effects that frequently occur in lung cancer patients and provides patients with appropriate ways to deal with the side effects.",
    },
    {
      imgUrl: serviceimg3,
      title: "HEALIARY",
      content:
        "Healiary is a service that allows cancer patients to monitor their own health management. Cancer patients can easily manage their health with various functions.",
      btnText: "GO TO HEALIARY",
    },
  ];

  const rpmItems = [
    {
      imgUrl: nutrition,
      title: "nutrition",
    },
    {
      imgUrl: riskPrediction,
      title: "risk Prediction",
    },
    {
      imgUrl: drugAdherence,
      title: "drug Adherence",
    },
    {
      imgUrl: aiDeepLearning,
      title: "ai Deep Learning",
    },
    {
      imgUrl: drugAdverse,
      title: "drug Adverse",
    },
    {
      imgUrl: CGM,
      title: "CGM",
    },
    {
      imgUrl: HDT101,
      title: "HDT-101",
    },
  ];

  return (
    <div id="rpmsolution">
      <Menubar slideIndex={0} />
      <Totop />
      <div className="rpm-main-container">
        <div className="rpm-container1">
          <div className="rpm-section1-text-layout">
            <span className="rpm-section1-maintext">
              The new leader in <br /> Remote Patient Monitoring <br />
            </span>
            <span className="rpm-section1-subtext ">
              HERINGS provides convenient services
              <br /> based on remote patient monitoring
            </span>
          </div>
        </div>
        <div className="rpm-container2">
          <div>
            <p className="rpm-section2-maintext">
              What is{" "}
              <span
                style={{
                  fontSize: "clamp(2rem, 2.2vw, 3rem)",
                  color: "#F68C29",
                }}
              >
                R
              </span>
              emote{" "}
              <span
                style={{
                  fontSize: "clamp(2rem, 2.2vw, 3rem)",
                  color: "#F68C29",
                }}
              >
                P
              </span>
              atient{" "}
              <span
                style={{
                  fontSize: "clamp(2rem, 2.2vw, 3rem)",
                  color: "#F68C29",
                }}
              >
                M
              </span>
              onitoring?
            </p>
            <span className="rpm-section2-subtext">
              Remote patient monitoring (RPM) allows doctors to monitor, report,
              and analyze a patient's acute or chronic conditions while the
              patient is away from the hospital or clinic. Conveniently allows
              doctors to review personal health and medical data from a location
              separate from the patient, from anywhere. Herings uses RPM-based
              services to enable doctors and patients to overcome distance
              barriers and provide therapeutic action in a short period of time
              in any location.
            </span>
          </div>
          <img src={rpm_img2} alt="rpmImage2" className="rpmImage" />
        </div>
        <div className="rpm-container3">
          <div className="rpm-section3-group-container ">
            {boxItems.map((item) => (
              <div className="rpm-section3-group-box ">
                <img src={item.imgUrl} alt="boximg" className="rpm-boxicon" />
                <div className="rpm-section3-boxtext-layout">
                  <p className="rpm-section3-box-text">{item.title}</p>
                  <span className="rpm-section3-box-subtext">
                    {item.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="rpm-section3-text-layout">
            <p className="rpm-section3-maintext">
              Why We Need{" "}
              <span
                style={{
                  fontSize: "clamp(2rem, 2.5vw, 3rem)",
                  //   fontSize: "45px",
                  color: "#F68C29",
                }}
              >
                RPM
              </span>
              <span style={{ fontSize: "clamp(2rem, 2.5vw, 3rem)" }}>?</span>
            </p>
            <span className="rpm-section3-subtext">
              Remote patient monitoring allows medical staff to manage large
              numbers of patients without distance constraints and improves the
              efficiency of patient care. Patients can directly record and
              manage their health status and receive feedback from medical staff
              based on the recorded data. Other benefits include the increase in
              the elderly population, the need to expand access to healthcare,
              cost advantages, and savings in healthcare resources.
            </span>
          </div>
        </div>
        <div className="rpm-section4-layout-bg">
          <div className="rpm-section4-layout">
            <div>
              <p className="rpm-section4-maintext ">
                Check out{" "}
                <span
                  style={{
                    color: "#F68C29",
                  }}
                >
                  HERINGS RPM
                </span>{" "}
                services!
              </p>
              <p className="rpm-section4-subtext" style={{ marginTop: "24px" }}>
                This is the RPM service created by HERINGS!
              </p>
            </div>
            <div
              style={{
                marginTop: "11vw",
                gap: "120px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {serviceItems.map((item) => (
                <div className="rpm-service-container">
                  <img src={item.imgUrl} className="rpm-sercive-img" />
                  <div className="rpm-service-text-layout ">
                    <p className="rpm-section3-maintext">{item.title}</p>
                    <span className="rpm-section4-subtext">{item.content}</span>
                    {item.btnText ? (
                      <div className="rpm-service-btn rpm-service-btn-text ">
                        {item.btnText}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rpm-container5">
            <div className="rpm-section5-box-layout">
              <div className="rpm-section5-text-layout">
                <p className="rpm-section4-maintext">
                  <span style={{ color: "#F68C29" }}>HERINGS RPM </span>
                  Research!
                </p>
                <p className="rpm-section4-subtext">
                  Check out the list of RPM research being conducted by HERINGS!
                </p>
              </div>
              <div className="rpm-section5-rpmItems-layout">
                {rpmItems.map((item) => (
                  <div
                    className="rpm-section5-rpmItem"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  >
                    {/* <img src={item.imgUrl} alt="rpmimg"></img> */}
                    <p className="rpm-section5-item-text ">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RpmSolution;
