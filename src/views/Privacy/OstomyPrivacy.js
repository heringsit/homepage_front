import React, { useEffect, useState, useContext } from "react";
// import { WebTerms } from "./OstomyContent/webTerms";
import "./OstomyContent/ostomyPrivacy.css";
import Table from "./Compoments/PrivacyTable";
import UserPrivacy from "../../assets/text/OstomyUserPrivacy.txt";
import AppTerms from "../../assets/text/OstomyAppTerms.txt";
import WebTerms from "../../assets/text/OstomyWebTerms.txt";

import { ThemeContext } from "../../context";
import Loading from "./Loading";
import PrivacyButtons from "./Compoments/PrivacyButtons";

const newLine = new RegExp("H");
export default function OstomyPrivacy() {
  const [buttonId, setButtonID] = useState(0);
  const patharray = window.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  const [policies, setPolicies] = useState([]);
  const [isFetchFinished, setisFetchFinished] = useState(false);

  const { theme } = useContext(ThemeContext);
  const linePrinter = (policies) => {
    return (
      <>
        {policies.map((policy, idx) =>
          policy.includes("(B)") ? (
            <p
              key={idx}
              className="m-reset FontNR lineheight160 policyContents"
            >
              {policy.split("(B)")[1]}
            </p>
          ) : policy.includes("T") ? (
            <React.Fragment key={idx}>
              <Table />
            </React.Fragment>
          ) : policy.includes("(N)") ? (
            <>
              <div></div>
              <p
                key={idx}
                className="m-reset FontNL lineheight160 policyContents"
              >
                <br/>
              </p>
            </>
          ) : <>
          <div></div>
          <p
            key={idx}
            className="m-reset FontNL lineheight160 policyContents"
          >
            {policy}
          </p>
        </>
        )}
      </>
    );
  };
  function onClick(id, e) {
    window.scrollTo(0, 0);
    setButtonID(id);
  }

  useEffect(() => {
    {submenu === "0" 
    ? fetch(UserPrivacy, {
        method: "GET",
      })
        .then((r) => r.text())
        .then((text) => {
          setPolicies(text.split("\n"));
          setisFetchFinished(true);
        })
    : submenu === "1" 
    ? fetch(AppTerms, {
      method: "GET",
    })
      .then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      })
    : fetch(WebTerms, {
      method: "GET",
    })
      .then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      })
    }
  }, [submenu]);

  if (!isFetchFinished) return <Loading />;
  return (
    <div className="policyWrap">
      <PrivacyButtons
        texts={[
          "개인정보처리방침 >",
          "이용약관1 >",//(앱: 일반 회원)
          "이용약관2 >",//(웹: 병원 회원)
        ]}
        onClick={onClick}
        pathname="ostomy"
      />
      {submenu === "0" ? (
        <>
          <p className="textF16 FontCB policyTitle">
            장루관리 개인정보 처리방침_일반회원(앱), 병원회원(웹) 공용
          </p>
          {linePrinter(policies)}
        </>
      ) : submenu === "1" ? (
        <>
          <p className="textF16 FontCB policyTitle">
            장루관리 이용약관_일반회원(앱)
          </p>
          {linePrinter(policies)}
        </>
      ) : (
        <>
          <p className="textF16 FontCB policyTitle">
            장루관리 이용약관_병원회원(웹)
          </p>
          {linePrinter(policies)}
        </>
      )}
    </div>
  );
}
