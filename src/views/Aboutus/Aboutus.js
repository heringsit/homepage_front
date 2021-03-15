import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import iconClose from "../../assets/images/02about_herings_team/window-close.svg";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import Maintop from "./Sections/Maintop";
import Whoweare from "./Sections/whoweare";
// import Certificates from "./Sections/Certificates";
import PAI from "./Sections/PartnersAInvestors";
import TeamList from "./Sections/TeamList";
import QM from "./Sections/QualityManagement";
import "./Aboutus.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    header: {
      height: "100%",
    },
    ieAlignCenter: {
      display: "flex",
    },
    longheigntContent: {
      height: "100%",
      overflow: "visible",
    },
    section2Height: {
      //minHeight: 680
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      display: "flex",
      // flexDirection:'column',
      // alignItems: "center",
      // justifyContent: "center",

      width: "55%",
      // height: "439px",
      maxHeight: "85vh",
      overflow: "auto",
      boxShadow: "0 0 100px 20px rgba(0, 0, 0, 0.7)",
      backgroundColor: "#FFF",
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        // minHeight: 400,
        // maxHeight: 500,
      },
    },
    modalContent: {
      height: "auto",
      maxHeight: 750,
      padding: 40,
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
    modalCloseWrap: {
      position: "relative",
    },
    modalCloseDiv: {
      position: "absolute",
      top: "-40px",
      right: "-40px",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      outline: "none",
      [theme.breakpoints.down("xs")]: {
        top: "-25px",
        right: "-10px",
      },
    },
    modalClose: {
      maxWidth: 70,
      padding: 20,
      cursor: "pointer",
      outline: "none",
      [theme.breakpoints.down("xs")]: {
        maxWidth: 50,
        padding: 12.5,
      },
    },
    modalimgaeWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalimage: {
      width: "35%",
      maxWidth: "35%",
      height: "auto",
    },
    modalTitle: {
      marginTop: 20,
      marginBottom: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      color: "#4a4a4a",
    },
    modalContentText: {
      borderTop: "1px solid #ddd",
      textAlign: "left",
      whiteSpace: "pre-wrap",
      color: "#4a4a4a",
      padding: "25px",
      lineHeight: "160%",
      [theme.breakpoints.down("xs")]: {
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
    },
  })
);

export default function Aboutus({ match }) {
  const matches = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  // const [openNotice, setOpenNotice] = useState(false);
  // const [startingPage, setStartingPage] = useState(true);
  const [modalObj, setModalObj] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);

  // useEffect(() =>{
  //   if(startingPage){
  //     setTimeout(() => {
  //       setOpenNotice(true);
  //     },1000)
  //   }
  // },[])

  // const openInitialNotice = () => {
  //   return (
  //     <Modal
  //       aria-labelledby="transition-modal-title"
  //       aria-describedby="transition-modal-description"
  //       className={classes.modal}
  //       open={openNotice}
  //       onClose={handleNoticeClose}
  //       hideBackdrop={false}
  //       onBackdropClick={()=>{
  //         setOpenNotice(false);
  //       }}
  //       // BackdropComponent={Backdrop}
  //       // BackdropProps={{
  //       //   timeout: 500,
  //       // }}
  //     >

  //       <Fade in={openNotice}>
  //         <div style={{}} className={classes.paper}>
  //           <h2 style={{ }}>헤링스 COVID 광폭 TF 임상</h2>
  //           <p >헤링스와 한미사이언스가 COVID 백신 및 치료제 개발의 광폭TF팀 개발에 JOINT 되었습니다.</p>
  //         </div>
  //       </Fade>
  //     </Modal>
  //   )
  // };

  // const handleNoticeClose = () => {
  //   console.log(" close modal!");
  //   setStartingPage(false);
  // };

  const handleOpen = (obj) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };
  const handleClose = () => {
    // setTimeout(function () {
    //   !open ? setModalObj({}) : null;
    // }, 2000);
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div id="aboutus" style={{ position: "relative" }}>
      <Menubar slideIndex={slideIndex} />
      <Totop />
      {/* {openInitialNotice()} */}
      <div>
        {/* 배너 */}
        <Maintop matches={matches} setSlideIndex={setSlideIndex} />
        <Whoweare matches={matches} />
        <TeamList handleOpen={handleOpen} matches={matches} />
        <PAI matches={matches} />
        <QM matches={matches} />
        {/* <Certificates match={matches} /> */}
        <Footer />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={`modalNoOutline ${classes.modal}`}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {modalObj !== JSON.stringify({}) ? (
              <div className={classes.modalContent}>
                <div className={classes.modalCloseWrap}>
                  <div className={classes.modalCloseDiv} onClick={handleClose}>
                    <img
                      src={iconClose}
                      alt="close"
                      className={classes.modalClose}
                    />
                  </div>
                </div>
                <div className={classes.modalimgaeWrap}>
                  <img
                    src={modalObj.modalimg}
                    alt={modalObj.name}
                    className={classes.modalimage}
                  />
                </div>
                <div className={classes.modalTitle}>
                  <span
                    className="teamModalName textF22 FontB"
                    id="transition-modal-title"
                  >
                    {modalObj.name}
                  </span>
                  <span className="teamModalPosition textF16 FontB">
                    {modalObj.positions}
                  </span>
                </div>
                <div
                  id="transition-modal-description"
                  className={`textF16 FontR ${classes.modalContentText}`}
                >
                  {modalObj.detail}
                </div>
              </div>
            ) : (
              <div> no info</div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
