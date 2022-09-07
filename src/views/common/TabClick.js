import { HashLink } from "react-router-hash-link";
import React, { useContext } from "react";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom"
import "../Components/Menubar.css";
import { ThemeContext, MediaQueryContext } from "../../context";
import { NavLink } from "react-router-dom";

export default function TabClick({ visibleArray }) {
  let pathname = useLocation().pathname;
  const { theme } = useContext(ThemeContext);
  const { mTablet } = useContext(MediaQueryContext);

  // ex: [true, false, false] -> [whoweare:Visible, teamList:not-Visible, pai:not-Visible]
  // const visibleCount = visibleArray?.filter(value => value===true).length; // check how many elements are visible in DOM
  const visibleIndex =
    visibleArray?.indexOf(true) === -1 ? 0 : visibleArray?.indexOf(true);
  const aboutustabs = ["whoweare", "heringsteam", "researchpartners"];
  const servicetabs = ["digitalcareservice", "telehealthcareservice"];
  const ctstabs = [
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
    "drugadverseevents",
  ];
  const newsir = ["newsrelease", "irinformation"];
  const contactus = ["career", "contact"];
  // const privacypolicies = ["healiary", "ostomy"];
  const scrollWithOffset = (el, yOffset = -(84 + 100)) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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
        {pathname === "/aboutus/" ? (
          aboutustabs.map((tab, index) => (
            <React.Fragment key={index}>
              <div className={"TABS_tab FontR textF16"}>
              <NavLink
                  // smooth
                  to={{
                    pathname:`/aboutus/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -224 : -224)}
                  className={
                    index === visibleIndex
                      ? "w-full h-full tagADefault tabATagTab FontEB"
                      : "w-full h-full tagADefault FontR " +
                        (theme === "dark" ? "tcw" : "tcg3")
                  }
                >
                  {tab === "whoweare"
                    ? "WHO WE ARE"
                    : tab === "heringsteam"
                    ? "HERINGS TEAM"
                    : tab === "researchpartners"
                    ? "PARTNERS & INVESTORS"
                    : ""}
                </NavLink>
              </div>
              {index + 1 === aboutustabs.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : pathname === "/service/" ? (
          servicetabs.map((tab, index) => (
            <React.Fragment key={index}>
              <div className="TABS_tab FontR textF16">
                <NavLink
                  // smooth
                  to={{
                    pathname:`/service/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -224 : -224)}
                  className={
                    index === visibleIndex
                      ? "w-full h-full tagADefault tabATagTab FontEB"
                      : "w-full h-full tagADefault FontR " +
                        (theme === "dark" ? "tcw" : "tcg3")
                  }
                >
                  {tab === "digitalcareservice"
                    ? "DIGITAL HEALTHCARE SERVICE PLATFORM"
                    : tab === "telehealthcareservice"
                    ? "TELE-HEALTHCARE SERVICE PLATFORM"
                    : ""}
                </NavLink>
              </div>
              {index + 1 === servicetabs.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : pathname === "/cts/" ? (
          ctstabs.map((tab, index) => (
            <React.Fragment key={index}>
              <div className="TABS_tab FontR textF16">
              <NavLink
                  // smooth
                  to={{
                    pathname:`/cts/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -224 : -224)}
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
                </NavLink>
              </div>
              {index + 1 === ctstabs.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          )) // research tabs
        ) : pathname === "/research/" ? (
          researchtabs.map((tab, index) => (
            <React.Fragment key={index}>
              <div className="TABS_tab FontR textF16">
                <NavLink
                  // smooth
                  to={{
                    pathname:`/research/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -149 : -184)}
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
                    : ""}
                </NavLink>
              </div>
              {index + 1 === researchtabs.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : pathname === "/news/" ? (
          newsir.map((tab, index) => (
            <React.Fragment key={index}>
              <div className="TABS_tab FontR textF16">
              <NavLink
                  // smooth
                  to={{
                    pathname:`/news/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -224 : -224)}
                  className={
                    index === visibleIndex
                      ? "w-full h-full tagADefault tabATagTab FontEB"
                      : "w-full h-full tagADefault FontR " +
                        (theme === "dark" ? "tcw" : "tcg3")
                  }
                >
                  {tab === "newsrelease"
                    ? "NEWS RELEASE"
                    : tab === "irinformation"
                    ? "IR INFORMATION"
                    : ""}
                </NavLink>
              </div>
              {index + 1 === newsir.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : pathname === "/contactus/" ? (
          contactus.map((tab, index) => (
            <React.Fragment key={index}>
              <div className="TABS_tab FontR textF16">
              <NavLink
                  // smooth
                  to={{
                    pathname:`/contactus/`,
                    hashId: tab,
                    update: Math.random(),
                  }}
                  // scroll={(el) => scrollWithOffset(el, mTablet ? -224 : -224)}
                  className={
                    index === visibleIndex
                      ? "w-full h-full tagADefault tabATagTab FontEB"
                      : "w-full h-full tagADefault FontR " +
                        (theme === "dark" ? "tcw" : "tcg3")
                  }
                >
                  {tab === "career"
                    ? "HERINGS CAREERS"
                    : tab === "contact"
                    ? "CONTACT"
                    : ""}
                </NavLink>
              </div>
              {index + 1 === contactus.length ? null : (
                <div style={{ margin: "auto" }}>
                  <div
                    className="separator"
                    style={{
                      backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : <></>
        // pathname === "/privacypolicy/" ? (
        //   privacypolicies.map((tab, index) => (
        //     <React.Fragment key={index}>
        //       <div className="TABS_tab FontR textF16">
        //         <Link
        //           smooth
        //           to={`${tab}`}
        //           scroll={scrollWithOffset}
        //           className={
        //             index === visibleIndex
        //               ? "w-full h-full tagADefault tabATagTab FontEB"
        //               : "w-full h-full tagADefault FontR " +
        //                 (theme === "dark" ? "tcw" : "tcg3")
        //           }
        //         >
        //           {tab === "healiary"
        //             ? "HEALIARY"
        //             : tab === "ostomy"
        //             ? "OSTOMY"
        //             : ""}
        //         </Link>
        //       </div>
        //       {index + 1 === privacypolicies.length ? null : (
        //         <div style={{ margin: "auto" }}>
        //           <div
        //             className="separator"
        //             style={{
        //               backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
        //             }}
        //           />
        //         </div>
        //       )}
        //     </React.Fragment>
        //   ))
        // ) : (
        //   <></>
        // )
        }
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
