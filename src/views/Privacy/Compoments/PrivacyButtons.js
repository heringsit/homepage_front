// Privacy & Term Buttons
import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyButtons({ texts, onClick }) {
  const patharray = window.location.pathname.split("/");
  const submenu = patharray[patharray.length - 1];
  console.log(submenu);
  return (
    <div className="privacybuttons m-reset">
      {texts.map((button, idx) => (
        <Link
          style={
            submenu === idx.toString()
              ? { backgroundColor: "#cdcdcd" }
              : { backgroundColor: "#ebebeb" }
          }
          className="no-decoration policyButton"
          onClick={(e) => onClick(idx, e)}
          to={`${idx}`}
          key={idx}
        >
          <div className="FontR textF14 color-b">{button}</div>
        </Link>
      ))}
    </div>
  );
}
