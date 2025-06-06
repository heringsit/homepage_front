import React, { useState, useEffect, useRef, useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
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
// import ContentsTitle from "../Components/ContentsTitle";
import useOnScreen from "../hooks/objectObserver";
import { MediaQueryContext, ThemeContext } from "../../context";
import { AboutUsModal } from "./AboutUsModal";

// 22.08.05 makeStyles 사용에서 css 로 코드 변환 (style 통일)
export default function Aboutus(props) {
  const HAS_VISITED_BEFORE = localStorage.getItem("hasVisitedBefore");
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [modalObj, setModalObj] = useState({});
  const [modalPopObj, setmodalPopObj] = useState({});
  const [slideIndex] = useState(0);
  const [watchToday, setWatchToday] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { mTablet } = useContext(MediaQueryContext);

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
        className="modal"
        open={openNotice}
        onClose={handleNoticeClose}
        hideBackdrop={true}
        onBackdropClick={() => {
          setOpenNotice(false);
        }}
      >
        <Fade in={openNotice}>
          <div className="paper">
            {modalPopObj !== undefined && (
              <div className="w-full">
                <div className="careerModalTitle">
                  <div className="careerModalTitleSection">
                    <span className="FontNB" style={{ marginLeft: 45 }}>
                      {modalPopObj.title}
                    </span>
                  </div>
                  <IconClose
                    onClick={handleNoticeClose}
                    className="careerModalIconSection"
                  />
                </div>

                <div className="careerModalContent pt-10">
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
                      className="tbContents tcb FontNR "
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

  // Scroll Tracker: ref로 page location tracking
  const scrollElem = Array.from(Array(2).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(2).fill(true);
  // visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[0]);
  visibleArray[2] = useOnScreen(refs.current[1]);

  // console.log(visibleArray, ">>visibleArray")

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
      id="aboutus"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "#fff",
      }}
      className="position-relative"
    >
      <Menubar slideIndex={slideIndex} />

      {/* {openerModalNoti()} */}
      {modalObj && openInitialNotice()}
      <div className="about-main-container">
        {/* {!mTablet && <TabClick visibleArray={visibleArray} isScroll={isScroll} />} */}
        <div className="flex-col justify-between">
          <div className="about-section1">
            <div className="ir_text_section1">
              <p className="ir_maintext1">Meet the HERINGS team!</p>
              <span className="ir_subtext1">
                Take convenience to the next level
                <br /> with remote patient monitoring services
                <br /> provided by Herrings
              </span>
            </div>
          </div>
          <div className="about-section2">
            {/* <div id="whoweare" ref={refs.current[0]}>
              <Whoweare />
            </div> */}
            <div id="heringsteam" ref={refs.current[0]}>
              <TeamList handleOpen={handleOpen} />
            </div>
            <div id="researchpartners" ref={refs.current[1]}>
              <PAI />
            </div>

            {/* <QM matches={matches} /> */}
          </div>
          <Totop />
          <Footer />
        </div>
      </div>
      <AboutUsModal open={open} handleClose={handleClose} modalObj={modalObj} />
    </div>
  );
}
