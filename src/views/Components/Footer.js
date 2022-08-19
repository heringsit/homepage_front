// import { useMediaQuery } from "@material-ui/core";
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MediaQueryContext } from "../../context";
import "./Footer.css";
function Footer() {
  // const matches = useMediaQuery("(max-width:480px)");
  const { mTablet } = useContext(MediaQueryContext);
  const scrollWithOffset = (el, yOffset = mTablet ? -42 : -184) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footerRowa  ">
        <NavLink className="FontL textF12" to="/privacypolicy/healiary/0">
          Privacy Policy
        </NavLink>
        <span className="slash FontL textF12">/</span>
        <NavLink className="FontL textF12" to="/privacypolicy/healiary/1">
          Terms And Conditions
        </NavLink>
        <span className="slash FontL textF12">/</span> 
        <HashLink 
          className="FontL textF12" 
          to="/contactus/#contact"
          smooth
          scroll={scrollWithOffset}>
          Contact us
        </HashLink>
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
