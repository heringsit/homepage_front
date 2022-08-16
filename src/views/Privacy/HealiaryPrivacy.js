import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import HealiaryPrivacyPolicy from "../../assets/text/HealiaryPrivacyPolicy.txt";
//Terms Of Service
import HealiaryTOS from "../../assets/text/HealiaryTOS.txt";
import PrivacyButtons from "./Compoments/PrivacyButtons";

export default function HealiaryPrivacy() {
  const [buttonId, setButtonID] = useState(0);
  const patharray = window.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  const [policies, setPolicies] = useState([]);

  function onClick(id, e) {
    setButtonID(id);
  }

  useEffect(() => {
    submenu === "0"
      ? fetch(HealiaryPrivacyPolicy)
          .then((r) => r.text())
          .then((text) => {
            // console.log(text.split("\n"));
            setPolicies(text.split("\n"));
          })
      : fetch(HealiaryTOS)
          .then((r) => r.text())
          .then((text) => {
            // console.log(text.split("\n"));
            setPolicies(text.split("\n"));
          });
  }, [policies])

  return (
    <>
      {/* 개인 정보 처리 방침, 이용 약관 버튼 바꿈 */}
      <div className="w-full h-full policyWrap">
        <PrivacyButtons
          texts={["개인 정보 처리 방침 >", "이용 약관 >"]}
          onClick={onClick}
        />
        <div className="mt-48">
          {submenu === "0" ? (
            <>
              <p className="textF16 FontCB tcb text-align-center lineheight160 policyTitle">
                힐리어리 개인정보 처리 방침
              </p>
              {policies.map((policy, idx) => (
                <p
                  key={idx}
                  className="m-reset FontNR lineheight160 policyContents"
                >
                  {policy}
                </p>
              ))}
            </>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
