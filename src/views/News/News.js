import React, { useState } from "react";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import IRInformation from "../News/Sections/IRInformation";
import NewsRelease from "./Sections/NewsRelease";
import "./News.css";
import ContentsTitle from "../Components/ContentsTitle";
import "./Sections/detail/DetailPage";

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

export default function News({ match }) {
  const matches = useMediaQuery("(max-width:600px)");
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
  return (
    <div id="content" style={{ position: "relative" }}>
      <Menubar slideIndex={slideIndex} />
      <Totop />
      <div id="news">
        <ContentsTitle matches={matches} title={"News & IR"} />
        {/* 배너 */}
        <NewsRelease matches={matches} />
        <IRInformation matches={matches} />
        <Footer />
      </div>
    </div>
  );
}
