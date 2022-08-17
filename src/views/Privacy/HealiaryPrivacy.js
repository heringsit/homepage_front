import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./PrivacyPolicy.css";
import HealiaryPrivacyPolicy from "../../assets/text/HealiaryPrivacyPolicy.txt";
//Terms Of Service
import HealiaryTOS from "../../assets/text/HealiaryTOS.txt";
import PrivacyButtons from "./Compoments/PrivacyButtons";
import { ThemeContext } from "../../context";

import Loading from "./Loading";

import Table from "./TempTableComponent";

const purposeRows = ["구분", "처리항목", "처리목적"];
const purposeColumns = [
  [
    "회원가입 (개인) 본인인증으로 가입",
    "(필수) 이름, 나이, 성별, 휴대전화번호, 사용자의 분류, 필요한 서비스의 분류",
    "회원 가입의사 확인, 식별∙인증, 회원자격 유지∙관리, 본인확인, 서비스 부정이용 확인 및 방지, 각종 고지∙통지, 고충처리, 서비스 제공 및 상담, 만 14세 이상 확인, 만족도 조사",
  ],
  [
    "나의 질병정보",
    "암의 치료 단계, 암종, 암의 병기, 수술 여부, 수술 종류, 수술 날짜, 항암치료 여부, 항암치료 종류, 항암치료 차수, 투약 항암제, 항암제 투약 경로, 치료 의료기관, 만성질환 이환, 기타 약물 복용, 일주일 간 발생하는 신체증상",
    "건강관리 등 제반 서비스 이용 시 맞춤형 건강관리 서비스 제공",
  ],
  [
    "나의 신체, 식습관 정보",
    "키, 체중, 식사시 문제점, 알레르기 여부, 유당불내증 여부, 섭취 가능한 유제품 여부, 하루 식사 횟수(아침 식사 여부), 하루 간식 횟수, 식사 담당 여부, 건강기능식품 섭취, 흡연, 음주, 식사 섭취 속도, 음식 선호도, 식사, 간식 섭취 기록, 수분섭취, 기분",
    "",
  ],
];

export default function HealiaryPrivacy() {
  const [buttonId, setButtonID] = useState(0);
  const history = useHistory();
  const patharray = history.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  const [policies, setPolicies] = useState([]);
  const [isFetchFinished, setisFetchFinished] = useState(false);
  const { theme } = useContext(ThemeContext);

  function onClick(id, e) {
    setButtonID(id);
  }

  useEffect(() => {
    console.log(submenu);
    submenu === "1"
      ? fetch(HealiaryTOS, {
          method: "GET",
        })
          .then((r) => r.text())
          .then((text) => {
            setPolicies(text.split("\n"));
            setisFetchFinished(true);
          })
      : fetch(HealiaryPrivacyPolicy, {
          method: "GET",
        })
          .then((r) => r.text())
          .then((text) => {
            setPolicies(text.split("\n"));
            setisFetchFinished(true);
          });
  }, [submenu]);
  // async function fetchText (texts) {
  //   const response = await fetch(texts)

  //   console.log(response)
  // .then((r) => r.text())
  // .then((text) => {
  //   // console.log(text.split("\n"));
  //   setPolicies(text.split("\n"));
  // })
  // console.log(response)
  // }
  // useEffect(() => {
  //   submenu === "0"
  //     ? fetchText(HealiaryPrivacyPolicy)
  //         // .then((r) => r.text())
  //         // .then((text) => {
  //         //   // console.log(text.split("\n"));
  //         //   setPolicies(text.split("\n"));
  //         // })
  //     : fetchText(HealiaryTOS)
  //         // .then((r) => r.text())
  //         // .then((text) => {
  //         //   // console.log(text.split("\n"));
  //         //   setPolicies(text.split("\n"));
  //         // });
  // }, [policies]);
  if (!isFetchFinished) return <Loading />;
  return (
    <>
      {/* 개인 정보 처리 방침, 이용 약관 버튼 바꿈 */}
      <div className="w-full h-full policyWrap">
        <PrivacyButtons
          texts={["개인 정보 처리 방침 >", "이용 약관 >"]}
          onClick={onClick}
        />
        <div className="mt-48">
          {submenu === "1" ? (
            <>
              <p className="textF16 FontCB tcb policyTitle">
                힐리어리 이용 약관
              </p>
              {policies.map((policy, idx) => (
                <p
                  key={idx}
                  className="m-reset textF16 FontNR text-align-left lineheight160 policyContents"
                >
                  {policy}
                </p>
              ))}
            </>
          ) : (
            <>
              <p className="textF16 FontCB  policyTitle">
                힐리어리 개인정보 처리 방침
              </p>
              {policies.map((policy, idx) =>
                policy === "^Table^" ? (
                  <Table rows={purposeRows} columns={purposeColumns} />
                ) : (
                  // <div></div>
                  <p
                    key={idx}
                    className="m-reset FontNR lineheight160 policyContents"
                  >
                    {policy}
                  </p>
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
