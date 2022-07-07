import React, { useState } from "react";
import { useLocation } from "react-router";
export default function TabClick({ isScroll }) {
  let pathname = useLocation().pathname;
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

  const allATag = document.querySelectorAll(".tagADefault");

  return (
    <div className="TABS_sticky">
      <div className="sticky_padding"></div>
      <div className="TABS_layout TABS_layout_padding">
        {pathname === "/aboutus/"
          ? aboutustabs.map((tab, index) => (
              <div className="TABS_tab tcg2 FontB textF18" key={index}>
                <a
                  href={`#${tab}`}
                  className="w-full h-full block tabAPadding tagADefault"
                  onClick={(e) => {
                    const transformTab =
                      tab === "whoweare"
                        ? "Who We Are"
                        : tab === "heringsteam"
                        ? "Herings Team"
                        : tab === "researchpartners"
                        ? "Partners & Investors"
                        : "";

                    if (e.target.innerText === transformTab) {
                      for (let i = 0; allATag.length > i; i++) {
                        allATag[i].classList.remove("tabATagTab");
                        allATag[i].classList.add("tabATag");
                      }
                      e.target.className =
                        "w-full h-full block tabAPadding tagADefault tabATagTab";
                    }
                  }}
                >
                  {tab === "whoweare"
                    ? "Who We Are"
                    : tab === "heringsteam"
                    ? "Herings Team"
                    : tab === "researchpartners"
                    ? "Partners & Investors"
                    : ""}
                </a>
              </div>
            ))
          : pathname === "/crs/"
          ? crstabs.map((tab, index) => (
              <div className="TABS_tab tcg2 FontB textF18" key={index}>
                <a
                  href={`#${tab}`}
                  className="w-full h-full block tabAPadding tagADefault"
                  onClick={(e) => {
                    const transformTab =
                      tab === "propreplatform"
                        ? "PRO Platform"
                        : tab === "datamanagement"
                        ? "Data management"
                        : tab === "biostatistics"
                        ? "Bio-Statistics"
                        : tab === "clinicaloperation"
                        ? "Clinical Operation"
                        : "";

                    if (e.target.innerText === transformTab) {
                      for (let i = 0; allATag.length > i; i++) {
                        allATag[i].classList.remove("tabATagTab");
                        allATag[i].classList.add("tabATag");
                      }
                      e.target.className =
                        "w-full h-full block tabAPadding tagADefault tabATagTab";
                    }
                  }}
                >
                  {tab === "propreplatform"
                    ? "PRO Platform"
                    : tab === "datamanagement"
                    ? "Data management"
                    : tab === "biostatistics"
                    ? "Bio-Statistics"
                    : tab === "clinicaloperation"
                    ? "Clinical Operation"
                    : ""}
                </a>
              </div>
            ))
          : researchtabs.map((tab, index) => (
              <div className="TABS_tab tcg2 FontB textF18" key={index}>
                <a
                  href={`#${tab}`}
                  className="w-full h-full block tabAPadding tagADefault"
                  onClick={(e) => {
                    const transformTab =
                      tab === "nutritionincancercare"
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
                        : "";

                    if (e.target.innerText === transformTab) {
                      for (let i = 0; allATag.length > i; i++) {
                        allATag[i].classList.remove("tabATagTab");
                        allATag[i].classList.add("tabATag");
                      }
                      e.target.className =
                        "w-full h-full block tagADefault tabAPadding tabATagTab";
                    }
                  }}
                >
                  {tab === "nutritionincancercare"
                    ? "Nutrition in Cancer Care"
                    : tab === "drugadverseevent"
                    ? "Drug Adverse Event reporting system"
                    : tab === "recurrenceprediction"
                    ? "Recurrence Prediction"
                    : tab === "exercise"
                    ? "Exercise"
                    : tab === "aibasedostomyconditioncheck"
                    ? "AI-based Ostomy Condition Check"
                    : tab === "adherenceofhormonetherapy"
                    ? "Adherence of Hormone Therapy"
                    : ""}
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
