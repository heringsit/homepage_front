// import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
// import { MediaQueryContext } from "../../context";
import blogsvg from "../../assets/images/etc/blog.svg"
import kakaosvg from "../../assets/images/etc/kakao.svg"
import youtubesvg from "../../assets/images/etc/youtube.svg"
import facebooksvg from "../../assets/images/etc/facebook.svg"
import "./Footer.css";
function Footer() {
  // const matches = useMediaQuery("(max-width:480px)");
  // const { mobile } = useContext(MediaQueryContext);
  return (
    <footer className="footer">
      <div className="flex justify-between">
        <div>
          <div className="footerRowa  ">
            <NavLink className="FontL textF12" to="/privacypolicy/healiary/0">
              Privacy Policy
            </NavLink>
            <span className="slash FontL textF12">/</span>
            <NavLink className="FontL textF12" to="/privacypolicy/healiary/1">
              Terms And Conditions
            </NavLink>
            {/* <span className="slash FontL textF12">/</span> */}
            {/* <NavLink
              className="FontL textF12"
              to={{
                pathname: `/contactus/`,
                hashId: "contact",
                update: Math.random(),
              }}
            >
              Contact us
            </NavLink> */}
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
        </div>
        <div
        style={{
          display:"flex",
          columnGap:"24px"
        }}
        >
          <a 
          target="_blank"
          href="https://blog.naver.com/prologue/PrologueList.naver?blogId=herings3546&categoryNo=1">
            <img src={blogsvg} alt="blog" className="footersvg"/>
          </a>
          <a 
          target="_blank"
          href="https://pf.kakao.com/_xlPYExj">
           <img src={kakaosvg} alt="kakao"className="footersvg"/>
          </a>
          <a 
          target="_blank"
          href="https://www.facebook.com/heringsglobal">
            <img src={youtubesvg} alt="youtube"className="footersvg"/>
          </a>
          <a 
          target="_blank"
          href="https://www.youtube.com/channel/UC1LLVoPjPLmu3kjLqJCB_ZA">
           <img src={facebooksvg} alt="facebook"className="footersvg"/>
          </a>
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
