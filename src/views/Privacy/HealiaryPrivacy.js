import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import "./PrivacyPolicy.css";
import HealiaryPrivacyPolicy from "../../assets/text/HealiaryPrivacyPolicy.txt";
//Terms Of Service
import HealiaryTOS from "../../assets/text/HealiaryTOS.txt";
import PrivacyButtons from "./Compoments/PrivacyButtons";
// import { ThemeContext } from "../../context";

import Loading from "./Loading";
import PrivacyTable from "./Compoments/PrivacyTable";
import {
  healiaryPrivacyRows,
  healiaryPrivacyTitles,
} from "./Compoments/HealiaryTableList";

export default function HealiaryPrivacy() {
  const [buttonId, setButtonID] = useState(0);
  const history = useHistory();
  const patharray = history.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  const [policies, setPolicies] = useState([]);
  const [isFetchFinished, setisFetchFinished] = useState(false);
  // const { theme } = useContext(ThemeContext);

  function onClick(id, e) {
    window.scrollTo(0, 0);
    setButtonID(id);
  }

  // Wait until the data is completely fetched.
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
  }, [submenu, buttonId]);

  if (!isFetchFinished) return <Loading />;
  else {
    return (
      <>
        {/* 개인 정보 처리 방침, 이용 약관 버튼 바꿈 */}
        <div className="w-full h-full policyWrap">
          <PrivacyButtons
            texts={["개인 정보 처리 방침 >", "이용 약관 >"]}
            onClick={onClick}
            pathname="healiary"
          />
          <div>
            {submenu === "1" ? (
              <>
                <p className="textF16 FontCB policyTitle">
                  힐리어리 이용 약관
                </p>
                {policies.map((policy, idx) => (
                  <React.Fragment key={idx}>
                    {policy.includes("(B)") ? (
                      <p className="m-reset FontNR lineheight160 policyContents">
                        {policy.split("(B)")[1]}
                      </p>
                    ) : (
                      // <div></div>
                      <p className="m-reset FontNL lineheight160 policyContents">
                        {policy}
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <p className="textF16 FontCB policyTitle">
                  힐리어리 개인정보 처리 방침
                </p>
                {policies.map((policy, idx) => (
                  <React.Fragment key={idx}>
                    {policy.includes("(B)") ? (
                      <p className="m-reset FontNR lineheight160 policyContents">
                        {policy.split("(B)")[1]}
                      </p>
                    ) : policy.includes("T") ? (
                      <>
                        <PrivacyTable
                          titles={
                            healiaryPrivacyTitles[
                              parseInt(policy.split("-")[1])
                            ]
                          }
                          rows={
                            healiaryPrivacyRows[parseInt(policy.split("-")[1])]
                          }
                        />
                        <br />
                      </>
                    ) : (
                      // <div></div>
                      <p className="m-reset FontNL lineheight160 policyContents">
                        {policy}
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
