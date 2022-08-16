// Privacy & Term Buttons
import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyButtons({ texts, onClick }) {
  const patharray = window.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];

  return (
    <div className="privacybuttons m-reset">
      {texts.map((button, idx) => (
        <Link
          className="no-decoration"
          onClick={(e) => onClick(idx, e)}
          to={`${idx}`}
          key={idx}
        >
          {submenu === idx.toString() ? (
            <div className="bg-button-selected policyButton FontR textF14 tcb">
              {button}
            </div>
          ) : (
            <div className="bg-button policyButton FontR textF14 tcb">
              {button}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
