import React, { useEffect, useState, useContext } from "react";
import { WebTerms } from "./OstomyContent/webTerms";
import "./OstomyContent/ostomyPrivacy.css";
import Table from "./Compoments/PrivacyTable";
import UserPrivacy from "../../assets/text/UserPrivacy.txt";
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

  function onClick(id, e) {
    setButtonID(id);
  }

  useEffect(() => {
    fetch(UserPrivacy, {
      method: "GET",
    })
      .then((r) => r.text())
      .then((text) => {
        setPolicies(text.split("\n"));
        setisFetchFinished(true);
      });
  }, [submenu]);
  
  if (!isFetchFinished) return <Loading />;
  return (
    <div className="policyWrap">
      <PrivacyButtons 
        texts={["개인정보보호 방침 >", "이용약관 (앱: 일반 회원) >", "이용약관 (웹: 병원 회원) >"]}
        onClick={onClick}
        pathname="ostomy"
      />
      <div className="flex-col gap-24">
        <WebTerms />
      </div>
    </div>
  );
}
