import React, { useContext } from "react";
import { ThemeContext } from "../../../context";
import "../Aboutus.css";
export default function Whoweare(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme === "dark" && "#282828" }}
      id="whoweare"
    >
      <div className="SectionDiv">
        <div className="titleDiv">
          <div className={`textT22 FontB ${theme === "light" ? "tcb" : "tcw"}`}>
            <span>Who We Are</span>
          </div>
          <hr style={{ border: theme === "dark" && "solid 1px white" }}></hr>
        </div>
        <div className="whoweareContent">
          <div className="whoweareContentTitle">
            <span className={`textF40 ${theme === "light" ? "tcb" : "tcw"}`}>
              A personalized
            </span>
            <span
              className={`textF40 FontB ${theme === "light" ? "tcb" : "tcw"}`}
              style={{ marginRight: "7.5px" }}
            >
              Digital Care
            </span>
            <span
              className={`textF40 FontB ${theme === "light" ? "tcb" : "tcw"}`}
            >
              Service
            </span>
            <span className={`textF40 ${theme === "light" ? "tcb" : "tcw"}`}>
              Company
            </span>
          </div>
          <div className="whoweareContentsWrap" style={{ textAlign: "center" }}>
            <span className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}>
              We aim to be the best companion to cancer patients through their
              long journey
            </span>
            <span className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}>
              to overcome the disease.  
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
