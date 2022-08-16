import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useParams, Link } from "react-router-dom";
import { MediaQueryContext, ThemeContext } from "../../context";
import TabClick from "../common/TabClick";
import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import useOnScreen from "../hooks/objectObserver";
import HealiaryPrivacy from "./HealiaryPrivacy";
import OstomyPrivacy from "./OstomyPrivacy";
export default function PrivacyPolicy() {
  const { mTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);

  // const [isScroll, setIsScroll] = useState(false);
  const [slideIndex] = useState(0);
  const [tab, setTab] = useState(0);
  // const onScroll = () => {
  //   if (window.scrollY > 238 || window.pageYOffset > 238) {
  //     setIsScroll(true);
  //   } else {
  //     setIsScroll(false);
  //   }
  // };

  // set tab
  const onClick = (e, tabID) => {
    setTab(tabID)
  }

  // // 모바일 메뉴
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [isScroll]);

  // Scroll Tracker
  // const scrollElem = Array.from(Array(2).keys());
  // const refs = useRef(scrollElem.map(() => React.createRef()));
  // const visibleArray = Array(2).fill(true);
  // visibleArray[0] = useOnScreen(refs.current[0]);
  // visibleArray[1] = useOnScreen(refs.current[1]);
  const patharray = window.location.pathname.split("/")
  const submenu = patharray[patharray.length-1]
  const selected = submenu === "ostomy"
  console.log(selected);
  return (
    <div
      id="privacypolicy"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "#fff",
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
          <Link className="TABS_tab FontR textF16 no-decoration" onClick={e => onClick(e, 0)} to="healiary" >
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
          <Link className="TABS_tab FontR textF16 no-decoration" onClick={e => onClick(e, 1)} to="ostomy">
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