// import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
// import { MediaQueryContext } from "../../context";
import "./Footer.css";
function Footer() {
  // const matches = useMediaQuery("(max-width:480px)");
  // const { mobile } = useContext(MediaQueryContext);
  return (
    <footer className="footer">
      <div className="footerRowa  ">
        <NavLink className="FontL textF12" to="/privacypolicy">
          Privacy Policy
        </NavLink>
        <span className="slash FontL textF12">/</span>
        <NavLink className="FontL textF12" to="/privacypolicy">
          Terms And Conditions
        </NavLink>
        <span className="slash FontL textF12">/</span> 
        <NavLink className="FontL textF12" to="/contactus/">
          Contact us
        </NavLink>
      </div>
      <div className="footerRow">
        <div className="footerContent FontL textF12">
          <span className="tco FontL textF12">ADD.</span>
          14F, 560, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
        </div>
        <div className="footerContent FontL textF12">
          <span className="tco FontL textF12">TEL.</span>
          +82.02.6949.3516
        </div>
        <div className="footerContent FontL textF12">
          <span className="tco FontL textF12">FAX.</span>
          +82.02.6949.3517
        </div>
        <div className="footerContent FontL textF12">
          <span className="tco FontL textF12">R.</span>
          Corporate registration number 516-87-00127
        </div>
      </div>
      <div className="footerRow FontL textF12">
        <div className="footerContent FontL textF12">
          Copyright © {new Date().getFullYear()} HERINGS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
