import React, { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";
import drugadverse_main from "../../assets/images/09research/drugadverse_main.png";
import drugadverse_sub from "../../assets/images/09research/drugadverse_sub.png";
import research_image1 from "../../assets/images/09research/research_image1.png";
import research_image2 from "../../assets/images/09research/research_image2.png";
import research_image3 from "../../assets/images/09research/research_image3.png";
import research_image4 from "../../assets/images/09research/research_image4.png";
import rhexiumoncon_main from "../../assets/images/09research/rhexiumoncon_main.png";
import rhexiumoncon_sub from "../../assets/images/09research/rhexiumoncon_sub.png";
import "./Research.css";
import CommonCardFrameLeft from "../common/CommonCardFrameLeft";
import CommonCardFrameRight from "../common/CommonCardFrameRight";
import CommonCardFrameCenter from "../common/CommonCardFramCenter";
import CommonCardTitle from "../common/CommonCardTitle";
import TabClick from "../common/TabClick";

export default function Research() {
  const matches = useMediaQuery("(max-width:600px)");
  const [isScroll, setIsScroll] = useState(false);
  const onScroll = () => {
    // if (window.scrollY >= 0 || window.pageYOffset >= 0) {
    //   setIsScroll(true);
    // } else {
    //   setIsScroll(false);
    // }
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
  return (
    <div id="content" className="content">
      <Menubar slideIndex={0} />
      <Totop />
      <div id="research">
        <ContentsTitle matches={matches} title={"RESEARCH"} />
        <div
          style={{
            paddingBottom: "200px"
          }}
        >
          <TabClick isScroll={isScroll} />
          {/* Nutrition in Cancer Care */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="nutritionincancercare"
          >
            <CommonCardTitle title={"Nutrition in Cancer Care"} />
            <CommonCardFrameLeft
              // subTitle={"Nutrition in Cancer Care"}
              Title={"Rhexiumonco Nutrition"}
              content1={"Clinical Content Library – Real-time, "}
              content2={
                "Multidisciplinary system that combines clinical knowledge with patient data to assist oncologists in generating personalized treatment plans."
              }
              image1src={rhexiumoncon_main}
              image2src={rhexiumoncon_sub}
              image1alt={"rhexiumoncon_main"}
              image2alt={"rhexiumoncon_sub"}
            />
          </div>
          {/* Drug Adverse Event */}
          <div className="SectionDivNT SectionDivUpBlank" id="drugadverseevent">
            <CommonCardTitle title={"Drug Adverse Event"} />
            <CommonCardFrameRight
              // subTitle={"Nutrition in Cancer Care"}
              Title={"Drug Adverse Event reporting system"}
              content1={"Platform that can be immediately "}
              content2={
                "reported as a national drug adverse event reporting system when drug adverse events occur. This work was supported by the Bio Industry Technology Development Program(No. 20015086) By the Ministry of Trade, Industry & Energy(MOTIE, Korea)."
              }
              image1src={drugadverse_main}
              image2src={drugadverse_sub}
              image1alt={"drugadverse_main"}
              image2alt={"drugadverse_sub"}
            />
          </div>
          {/* Recurrence Prediction */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="recurrenceprediction"
          >
            <CommonCardTitle title={"Recurrence Prediction"} />
            <CommonCardFrameCenter
              content={
                "Since recurrence of lung cancer can be predicted as a specific symptom that occurs, we research an algorithm that inputs the symptoms directly felt by the patient in real time and predicts the possibility of recurrence in advance."
              }
              image1src={research_image1}
              image1alt={"research_image1"}
            />
          </div>
          {/* Exercise */}
          <div className="SectionDivNT SectionDivUpBlank" id="exercise">
            <CommonCardTitle title={"Exercise"} />
            <CommonCardFrameCenter
              content={
                "In cancer patients, the decrease in physical ability, including muscle strength, causes sarcopenia and cachexia, which ultimately worsens the prognosis of cancer patients. We research exercise algorithms that could enhance physical ability in cancer patients and apply them to our platform to demonstrate their effectiveness."
              }
              image1src={research_image2}
              image1alt={"research_image2"}
            />
          </div>
          {/* AI-based ostomy condition check */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="aibasedostomyconditioncheck"
          >
            <CommonCardTitle title={"AI-based Ostomy Condition Check"} />
            <CommonCardFrameCenter
              content={
                "We are collecting ostomy photos containing status information using our digital platform. We research an algorithm that automatically determines the condition of the ostomy by learning it through artificial intelligence."
              }
              image1src={research_image3}
              image1alt={"research_image3"}
            />
          </div>
          {/* Adherence of hormone therapy */}
          <div
            className="SectionDivNT SectionDivUpBlank"
            id="adherenceofhormonetherapy"
          >
            <CommonCardTitle title={"Adherence of Hormone Therapy"} />

            <CommonCardFrameCenter
              content={
                "In breast cancer patients, hormone therapy is an important treatment that can prevent recurrence. However, drug adherence is poor because it needs to be taken for a long time and many adverse events occur. We research that can improve the drug adherence of hormone therapy in breast cancer patients by analyzing various factors that affect drug adherence."
              }
              image1src={research_image4}
              image1alt={"research_image4"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
