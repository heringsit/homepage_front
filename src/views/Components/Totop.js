import React, { useState, useEffect } from "react";
import topIcon from "../../assets/images/etc/top.svg";

import "./Totop.css";
export default function Totop() {
  const [scrolled, setScrolled] = useState(false);

  const contentsScrolled = () => {
    setScrolled(parseInt(window.pageYOffset) > parseInt(window.innerHeight));
  };

  useEffect(() => {
    window.addEventListener("scroll", contentsScrolled);
    return () => window.removeEventListener("scroll", contentsScrolled);
  }, [scrolled]);
  return (
    <div
      className={`bottom-totop`}
      style={{ display: scrolled ? "block" : "none" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="bottom-totop-div">
        <img src={topIcon} alt="top" />
      </div>
    </div>
  );
}
