// Privacy & Term Buttons
import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyButtons({
  texts,
  onClick,
  pathname = "healiary",
}) {
  const patharray = window.location.pathname.split("/");
  const hashpath = patharray[patharray.length - 1];
  const submenu = hashpath === "0" || hashpath === "1" ? hashpath : "0";
  console.log(typeof hashpath);
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
          to={`/privacypolicy/healiary/${idx}`}
          key={idx}
        >
          <div className="FontR textF14 color-b">{button}</div>
        </Link>
      ))}
    </div>
  );
}
