import React, { useEffect, useState, useContext } from "react";
import { WebTerms, } from "./OstomyContent/webTerms";
import "./OstomyContent/ostomyPrivacy.css";
import Table from "./Compoments/PrivacyTable";
import UserPrivacy from "./OstomyContent/UserPrivacy.txt";
import { ThemeContext } from "../../context";
import Loading from "./Loading";

const newLine = new RegExp("\H");
export default function OstomyPrivacy() {
  const [buttonId, setButtonID] = useState(0);
  const patharray = window.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  const [policies, setPolicies] = useState([]);
  const [isFetchFinished, setisFetchFinished] = useState(false);

  const { theme } = useContext(ThemeContext);

  function onClick(id, e) {
    setButtonID(id);
  }

  useEffect(() => {
    fetch(UserPrivacy, {
      method: "GET",
    }).then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      })
    
  }, [submenu])
{/* {policies.map((policy, idx) => (
                <p
                  key={idx}
                  className="m-reset FontNR lineheight160 policyContents"
                >
                  {console.log(newLine.test(policy))}
                </p>
              ))} */}
  if (!isFetchFinished) return <Loading />
  return (
    <div className="ps-24 ptb-48 ostomyWrap">
      
      <div className="flex-col gap-24">
        <WebTerms/>
      </div>
    </div>
  );
}
