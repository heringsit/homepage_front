import React, { useEffect, useState, useRef, useContext } from "react";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import ContentsTitle from "../Components/ContentsTitle";
import nutrition from "../../assets/images/09research/nutrition.png";
import symptommanagement from "../../assets/images/09research/symptom_management.png";
import drugadverseevents from "../../assets/images/09research/drug_adverse_events.png";
import research_1 from "../../assets/images/09research/research_1.png";
import research_2 from "../../assets/images/09research/research_2.png";
import research_3 from "../../assets/images/09research/research_3.png";
import research_4 from "../../assets/images/09research/research_4.png";
import "./Research.css";
import CommonCardTitle from "../common/CommonCardTitle";
import TabClick from "../common/TabClick";
import useOnScreen from "../Aboutus/hooks/objectObserver";
import { MediaQueryContext, ThemeContext } from "../../context";
import CommonCardFrame from "../common/CommonCardFrame";

export default function Research() {
  // const matches = useMediaQuery("(max-width:600px)");
  const { sTablet, mTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);
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

  // Scroll Tracker
  const scrollElem = Array.from(Array(7).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(7).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);
  visibleArray[2] = useOnScreen(refs.current[2]);
  visibleArray[3] = useOnScreen(refs.current[3]);
  visibleArray[4] = useOnScreen(refs.current[4]);
  visibleArray[5] = useOnScreen(refs.current[5]);
  visibleArray[6] = useOnScreen(refs.current[6]);
  // console.log(visibleArray, ">>visibleArray");
  // does not work as it breaks hooks of rules
  // const visibleArray = scrollElem.map((key) => useOnScreen(refs.current[key]))
  return (
    <div
      id="content"
      className="content"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "white",
      }}
    >
      <Menubar slideIndex={0} />
      <Totop />
      {/* <div ref={refs.current[0]}></div> */}

      <div id="research">
        {!mTablet && (
          <TabClick visibleArray={visibleArray} isScroll={isScroll} />
        )}
        <ContentsTitle matches={sTablet} title={"RESEARCH"} />
        <div className="pb-600 contentsmargin">
          <div className="contents contentspadding">
            {/* Nutrition in Cancer Care */}
            <div className="pt-64" id="nutrition" ref={refs.current[0]}>
              <CommonCardTitle title={"NUTRITION"} fontSize={"textF28"} />
              <CommonCardFrame
                imageSrc={nutrition}
                imageAlt="nutrition"
                contentPadding="drugadverse-padding ptb-36"
                content1="Nutrition is one the most import fields in the long cancer
                          care journey. It is significantly related to treatment
                          outcomes such as quality of life, drug compliance, and even to
                          prognosis."
                content2="We do perform nutrition research in terms of food data
                          analysis, association with symptoms and treatments, dietary
                          patterns, and clinical trial, etc."
                content3="Recently, a pilot study (NUGA trial, NCT04800991) was
                          performed for evaluating feasibility and efficacy of digital
                          health technology with nutritional care in gastric cancer
                          patients who underwent gastrectomy."
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>
            {/* Symptom Management */}
            <div className="contents-top-padding"></div>
            <div className="pt-64" id="symptommanagement" ref={refs.current[1]}>
              <CommonCardTitle
                title={"SYMPTOM MANAGEMENT"}
                fontSize={"textF28"}
              />
              <div className="align-items-center flex-col gap-40">
                <div
                  className={`flex gap-16 align-items-center ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                <div className="atti-content align-items-center gap-16">
                  <p className="m-reset FontEB textF24">ATTI</p>
                  <p className="m-reset FontL textF18">
                    Real-time, clinical decision support tool to monitor and
                    manage the complexities of lung cancer care.
                  </p>
                </div>
                </div>
                <div className="align-items-center flex-row gap-58 w-full">
                  <img
                    className="image-fit"
                    src={symptommanagement}
                    alt="nutrition"
                  />
                  <div className="research-youtube">
                  <iframe
                    className="research-youtube"
                    src="https://www.youtube.com/embed/Fp19GlDhVRE?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  </div>
                </div>
              </div>
            </div>
            {/* Exercise */}
            <div className="contents-top-padding"></div>
            <div className="pt-64" id="exercise" ref={refs.current[2]}>
              <CommonCardTitle title={"EXERCISE"} fontSize={"textF28"} />
              <CommonCardFrame
                imageSrc={research_1}
                imageAlt="research_exercise"
                content1="In cancer patients, the decrease in physical ability, including muscle strength, causes sarcopenia and cachexia, which ultimately worsens the prognosis of cancer patients. We research exercise algorithms that could enhance physical ability in cancer patients and apply them to our platform to demonstrate their effectiveness."
                contentPadding="ptb-24"
                flexStyle="flex-col gap-68"
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>
            {/* Risk Prediction */}
            <div className="contents-top-padding"></div>
            <div className="pt-64" id="riskprediction" ref={refs.current[3]}>
              <CommonCardTitle title={"RISK PREDICTION"} fontSize={"textF28"} />
              <CommonCardFrame
                imageSrc={research_2}
                imageAlt="research_risk_prediction"
                content1={
                  "Cancer may progress or recur even after surgery or chemotherapy and radiation therapy. Since recurrence of lung cancer can be predicted as a specific symptom that occurs, we research an algorithm that inputs the symptoms directly felt by the patient in real time and predicts the possibility of recurrence in advance."
                }
                contentPadding="ptb-24"
                flexStyle="flex-col gap-68"
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>
            {/* Drug Adherence */}
            <div className="contents-top-padding"></div>
            <div className="pt-64" id="drugadherence" ref={refs.current[4]}>
              <CommonCardTitle title={"DRUG ADHERENCE"} fontSize={"textF28"} />
              <CommonCardFrame
                imageSrc={research_3}
                imageAlt="research_drug_adherence"
                content1={
                  "In breast cancer patients, hormone therapy is an important treatment that can prevent recurrence. However, drug adherence is poor because it needs to be taken for a long time and many adverse events occur. We research that can improve the drug adherence of hormone therapy in breast cancer patients by analyzing various factors that affect drug adherence​."
                }
                contentPadding="ptb-24"
                flexStyle="flex-col gap-68"
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>
            {/* AI algorithms */}
            <div className="contents-top-padding"></div>
            <div className="pt-64" id="aialgorithms" ref={refs.current[5]}>
              <CommonCardTitle title={"AI ALGORITHMS"} fontSize={"textF28"} />
              <CommonCardFrame
                imageSrc={research_4}
                imageAlt="research_aialgorithms"
                content1={
                  "Through the development of AI algorithms, medical staff can provide medical services to patients more accurately and quickly. We are collecting ostomy photos containing status information using our digital platform. We research an algorithm that automatically determines the condition of the ostomy by learning it through artificial intelligence."
                }
                contentPadding="ptb-24"
                flexStyle="flex-col gap-68"
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>

            <div className="contents-top-padding"></div>
            <div className="pt-64" id="drugadverseevents" ref={refs.current[6]}>
              <CommonCardTitle
                title={"DRUG ADVERSE EVENTS"}
                fontSize={"textF28"}
              />
              <CommonCardFrame
                imageSrc={drugadverseevents}
                imageAlt="SODA"
                content1="Platform that can be immediately reported as a national
                drug adverse event reporting system when drug adverse
                events occur. This work was supported by the Bio Industry
                Technology"
                content2="Development Program(No. 20015086) By the Ministry of
                Trade, Industry & Energy(MOTIE, Korea)."
                subText1="SMART REPORT SYSTEM FOR DRUG ADVERSE EVENTS"
                subText2="SODA"
                subText1Style="FontB mb-4"
                subText2Style="textF24 FontEB mb-8"
                contentPadding="drugadverse-padding"
                mainTextStyle="text-align-start textF18 FontL lineheight160"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
