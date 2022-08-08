import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useContext } from "react";
import { useLocation } from "react-router";
import "../Components/Menubar.css";
import { ThemeContext } from "../../context";

export default function TabClick({ visibleArray, isScroll }) {
  let pathname = useLocation().pathname;

  // ex: [true, false, false] -> [whoweare:Visible, teamList:not-Visible, pai:not-Visible]
  // const visibleCount = visibleArray?.filter(value => value===true).length; // check how many elements are visible in DOM
  const visibleIndex = visibleArray?.indexOf(true) === -1 ? 0 : visibleArray?.indexOf(true);
  const aboutustabs = ["whoweare", "heringsteam", "researchpartners"];
  const crstabs = [
    "clinicaltrialdesign",
    "datamanagement",
    "statisticalanalysis",
  ];
  const researchtabs = [
    "nutrition",
    "symptommanagement",
    "exercise",
    "riskprediction",
    "drugadherence",
    "aialgorithms",
    "drugadverseevents"
  ];
  const scrollWithOffset = (el, yOffset = -90) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="TABS_sticky"
      style={{ backgroundColor: theme === "dark" && "#282828" }}
    >
      <div className="sticky_padding" />
      <div
        className={
          "TABS_layout TABS_layout_padding " +
          (theme === "dark" ? "menuBorderBottomDark" : "menuBorderBottomLight")
        }
      >
        {pathname === "/aboutus/"
          ? aboutustabs.map((tab, index) => (
              <React.Fragment key={index}>
                <div className={"TABS_tab FontR textF16"}>
                  <Link
                    smooth
                    to={`#${tab}`}
                    scroll={scrollWithOffset}
                    className={
                      index === visibleIndex
                        ? "w-full h-full tagADefault tabATagTab FontEB"
                        : "w-full h-full tagADefault FontR " +
                          (theme === "dark" ? "tcw" : "tcg3")
                    }
                  >
                    {tab === "whoweare"
                      ? "Who We Are"
                      : tab === "heringsteam"
                      ? "HERINGS Team"
                      : tab === "researchpartners"
                      ? "Partners & Investors"
                      : ""}
                  </Link>
                </div>
                {index + 1 === aboutustabs.length ? null : (
                  <span className="tcg3" style={{ margin: "auto" }}>
                    |
                  </span>
                )}
              </React.Fragment>
            ))
          : pathname === "/crs/"
          ? crstabs.map((tab, index) => (
              <React.Fragment key={index}>
                <div className="TABS_tab FontR textF16">
                  <Link
                    smooth
                    to={`#${tab}`}
                    scroll={el => scrollWithOffset(el, -189)}
                    className={
                      index === visibleIndex
                        ? "w-full h-full tagADefault tabATagTab FontEB"
                        : "w-full h-full tagADefault FontR " +
                          (theme === "dark" ? "tcw" : "tcg3")
                    }
                  >
                    {tab === "clinicaltrialdesign"
                      ? "CLINICAL TRIAL DESIGN"
                      : tab === "datamanagement"
                      ? "DATA MANAGEMENT"
                      : tab === "statisticalanalysis"
                      ? "STATISTICAL ANALYSIS"
                      : ""}
                  </Link>
                </div>
                {index + 1 === crstabs.length ? null : (
                  <span className="tcg3" style={{ margin: "auto" }}>
                    |
                  </span>
                )}
              </React.Fragment>
            ))
          : researchtabs.map((tab, index) => (
              <React.Fragment key={index}>
                <div className="TABS_tab FontR textF16">
                  <Link
                    smooth
                    to={`#${tab}`}
                    scroll={el => scrollWithOffset(el, -189)}
                    className={
                      index === visibleIndex
                        ? "w-full h-full tagADefault tabATagTab FontEB"
                        : "w-full h-full tagADefault FontR " +
                          (theme === "dark" ? "tcw" : "tcg3")
                    }
                  >
                    {tab === "nutrition"
                      ? "NUTRITION"
                      : tab === "symptommanagement"
                      ? "SYMPTOM MANAGEMENT"
                      : tab === "exercise"
                      ? "EXERCISE"
                      : tab === "riskprediction"
                      ? "RISK PREDICTION"
                      : tab === "drugadherence"
                      ? "DRUG ADHERENCE"
                      : tab === "aialgorithms"
                      ? "AI ALGORITHMS"
                      : tab === "drugadverseevents"
                      ? "DRUG ADVERSE EVENTS"
                      : ""
                    }
                  </Link>
                </div>
                {index + 1 === researchtabs.length ? null : (
                  <span className="tcg3" style={{ margin: "auto" }}>
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
      </div>
    </div>
  );
}

// Reference:
// onClick={(e) => {
//   const transformTab =
//     tab === "nutritionincancercare"
//       ? "Nutrition in Cancer Care"
//       : tab === "drugadverseevent"
//       ? "Drug Adverse Event"
//       : tab === "recurrenceprediction"
//       ? "Recurrence Prediction"
//       : tab === "exercise"
//       ? "Exercise"
//       : tab === "aibasedostomyconditioncheck"
//       ? "AI-based Ostomy Condition Check"
//       : tab === "adherenceofhormonetherapy"
//       ? "Adherence of Hormone Therapy"
//       : "";

//   if (e.target.innerText === transformTab) {
//     for (let i = 0; allATag.length > i; i++) {
//       allATag[i].classList.remove("tabATagTab");
//       allATag[i].classList.add("tabATag");
//     }
//     e.target.className =
//       "w-full h-full block tagADefault tabAPadding tabATagTab";
//   }
// }}
