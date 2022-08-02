import React from "react";
import { useLocation } from "react-router";
import crs_banner from "../../assets/images/08crs/crs_banner.png";
// import service_banner from "../../assets/images/07service/service_banner.png";
import research_full from "../../assets/images/09research/research_full.png";

import newsir_banner from "../../assets/images/10newsir/newsir_banner.png";
import contactus_banner from "../../assets/images/06contactus/contactus_banner.png";
document.documentElement.setAttribute("data-agent", navigator.userAgent);
export default function ContentsTitle(props) {
  let path = useLocation().pathname;
  return (
    <div>
      {path === "/aboutus/" ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img ">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === `/service/` ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === "/research/" ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img ">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === "/crs/" ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === "/news/" ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === "/contactus/" ? (
        <div className="relative banner_layout">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
