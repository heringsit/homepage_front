import React, { useContext, useEffect, useRef, useState } from "react";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Service.css";
/*component*/
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
/* Pictures */
import healiary_application from "../../assets/images/07service/healiary_application.svg";
import ostomy_application from "../../assets/images/07service/ostomy_application.svg";
import { MediaQueryContext, ThemeContext } from "../../context";
import CommonCardFrame from "../common/CommonCardFrame";
import ContentsTitle from "../Components/ContentsTitle";
import TabClick from "../common/TabClick";
import useOnScreen from "../hooks/objectObserver";

export default function Service(props) {
  const { theme } = useContext(ThemeContext);

  const [isScroll, setIsScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 0 || window.pageYOffset > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  // 모바일 메뉴
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);

  const scrollElem = Array.from(Array(2).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(2).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);

  const { mTablet } = useContext(MediaQueryContext);
  // console.log(match, ">>match ");

  // Scroll function
  // update: TabClick function -> NavLink 에서 오는 random 숫자
  // hashId: TabClick function -> NavLink 에서 오는 hashId
  // Tab/Menubar 안에서 NavLink 눌을때 마다 random number가 만들어 집니다.
  // useEffect hook + random number 통해 click 을 track 합니다
  const executeScroll = () => {
    const element = document.getElementById(props.location.hashId);
    const headOffset = mTablet ? 124 : 224;
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

  // CommonCardTitle, CommonCardFrame component 들이 쓰입니다
  return (
    <div
      id="service"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "white",
      }}
    >
      <Menubar slideIndex={0} /> {/* TITLE */}
      {!mTablet && <TabClick visibleArray={visibleArray} />}
      <ContentsTitle title="SERVICE" />
      {/* CONTENTS */}
      <div className="flex-col justify-between">
        <div className="contentsmargin pb-200">
          <div className="servicecontents contentspadding flex-col gap-88">
            <div>
              {/* Content Title */}
              <p
                className={`introtxt textF24 FontEB ${
                  theme === "light" ? "tcb" : "tcw"
                }`}
              >
                HERINGS’ Two Service platforms.
              </p>
              <div
                className={`vertical_line ${
                  theme === "dark"
                    ? "vertical_line_dark"
                    : "vertical_line_light"
                }`}
              />
              {/* <hr className="vertical_line"></hr> */}
            </div>
            <div className="flex-col gap-240">
              {/* HEALIARY */}
              <div
                className="text-align-center flex-wrap gap-40 inline-block"
                id="digitalcareservice"
                ref={refs.current[0]}
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
                  // 아래 이미지 주소 다음과 같음 저기서 이미지파일 교체해주면 됨 /assets/images/07service/healiary_application.svg
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
                  menu="SERVICE"
                  btntext="Go to healiary"
                  landingURL="https://www.healiary.com"
                />
              </div>

              {/* OSTO CARE */}
              <div
                className="text-align-center flex-col gap-24"
                id="telehealthcareservice"
                ref={refs.current[1]}
              >
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
                  subText2="OSTO CARE"
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
                  menu="SERVICE"
                  btntext="Go to osto care"
                  landingURL="https://www.ostocare.co.kr/"
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
