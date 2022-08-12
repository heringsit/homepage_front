import React, { useContext } from "react";
import { ThemeContext } from "../../../context";

export default function ClinicalTrialServiceTitle() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex-col gap-64 ${theme === "light" ? "tcb" : "tcw"}`}>
      <div>
        <span className="textF28 FontEB">C</span>
        <span className="textF28 FontR ">LINICAL </span>
        <span className="textF28 FontEB">T</span>
        <span className="textF28 FontR">RIAL </span>
        <span className="textF28 FontEB">S</span>
        <span className="textF28 FontR">ERVICE</span>
      </div>
      <p className="m-reset FontL textF18 lineheight160">
        Clinical Trial Management HQ in HERINGS coordinates clinical trials focusing on trial designs, 
        <br/> data management and statistical analysis. CTS includes both Intramural and Extramural clinical trials.     
      </p>
      <div>
        <div className={`vertical_line ${theme === "dark" ? "vertical_line_dark" : "vertical_line_light"}`}/>
      </div>
    </div>
  );
}
