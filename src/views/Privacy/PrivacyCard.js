import React from "react";
export default function PrivacyCard({ policies, title }) {
  return (
    <>
      <p className="textF20 FontNCB m-reset">{title}</p>
      {policies.map((policy, idx) => (
        <p key={idx} className="textF16 FontNL text m-reset">{policy}</p>
      ))}
    </>
  );
}
