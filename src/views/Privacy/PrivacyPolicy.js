import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import HealiaryPrivacy from "./HealiaryPrivacy";
import OstomyPrivacy from "./OstomyPrivacy";
export default function PrivacyPolicy() {
  const { theme } = useContext(ThemeContext);
  const [slideIndex] = useState(0);
  const [tab, setTab] = useState(0);
  
  // Healiary, Ostomy txt:
  //  (N)   : new line
  //  (B)   : bold text
  //  (T-#) : table location
  //  (T-s) : special table location

  // set tab
  const onClick = (e, tabID) => {
    window.scrollTo(0, 0)
    setTab(tabID)
  }

  // // 모바일 메뉴
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [isScroll]);

  // Scroll Tracker 
  const history = useHistory();
  const patharray = history.location.pathname.split("/")
  const submenu = patharray[patharray.length-2]
  const selected = submenu === "ostomy"
  // console.log(submenu)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div
      id="privacypolicy"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" ? "#fff" : "#282828",
      }}
    >
      <Menubar slideIndex={slideIndex} />
      <div
        className="TABS_sticky"
        style={{ backgroundColor: theme === "dark" && "#282828" }}
      >
        <div className="sticky_padding" />

        <div
          className={
            "TABS_layout TABS_layout_padding " +
            (theme === "dark"
              ? "menuBorderBottomDark"
              : "menuBorderBottomLight")
          }
        >
          <Link className="TABS_tab FontR textF16 no-decoration" onClick={e => onClick(e, 0)} to="/privacypolicy/healiary/0" >
            <div
              // to={`#test`}
              className={
                selected === false //index === visibleIndex
                  ? " w-full h-full tagADefault tabATagTab FontEB"
                  : "w-full h-full tagADefault FontR " +
                    (theme === "dark" ? "tcw" : "tcg3")
              }
            >
              HEALIARY
            </div>
          </Link>
          <div style={{ margin: "auto" }}>
            <div
              className="separator"
              style={{
                backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
              }}
            />
          </div>
          <Link className="TABS_tab FontR textF16 no-decoration" onClick={e => onClick(e, 1)} to="/privacypolicy/ostomy/0">
            <div
              className={
                selected === true //index === visibleIndex
                  ? "w-full h-full tagADefault tabATagTab FontEB"
                  : "w-full h-full tagADefault FontR " +
                    (theme === "dark" ? "tcw" : "tcg3")
              }
            >
              OSTOMY
            </div>
          </Link>
        </div>
      </div>
      {selected === false
        ? <HealiaryPrivacy />
        : <OstomyPrivacy />
      }
      <Totop />
      <Footer />
    </div>
  );
}