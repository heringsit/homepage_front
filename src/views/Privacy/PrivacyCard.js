import React from "react";
export default function PrivacyCard({ policies, title }) {
  return (
    <>
      <p className="textF20 FontCB">{title}</p>
      {policies.map((policy, idx) => (
        <p className="textF16 FontL text">{policy}</p>
      ))}
    </>
  );
}
