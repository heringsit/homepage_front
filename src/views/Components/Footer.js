import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const matches = useMediaQuery("(max-width:480px)");

  return (
    <footer className="footer textF12 FontL">
      <div className="footerRowa">
        <NavLink to="/#NULL">Privacy Policy</NavLink>
        <span className="slash">/</span>
        <NavLink to="/aboutus/#heringsteam">Terms And Conditions</NavLink>
        <span className="slash">/</span>
        <NavLink to="/contactus">Contact us</NavLink>
      </div>
      <div className="footerRow">
        <div className="footerContent">
          <span className="tco">ADD.</span>
          14F, 560, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
        </div>
        <div className="footerContent">
          <span className="tco">TEL.</span>
          +82.02.6949.3516
        </div>
        <div className="footerContent">
          <span className="tco">FAX.</span>
          +82.02.6949.3517
        </div>
        <div className="footerContent">
          <span className="tco">R.</span>
          Corporate registration number 516-87-00127
        </div>
      </div>
      <div className="footerRow">
        <div className="footerContent">
          Copyright © {new Date().getFullYear()} HERINGS. All rights reserved.
        </div>
      </div>
      {matches && (
        <div
          style={{
            height: "110px"
          }}
        ></div>
      )}
    </footer>
  );
}

export default Footer;
