import React from "react";
export default function CommonCardTitle({ title }) {
  return (
    <div className="card_titleDiv">
      <span className="textF53 FontB">{title}</span>
      <span className="card_middlebar" />
    </div>
  );
}
