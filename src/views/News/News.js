import React, { useContext, useEffect, useRef, useState } from "react";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import IntellectualProperty from "../News/Sections/IntellectualProperty";
import IRInformation from "../News/Sections/IRInformation";
import NewsRelease from "./Sections/NewsRelease";
import "./News.css";
import ContentsTitle from "../Components/ContentsTitle";
import "./Sections/detail/DetailPage";
import { MediaQueryContext, ThemeContext } from "../../context";
import TabClick from "../common/TabClick";
import useOnScreen from "../hooks/objectObserver";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//     header: {
//       height: "100%",
//     },
//     ieAlignCenter: {
//       display: "flex",
//     },
//     longheigntContent: {
//       height: "100%",
//       overflow: "visible",
//     },
//     section2Height: {
//       //minHeight: 680
//     },
//     modal: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     paper: {
//       width: "65%",
//       maxHeight: "85vh",
//       overflow: "auto",
//       boxShadow: "0 0 100px 20px rgba(0, 0, 0, 0.7)",
//       backgroundColor: "#FFF",
//       [theme.breakpoints.down("xs")]: {
//         width: "80%",
//         // minHeight: 400,
//         // maxHeight: 500,
//       },
//     },
//     modalContent: {
//       height: "auto",
//       maxHeight: 750,
//       padding: 40,
//       textAlign: "center",
//       [theme.breakpoints.down("xs")]: {
//         paddingTop: 25,
//         paddingBottom: 25,
//         paddingLeft: 10,
//         paddingRight: 10,
//       },
//     },
//     modalCloseWrap: {
//       position: "relative",
//     },
//     modalCloseDiv: {
//       position: "absolute",
//       top: "-40px",
//       right: "-40px",
//       display: "flex",
//       width: "100%",
//       justifyContent: "flex-end",
//       outline: "none",
//       [theme.breakpoints.down("xs")]: {
//         top: "-25px",
//         right: "-10px",
//       },
//     },
//     modalClose: {
//       maxWidth: 70,
//       padding: 20,
//       cursor: "pointer",
//       outline: "none",
//       [theme.breakpoints.down("xs")]: {
//         maxWidth: 50,
//         padding: 12.5,
//       },
//     },
//     modalimgaeWrap: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     modalimage: {
//       width: "35%",
//       maxWidth: "35%",
//       height: "auto",
//     },
//     modalTitle: {
//       marginTop: 20,
//       marginBottom: 20,
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       flexWrap: "wrap",
//       color: "#4a4a4a",
//     },
//     modalContentText: {
//       borderTop: "1px solid #ddd",
//       textAlign: "left",
//       whiteSpace: "pre-wrap",
//       color: "#4a4a4a",
//       padding: "25px",
//       lineHeight: "160%",
//       [theme.breakpoints.down("xs")]: {
//         paddingTop: "25px",
//         paddingBottom: "25px",
//         paddingLeft: "10px",
//         paddingRight: "10px",
//       },
//     },
//   })
// );

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
  const scrollElem = Array.from(Array(3).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(3).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);
  visibleArray[2] = useOnScreen(refs.current[2]);

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
      {!mTablet && <TabClick visibleArray={visibleArray} />}

      <div className="flex-col justify-between ">
        <div className={`pb-200 ${theme === "dark" && "bg-black"} `}>
          <ContentsTitle title={"NEWS & IR & IP"} />
          {/* 배너 */}
          <div id="newsrelease" ref={refs.current[0]}>
            <NewsRelease matches={sTablet} />
          </div>
          <div id="irinformation" ref={refs.current[1]}>
            <IRInformation matches={sTablet} />
          </div>
          <div id="intellectualproperty" ref={refs.current[2]}>
            <IntellectualProperty matches={sTablet} />
          </div>
        </div>
        <Totop />
        <Footer />
      </div>
    </div>
  );
}
