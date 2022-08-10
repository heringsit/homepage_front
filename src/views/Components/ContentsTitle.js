import React, { useContext } from "react";
import { useLocation } from "react-router";
import { ThemeContext, MediaQueryContext } from "../../context";
import "./ContentsTitle.css";
document.documentElement.setAttribute("data-agent", navigator.userAgent);
export default function ContentsTitle(props) {
  let path = useLocation().pathname;
  const { theme } = useContext(ThemeContext);
  const { mDesktop, mTablet } = useContext(MediaQueryContext);
  console.log(props)

  return (
    <>
      {path === "/aboutus/" ? (
        <div className="position-relative banner_container">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img ">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === `/service/` ? (
        <>
          <div style={{height: mDesktop ? "67px" : "95px"}}/>
          <div className="position-relative banner_container " >
            {theme === "dark" ? <div className="banner_gradient"></div> : null}
            <div className="banner_default banner_img banner">
              <div className="textF53 FontR title_center">{props.title}</div>
            </div>
          </div>
        </>
          
      ) : path === "/research/" ? (
        
        <div className={`position-relative banner_container ${mTablet && "banner_margin"}`}>
          {theme === "dark" ? <div className="banner_gradient"></div> : null}
          <div className="banner_default banner_img ">
            <div className="textF53 FontR title_center">{props.title}</div>
          </div>
        </div>
      ) : path === "/crs/" ? (
        <div className={`position-relative banner_container ${mTablet && "banner_margin"}`}>
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR title_center">{props.title}</div>
          </div>
        </div>
      ) : path === "/news/" ? (
        <div className="position-relative banner_container">
          {theme === "dark" ? <div className="banner_gradient"></div> : null}
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : path === "/contactus/" ? (
        <div className="position-relative banner_container">
          <div className="banner_gradient"></div>
          <div className="banner_default banner_img">
            <div className="textF53 FontR tcb title_default">{props.title}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
