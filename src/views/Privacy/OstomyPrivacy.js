import React from "react";
import { WebTerms, } from "./OstomyContent/webTerms";
import "./OstomyContent/ostomyPrivacy.css";
import Table from "./TempTableComponent";
export default function OstomyPrivacy() {
  return (
    <div className="ps-24 ptb-48 ostomyWrap">
      <Table />
      <div className="flex-col gap-40">
        <WebTerms/>
      </div>
    </div>
  );
}
