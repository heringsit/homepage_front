import React, { useEffect, useState, useRef, useContext } from "react";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Crs.css";
import crs_image1 from "../../assets/images/08crs/crs_image1.png";
import crs_image2 from "../../assets/images/08crs/crs_image2.png";
import crs_image3 from "../../assets/images/08crs/crs_image3.png";
import CommonCardTitle from "../common/CommonCardTitle";
import ClinicalTrialServiceTitle from "./Sections/ClinicalTrialServiceTitle";
import TabClick from "../common/TabClick";
import useOnScreen from "../Aboutus/hooks/objectObserver";
import { ThemeContext } from "../../context";
import CommonCardFrame from "../common/CommonCardFrame";
export default function Crs() {
  const matches = useMediaQuery("(max-width:600px)");
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
  const scrollElem = Array.from(Array(3).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(3).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);
  visibleArray[2] = useOnScreen(refs.current[2]);
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
        <TabClick visibleArray={visibleArray} isScroll={isScroll} />
        <ContentsTitle matches={matches} title={"CLINICAL TRIAL SERVICE"} />
        <div className="contentsmargin">
          <div className="contents contentspadding">
            <div className="pt-64 pb-56">
              <ClinicalTrialServiceTitle />
            </div>
            {/* Clinical Trial Service */}
            <div className="pt-64" id="clinicaltrialdesign" ref={refs.current[0]} >
              <CommonCardTitle title={"CLINICAL TRIAL DESIGN"} fontSize={"textF28 "} />
              <CommonCardFrame
                imageSrc={crs_image1}
                imageAlt="clinical trial design"
                content1="HERINGS incorporates extensive therapeutic knowledge, clinical trial expertise, and comprehensive innovative technology to develop novel clinical trial designs and optimize clinical development timelines."
                contentPadding="ptb-24"
                contentStyle="align-items-left"
                flexStyle="flex-col gap-68"
              />
            </div>
            {/* Data Management */}
            <div className="pt-236"></div>
            <div className="pt-64" id="datamanagement" ref={refs.current[1]}>
              <CommonCardTitle title={"DATA MANAGEMENT"} fontSize={"textF28 "} />
              <CommonCardFrame
                imageSrc={crs_image2}
                imageAlt="data management"
                content1="Generates the most appropriate solutions based on innovative statistical principles and state of art technology for data management."
                contentPadding="ptb-24"
                contentStyle="align-items-left"
                flexStyle="flex-col gap-68"
              />
            </div>
            {/* Statistical Analysis */}
            <div className="pt-236 "></div>
            <div className="pt-64 pb-600 " id="statisticalanalysis" ref={refs.current[2]}>
              <CommonCardTitle title={"STATISTICAL ANALYSIS"} fontSize={"textF28 "} />
              <CommonCardFrame
                imageSrc={crs_image3}
                imageAlt="statistical analysis"
                content1="Statistical analysis is conducted by applying advanced biostatistical methodologies and most appropriate statistical programming through highly-optimized process"
                contentPadding="ptb-24"
                contentStyle="align-items-left"
                flexStyle="flex-col gap-68"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
