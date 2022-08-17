import React from "react";
import { WebTerms } from "./OstomyContent/webTerms";
import "./OstomyContent/ostomyPrivacy.css";
import Table from "./TempTableComponent";
export default function OstomyPrivacy() {
  const testTitle = ["구분", "항목", "기간"];
  const testVariables = [
    [
      "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 \n - 대출 받기: 대출 받기 서비스 제공 \n - 아파트 대출 한도 계산기: 주택담보대출 한도를 계산하여 정보 제공",
      "5. 대출 \n\t - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 ",
      "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공",
    ],
    [
      "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 \n - 대출 받기: 대출 받기 서비스 제공 \n - 아파트 대출 한도 계산기: 주택담보대출 한도를 계산하여 정보 제공",
      "5. 대출 \n\t - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 ",
      "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공",
    ],
  ];
  return (
    <div className="ps-24 ptb-48 ostomyWrap">
      <Table titles={testTitle} rows={testVariables} />
      <div className="flex-col gap-40">
        <WebTerms />
      </div>
    </div>
  );
}
