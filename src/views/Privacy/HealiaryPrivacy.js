import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import HealiaryPrivacyPolicy from "../../assets/text/HealiaryPrivacyPolicy.txt";
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
    fetch(HealiaryPrivacyPolicy)
      .then((r) => r.text())
      .then((text) => {
        // console.log(text.split("\n"));
        setPolicies(text.split("\n"));
      });
  }, [""]);

  return (
    <>
      {/* 개인 정보 처리 방침, 이용 약관 버튼 바꿈 */}
      <div className="w-full h-full policyWrap">
        <PrivacyButtons
          texts={["개인 정보 처리 방침 >", "이용 약관 >"]}
          onClick={onClick}
        />
        <div className="policycontent">
          {submenu === "0" ? (
            policies.map((policy, idx) => (
              <p key={idx} className="m-reset">
                {policy}
              </p>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
