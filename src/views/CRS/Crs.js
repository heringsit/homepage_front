import React, { useEffect, useState, useRef, useContext } from "react";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Crs.css";
import atti_main from "../../assets/images/08crs/atti_main.png";
import atti_sub from "../../assets/images/08crs/atti_sub.png";
import crs_image1 from "../../assets/images/08crs/crs_image1.png";
import crs_image2 from "../../assets/images/08crs/crs_image2.png";
import crs_image3 from "../../assets/images/08crs/crs_image3.png";
import CommonCardTitle from "../common/CommonCardTitle";
import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
import ProPrePlatformTitle from "./Sections/ProPrePlatformTitle";
import CommonCardFrameCenter from "../common/CommonCardFramCenter";
import TabClick from "../common/TabClick";
import useOnScreen from "../Aboutus/hooks/objectObserver";
import { MediaQueryContext, ThemeContext } from "../../context";
export default function Crs() {
  // const matches = useMediaQuery("(max-width:600px)");
  const { sTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);
  const [isScroll, setIsScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 238 || window.pageYOffset > 238) {
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

  // Scroll Tracker
  const scrollElem = Array.from(Array(4).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(4).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);
  visibleArray[2] = useOnScreen(refs.current[2]);
  visibleArray[3] = useOnScreen(refs.current[3]);
  console.log(visibleArray, ">>visibleArray");

  return (
    <div
      id="content"
      className="content"
      style={{ backgroundColor: theme === "dark" && "#282828" }}
    >
      <Menubar slideIndex={0} />
      <Totop />

      <div id="crs">
        <ContentsTitle matches={sTablet} title={"CLINICAL RESEARCH SERVICE"} />
        <div
          style={{
            paddingBottom: "200px",
          }}
        >
          <TabClick visibleArray={visibleArray} isScroll={isScroll} />
          {/* PRO · PRE Platform*/}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="propreplatform"
            ref={refs.current[0]}
          >
            <ProPrePlatformTitle />
            <CommonCardFrameLeft
              // subTitle={"PRO · PRE Platform"}
              Title={"Atti"}
              content1={"Real-time, clinical decision support tool to"}
              content2={
                "monitor and manage the complexities of lung cancer care."
              }
              image1src={atti_main}
              image2src={atti_sub}
              image1alt={"atti_main"}
              image2alt={"atti_sub"}
            />

            <iframe
              id="attimp4"
              src="https://www.youtube.com/embed/Fp19GlDhVRE?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Data Management */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="datamanagement"
            ref={refs.current[1]}
          >
            <CommonCardTitle title={"Data Management"} fontSize={"textF53"} />
            <CommonCardFrameCenter
              image1src={crs_image1}
              image1alt={"crs_image1"}
              content="Careful clinical data management is essential to the integrity of a clinical trial.
We are a one-stop-shop for all data management activities from database build, through data cleaning and query resolution, to database lock and archival."
            />
          </div>
          {/* Bio Stastics */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="biostatistics"
            ref={refs.current[2]}
          >
            <CommonCardTitle title={"Bio Stastics"} fontSize={"textF53"} />
            <CommonCardFrameCenter
              image1src={crs_image2}
              image1alt={"crs_image2"}
              content="Clinical trial design is the most important and critical to the success in entire clinical development process. 
              We are capable of data science-based clinical research providing biostatistics."
            />
          </div>
          {/* Clinical Operation */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="clinicaloperation"
            ref={refs.current[3]}
          >
            <CommonCardTitle
              title={"Clinical Operation"}
              fontSize={"textF53"}
            />
            <CommonCardFrameCenter
              image1src={crs_image3}
              image1alt={"crs_image3"}
              content="Clinical operation is a vital part of the clinical trial process in all phases, and ensures that run smoothly in accordance with all required protocols. Our team is comprised of highly-skilled professionals who drive the project management, monitoring and site management functions. We provides the best clinical trial work based on KCGP and ICH-GCP."
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
