import React, { useContext, useEffect, useRef, useState } from "react";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import HeringsPost from "./Sections/HeringsPost";
import WebSite from "./Sections/WebSite";
import NewsRelease from "./Sections/NewsRelease";
import "./News.css";
import "./Sections/detail/DetailPage";
import { MediaQueryContext, ThemeContext } from "../../context";
import useOnScreen from "../hooks/objectObserver";

export default function News(props, { match }) {
  // const matches = useMediaQuery("(max-width:600px)");
  const { mTablet, sTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);
  // const [open, setOpen] = useState(false);
  // const [modalObj, setModalObj] = useState({});
  const [slideIndex] = useState(0);
  // const handleOpen = (obj) => {
  //   if (JSON.stringify({}) !== obj) {
  //     setModalObj(obj);
  //     setOpen(true);
  //   }
  // };
  // const handleClose = () => {
  //   // setTimeout(function () {
  //   //   !open ? setModalObj({}) : null;
  //   // }, 2000);
  //   setOpen(false);
  // };
  // const classes = useStyles();
  const scrollElem = Array.from(Array(1).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(1).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  // visibleArray[1] = useOnScreen(refs.current[1]);
  // visibleArray[2] = useOnScreen(refs.current[2]);

  // Scroll function
  // update: TabClick function -> NavLink 에서 오는 random 숫자
  // hashId: TabClick function -> NavLink 에서 오는 hashId
  // Tab/Menubar 안에서 NavLink 눌을때 마다 random number가 만들어 집니다.
  // useEffect hook + random number 통해 click 을 track 합니다
  const executeScroll = () => {
    const element = document.getElementById(props.location.hashId);
    const headOffset = mTablet ? 84 : 184;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    executeScroll();
  }, [props.location.update]);

  return (
    <div
      id="news"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "white",
      }}
    >
      <Menubar slideIndex={slideIndex} />
      {/* {!mTablet && <TabClick visibleArray={visibleArray} />} */}
      <div className="news-main-container">
        <div className="news-section1">
          <div className="ir_text_section1">
            <p className="ir_maintext1">News about HERINGS</p>
            <span className="ir_subtext1">
              Find out more about HERINGS
              <br /> There will be more news to come!
            </span>
          </div>
        </div>
        <div className="flex-col justify-between ">
          <div
            className={`news-section2 pb-100 ${
              theme === "dark" && "bg-black"
            } `}
          >
            {/* <ContentsTitle title={"NEWS"} /> */}
            {/* 배너 */}
            <div id="newsrelease" ref={refs.current[0]}>
              <NewsRelease matches={sTablet} />
            </div>
            <div id="heringspost" ref={refs.current[1]}>
              <HeringsPost matches={sTablet} />
            </div>
            <div id="website" ref={refs.current[2]}>
              <WebSite matches={sTablet} />
            </div>
          </div>
          <Totop />
          <Footer />
        </div>
      </div>
    </div>
  );
}
