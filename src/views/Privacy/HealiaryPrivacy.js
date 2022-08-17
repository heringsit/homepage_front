import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./PrivacyPolicy.css";
import HealiaryPrivacyPolicy from "../../assets/text/HealiaryPrivacyPolicy.txt";
//Terms Of Service
import HealiaryTOS from "../../assets/text/HealiaryTOS.txt";
import PrivacyButtons from "./Compoments/PrivacyButtons";
import { ThemeContext } from "../../context";
import Loading from "./Loading";

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
    submenu === "0"
    ? fetch(HealiaryPrivacyPolicy, {
      method: "GET",
    }).then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      })
    : fetch(HealiaryTOS, {
      method: "GET",
    }).then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      })
  }, [submenu])
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
  if (!isFetchFinished) return <Loading />
  return (
    <>
      {/* 개인 정보 처리 방침, 이용 약관 버튼 바꿈 */}
      <div className="w-full h-full policyWrap">
        <PrivacyButtons
          texts={["개인 정보 처리 방침 >", "이용 약관 >"]}
          onClick={onClick}
          pathname="healiary"
        />
        <div className="mt-48">
          {submenu === "0" ? (
            <>
              <p
                className={`textF16 FontCB  policyTitle ${
                  theme === "dark" ? "tcw" : "tcb"
                }`}
              >
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
              <p className={`textF16 FontCB tcb policyTitle ${
                  theme === "dark" ? "tcw" : "tcb"
                }`}>
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
