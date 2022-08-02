import { Box, Tab, Tabs } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";
import { useLocation } from "react-router";
import "../Components/Menubar.css"
export default function TabClick({ visibleArray, isScroll }) {
  let pathname = useLocation().pathname;
  
  // ex: [true, false, false] -> [whoweare:Visible, teamList:not-Visible, pai:not-Visible]
  // const visibleCount = visibleArray?.filter(value => value===true).length; // check how many elements are visible in DOM
  const visibleIndex = visibleArray?.indexOf(true);
  

  const aboutustabs = ["whoweare", "heringsteam", "researchpartners"];
  const crstabs = [
    "propreplatform",
    "datamanagement",
    "biostatistics",
    "clinicaloperation"
  ];
  const researchtabs = [
    "nutritionincancercare",
    "drugadverseevent",
    "recurrenceprediction",
    "exercise",
    "aibasedostomyconditioncheck",
    "adherenceofhormonetherapy"
  ];
  const scrollWithOffset = (el, yOffset = -80) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (

    <div className="TABS_sticky">
      <div className="sticky_padding" />
      <div className="TABS_layout TABS_layout_padding menuBorderBottom">
        {pathname === "/aboutus/"
          ? aboutustabs.map((tab, index) => (
              <div className={"TABS_tab FontR textF16"} key={index}>
                <Link
                  smooth
                  to={`#${tab}`}
                  className={index === visibleIndex 
                              ? "w-full h-full block tagADefault tabATagTab FontEB"
                              : "w-full h-full block tagADefault tcg3"    
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
            ))
          : pathname === "/crs/"
          ? crstabs.map((tab, index) => (
              <div className="TABS_tab FontR textF16" key={index}>
                <Link
                  smooth
                  to={`#${tab}`}
                  scroll={scrollWithOffset}
                  className={index === visibleIndex 
                    ? "w-full h-full block tagADefault tabATagTab FontEB"
                    : "w-full h-full block tagADefault tcg3"    
                }
                >
                  {tab === "propreplatform"
                    ? "PRO · PRE Platform"
                    : tab === "datamanagement"
                    ? "Data management"
                    : tab === "biostatistics"
                    ? "Bio-Statistics"
                    : tab === "clinicaloperation"
                    ? "Clinical Operation"
                    : ""}
                </Link>
              </div>
            ))
          : researchtabs.map((tab, index) => (
              <div className="TABS_tab FontR textF16" key={index}>
                <Link
                  smooth
                  to={`#${tab}`}
                  scroll={scrollWithOffset}
                  className={index === visibleIndex 
                    ? "w-full h-full block tagADefault tabATagTab FontEB"
                    : "w-full h-full block tagADefault tcg3"    
                  }
                >
                  {tab === "nutritionincancercare"
                    ? "Nutrition in Cancer Care"
                    : tab === "drugadverseevent"
                    ? "Drug Adverse Event"
                    : tab === "recurrenceprediction"
                    ? "Recurrence Prediction"
                    : tab === "exercise"
                    ? "Exercise"
                    : tab === "aibasedostomyconditioncheck"
                    ? "AI-based Ostomy Condition Check"
                    : tab === "adherenceofhormonetherapy"
                    ? "Adherence of Hormone Therapy"
                    : ""}
                </Link>
              </div>
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