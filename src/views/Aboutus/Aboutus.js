import React, { useState, useEffect, useContext } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import iconClose from "../../assets/images/02about_herings_team/window-close.svg";
import axios from "axios";
import parse from "html-react-parser";
import { ReactComponent as IconClose } from "../../assets/images/05career/close.svg";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";
import Whoweare from "./Sections/whoweare";
import PAI from "./Sections/PartnersAInvestors";
import TeamList from "./Sections/TeamList";
import "./Aboutus.css";
import { imsi } from "../../index";
import search from "../../assets/images/etc/search.png";
import { Checkbox } from "@material-ui/core";
import moment from "moment";
import TabClick from "../common/TabClick";
import ContentsTitle from "../Components/ContentsTitle";
import { ThemeContext } from "../../context";

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
  const HAS_VISITED_BEFORE = localStorage.getItem("hasVisitedBefore");
  const matches = useMediaQuery("(max-width:600px)");
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [modalObj, setModalObj] = useState({});
  const [modalPopObj, setmodalPopObj] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  const [watchToday, setWatchToday] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  console.log("about us mode", theme);

  const onScroll = () => {
    if (window.scrollY > 238 || window.pageYOffset > 238) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  // 모바일 메뉴
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);
  const getdata = (tab) => {
    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "Popup",
          page: 1,
        },
      })
      .then((response) => {
        if (response.data?.board_data.length !== 0) {
          setmodalPopObj(response.data?.board_data[0]);
          let toDates = moment(new Date()).format("YYYY-MM-DD");
          if (response.data.board_data[0].closing_date >= toDates) {
            return setOpenNotice(true);
          }
          return setOpenNotice(false);
        } else {
          setmodalPopObj(undefined);
          return setOpenNotice(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleShowModal = () => {
    if (!HAS_VISITED_BEFORE) {
      setOpenNotice(true);
      let expires = new Date();
      expires = expires.setHours(expires.getHours() + 24);
      localStorage.setItem("hasVisitedBefore", expires);
    }
  };

  const handleNoticeClose = () => {
    if (watchToday) {
      handleShowModal();
    }
    setOpenNotice(false);
  };

  useEffect(() => {
    if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
      return;
    } else {
      getdata();
    }
  }, [HAS_VISITED_BEFORE]);

  const onCheckChange = () => {
    if (watchToday) {
      return setWatchToday(false);
    }
    return setWatchToday(true);
  };
  const openInitialNotice = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openNotice}
        onClose={handleNoticeClose}
        hideBackdrop={false}
        onBackdropClick={() => {
          setOpenNotice(false);
        }}
      >
        <Fade in={openNotice}>
          <div className={classes.paper}>
            {modalPopObj !== undefined && (
              <div style={{ width: "100%" }}>
                <div className="careerModalTitle">
                  <div className="careerModalTitleSection">
                    <span className="FontNB textF26" style={{ marginLeft: 45 }}>
                      {modalPopObj.title}
                    </span>
                  </div>
                  <IconClose
                    onClick={handleNoticeClose}
                    className="careerModalIconSection"
                  />
                </div>

                <div className="careerModalContent" style={{ paddingTop: 10 }}>
                  <div
                    className="readContentsRow"
                    style={{
                      overflowY: "auto",
                      overflowX: "hidden",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <div
                      className="tbContents tcb FontNR textF16 "
                      style={{ borderBottom: "solid 0.5px #bebebe" }}
                    >
                      {modalPopObj.recruitment}
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {(() => {
                          if (
                            modalPopObj.content !== undefined &&
                            modalPopObj.content !== ""
                          ) {
                            return parse(modalPopObj.content);
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                  {modalPopObj?.link && (
                    <div
                      className="tcb FontNR textF17"
                      style={{
                        textAlign: "center",
                        paddingTop: 4,
                      }}
                    >
                      <div style={{ paddingBottom: 8 }}>
                        <button
                          style={{
                            cursor: "pointer",
                            padding: 10,
                            background: "none",
                            border: "none",
                            fontSize: 17,
                          }}
                          onClick={() =>
                            window.open(`${modalPopObj.link}`, "_self")
                          }
                        >
                          <img
                            alt="img"
                            src={search}
                            style={{ marginRight: 9, marginBottom: -4 }}
                          />
                          자세히 보기
                        </button>
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          paddingTop: 20,
                          borderTop: "solid 0.5px #bebebe",
                        }}
                      >
                        <Checkbox
                          style={{
                            cursor: "pointer",
                            padding: 5,
                            background: "none",
                            border: "none",
                            fontSize: 17,
                          }}
                          onChange={onCheckChange}
                        ></Checkbox>
                        오늘 하루 보지않기
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    );
  };

  const handleOpen = (obj) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openerModalNoti = () => {
    if (modalObj) {
      return openInitialNotice();
    }
    return null;
  };
  const classes = useStyles();
  return (
    <div
      id="aboutus"
      style={{
        position: "relative",
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "#fff",
      }}
    >
      <Menubar slideIndex={slideIndex} />
      <Totop />
      {openerModalNoti()}
      {/* { modalObj !== null ? openInitialNotice() : null} */}
      <div>
        {/* <ContentsTitle title={"ABOUT US"} /> */}
        <div id="whoweare"></div>
        <TabClick isScroll={isScroll} />
        <Whoweare matches={matches} />

        <TeamList handleOpen={handleOpen} matches={matches} />
        <PAI matches={matches} />
        {/* <QM matches={matches} /> */}
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
                    src={modalObj?.modalimg}
                    alt={modalObj?.name}
                    className={classes.modalimage}
                  />
                </div>
                <div className={classes.modalTitle}>
                  <span
                    className="teamModalName textF22 FontB"
                    id="transition-modal-title"
                  >
                    {modalObj?.name}
                  </span>
                  <span className="teamModalPosition textF16 FontB">
                    {modalObj?.positions}
                  </span>
                </div>
                <div
                  id="transition-modal-description"
                  className={`textF16 FontR ${classes.modalContentText}`}
                >
                  {modalObj?.detail}
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
