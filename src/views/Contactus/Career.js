import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import moment from "moment";
import parse from "html-react-parser";
import { makeStyles, createStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { imsi } from "../../index";

import { ReactComponent as IconClose } from "../../assets/images/05career/close.svg";
import "./Career.css";
import { MediaQueryContext } from "../../context";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    paper: {
      width: "65%",
      maxHeight: "85vh",
      // maxHeight: 650,
      overflow: "auto",
      boxShadow: "0 0 100px 20px rgba(0, 0, 0, 0.7)",
      backgroundColor: "#FFF",
      outline: "none",
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        // minHeight: 400,
        // maxHeight: 500,
      },
    },

    modalContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto",
    },
    modalimgaeWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalimage: {
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
      color: "#4a4a4a",
    },
    modalContentText: {
      whiteSpace: "pre-wrap",
      color: "#4a4a4a",
    },
  })
);

export default function Career({ match }) {
  // const matches = useMediaQuery("(max-width:600px)");
  const { sTablet } = useContext(MediaQueryContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalObj, setModalObj] = useState({});
  const [countList, setCountList] = useState([]);
  const [listData, setListData] = useState([]);
  const [paginginfo, setPaginginfo] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [careerTab, setCareerTab] = useState("A");

  const tabClick = (e, val) => {
    setCareerTab(val);
    getdata(val);
  };

  const handleOpen = (obj, isEnd) => {
    if (!isEnd) {
      alert("마감된 공고 입니다.");
    } else {
      if (JSON.stringify({}) !== obj) {
        setModalObj(obj);
        //console.log(window.pageYOffset);
        setOpen(true);
      }
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getdata = (tab) => {
    let today = new Date();
    let selectedTab = tab !== undefined ? tab : careerTab;
    console.log("getdata tab->" + selectedTab);
    let sendingDateFormat =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      today.getDate().toString().padStart(2, "0");
    axios
      .get(`${imsi}/api/boardListCnt`, {
        params: {
          type: "Career",
          date: sendingDateFormat,
        },
      })
      .then((response) => {
        console.log(response.data.boardCnt);
        setCountList([
          response.data.boardCnt[0].cnt,
          response.data.boardCnt[0].newcnt,
          response.data.boardCnt[0].expcnt,
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "Career",
          tab: selectedTab,
          page: 1,
        },
      })
      .then((response) => {
        console.log(response.data.paginginfo);
        setListData(response.data.board_data);
        setIsDataReady(true);
        setPaginginfo(response.data.paginginfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const page = (e, page) => {
    e.preventDefault();

    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "Career",
          tab: careerTab,
          page: parseInt(page),
        },
      })
      .then((response) => {
        setPaginginfo(response.data.paginginfo);
        setIsDataReady(true);
        setListData(response.data.board_data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const convertData = (data, statename) => {
    let returnstring = "";
    if (statename === "emp_form") {
      switch (data) {
        case "FullTimer":
          returnstring = "정규직";
          break;
        case "ContractWorker":
          returnstring = "계약직";
          break;
        case "FreeLancer":
          returnstring = "프리랜서";
          break;
        case "PartTimer":
          returnstring = "아르바이트";
          break;
        case "Etc":
          returnstring = "기타";
          break;
        default:
          break;
      }
    } else if (statename === "education") {
      switch (data) {
        case "E1":
          returnstring = "학력무관";
          break;
        case "E2":
          returnstring = "전문학사 이상";
          break;
        case "E3":
          returnstring = "학사 이상";
          break;
        case "E4":
          returnstring = "석사 이상";
          break;
        case "E5":
          returnstring = "박사 이상";
          break;
        default:
          break;
      }
    } else if (statename === "career") {
      let checkdatas = data.split("/");
      if (checkdatas[0] > 0) {
        returnstring += "신입 ";
      }
      if (checkdatas[0] > 0 && checkdatas[1] > 0) {
        returnstring += "및 ";
      }
      if (checkdatas[1] > 0) {
        returnstring += "경력 ";
      }
      if (checkdatas[1] > 0 && checkdatas[2] > 0) {
        returnstring += checkdatas[2] + "년 이상";
      }
    }
    return returnstring;
  };

  const checkDate = (endDate, type) => {
    let today = moment(new Date(), "YYYY-MM-DD");
    let end = moment(endDate, "YYYY-MM-DD");
    let diffDate = parseInt(moment.duration(today.diff(end)).asDays());
    if (type === "D") {
      let returnText = "";
      returnText =
        // diffDate <= 0 ? "마감 " + Math.abs(diffDate) + "일전" : "마감됨";
        diffDate <= 0 ? "D-" + Math.abs(diffDate) : "마감됨";
      return returnText; //남은날짜 리턴
    } else if (type === "E") {
      let isEnd = diffDate <= 0 ? true : false;
      return isEnd;
    }
  };

  const pageingFn = (paging) => {
    console.log("call pageingFn");
    let jsxpaging = [];
    for (let index = paging.startPage; index <= paging.endPage; index++) {
      if (index > paging.totalPage) {
        break;
      }
      jsxpaging.push(index);
    }
    return (
      <ul className="pager">
        {paging.curSet > 1 ? (
          <li
            value={paging.startPage - 1}
            className="previous"
            onClick={(e) => {
              page(e, paging.startPage - 1);
            }}
          >
            &lt;
          </li>
        ) : null}
        {jsxpaging.map((data, i) => (
          <li
            key={i}
            value={data}
            onClick={(e) => {
              page(e, data);
            }}
            className={`${
              parseInt(data) === parseInt(paging.curPage) ? "pagingActive" : ""
            }`}
          >
            {data}
          </li>
        ))}
        {paging.curSet < paging.totalSet ? (
          <li
            value={paging.endPage + 1}
            className="next"
            onClick={(e) => {
              page(e, paging.endPage + 1);
            }}
          >
            &gt;
          </li>
        ) : null}
      </ul>
    );
  };

  useEffect(getdata, []);
  console.log("listData::", listData);
  return (
    <div id="content" className="content">
      {/* <Menubar slideIndex={0} />
      <Totop /> */}
      <div id="cotactus">
        {/* <ContentsTitle matches={matches} title={"CONTACT US"} /> */}
        {/* id 를 추가해야 이동한다 ; scroll focusing 스크롤 포커싱 */}
        <div className="SectionDivCareer position-relative" id="career">
          <div className="titleDiv">
            <span className="textT22 FontEB">HERINGS CAREERS</span>
            <hr></hr>
          </div>
          <div className="listCnt">
            <div
              className={`${
                careerTab === "A" ? "squareCareerSelected" : "squareCareer"
              }`}
              onClick={(e) => {
                tabClick(e, "A");
              }}
            >
              <span className={`FontB ${sTablet ? "textF32" : "textF70"}`}>
                {countList[0]}
              </span>
              <div
                className={`FontNR textF18 korFonts ${
                  careerTab === "A" ? "tcw" : "tcb"
                }`}
              >
                {sTablet ? "진행중인 채용" : "현재 진행중인 채용"}
              </div>
            </div>
            <div
              className={`${
                careerTab === "B" ? "squareCareerSelected" : "squareCareer"
              }`}
              onClick={(e) => {
                tabClick(e, "B");
              }}
            >
              <span className={`FontB ${sTablet ? "textF32" : "textF70"}`}>
                {countList[1]}
              </span>
              <div
                className={`FontNR textF18 korFonts ${
                  careerTab === "B" ? "tcw" : "tcb"
                }`}
              >
                신입 / 인턴
              </div>
            </div>
            <div
              className={`${
                careerTab === "C" ? "squareCareerSelected" : "squareCareer"
              }`}
              onClick={(e) => {
                tabClick(e, "C");
              }}
            >
              <span className={`FontB ${sTablet ? "textF32" : "textF70"}`}>
                {countList[2]}
              </span>
              <div
                className={`FontNR textF18 korFonts ${
                  careerTab === "C" ? "tcw" : "tcb"
                }`}
              >
                경력
              </div>
            </div>
          </div>
          <div className="careerContainList">
            <div className="careerContainListHeader FontNL">
              <div className="careerContainListHeaderCol col1 textF16 korFonts">
                구분
              </div>
              <div className="careerContainListHeaderCol col2 textF16 korFonts">
                내용
              </div>
              <div className="careerContainListHeaderCol col3 textF16 korFonts">
                채용분야
              </div>
              <div className="careerContainListHeaderCol col4 textF16 korFonts">
                상태
              </div>
            </div>
            {isDataReady ? (
              listData.length > 0 ? (
                listData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="careerListRow FontNR"
                      onClick={(e) => {
                        handleOpen(data, checkDate(data.closing_date, "E"));
                      }}
                    >
                      <div className="careerContainListCol col1 textF16 korFonts">
                        {convertData(
                          data.check_career_new +
                            "/" +
                            data.check_career_experienced +
                            "/" +
                            data.check_career_exp_year,
                          "career"
                        )}
                      </div>
                      <div className="careerContainListCol col2 careerListTitle">
                        <div className="textF20 tcb FontNB">{data.title}</div>
                        <div className="careerListTitleDate">
                          <span className="textF14 tcg korFonts">
                            ~ {data.closing_date} 까지
                          </span>
                          <span className="tcg careerListTitleDateSeparator">
                            |
                          </span>
                          <span className="textF14 tco korFonts">
                            {checkDate(data.closing_date, "D")}
                          </span>
                        </div>
                      </div>
                      <div className="careerContainListCol col3 textF16">
                        {data.recruitment}
                      </div>
                      <div className="careerContainListCol col4 textF16 listBtn">
                        <div
                          className={`careerBtn ${
                            checkDate(data.closing_date, "E")
                              ? "careerBtnIng"
                              : "careerBtnEnd"
                          }`}
                        >
                          {checkDate(data.closing_date, "E")
                            ? "채용중"
                            : "마감"}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="nodatasWrap">
                  <div className="nodatas FontB">등록된 게시물이 없습니다!</div>
                </div>
              )
            ) : (
              <div></div>
            )}
            {paginginfo.totalPage > 1 ? (
              <div
                className="pagingDiv"
                // onClick={(e) => loadMore(e)}
              >
                {pageingFn(paginginfo)}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
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
                <div className="careerModalTitle">
                  <div className="careerModalTitleSection">
                    <span className="FontNB textF26">{modalObj.title}</span>
                  </div>
                  <IconClose
                    onClick={handleClose}
                    className="careerModalIconSection"
                  />
                </div>

                <div className="careerModalContent">
                  <div className="careerModalContentCaption tcw FontB textF16">
                    HERINGS Career
                  </div>
                  <div className="readContentsCareerCategoryWrap borderBottom">
                    <div className="readContentsCareerCategory">
                      <div className="readContentsRow ">
                        <div className="tbContentsB FontNB textF16">학력</div>
                        <div className="tbContents tcb FontNR textF16 ">
                          {(() => {
                            switch (modalObj.education) {
                              case "E1":
                                return "학력무관";
                              case "E2":
                                return "전문학사 이상";
                              case "E3":
                                return "학사 이상";
                              case "E4":
                                return "석사 이상";
                              case "E5":
                                return "박사 이상";
                              default:
                                return modalObj.education;
                            }
                          })()}
                        </div>
                      </div>
                      <div className="readContentsRow ">
                        <div className="tbContentsB FontNB textF16">경력</div>
                        <div className="tbContents tcb FontNR textF16 ">
                          {(() => {
                            var career_text = "";
                            if (modalObj.check_career_new)
                              career_text += "신입 ";
                            if (
                              modalObj.check_career_new &&
                              modalObj.check_career_experienced
                            )
                              career_text += "및 ";
                            if (modalObj.check_career_experienced)
                              career_text += "경력 ";
                            if (
                              modalObj.check_career_experienced &&
                              modalObj.check_career_exp_year > 0
                            )
                              career_text +=
                                modalObj.check_career_exp_year + "년 이상";
                            return career_text;
                          })()}
                        </div>
                      </div>
                      <div className="readContentsRow ">
                        <div className="tbContentsB FontNB textF16">
                          고용형태
                        </div>
                        <div className="tbContents tcb FontNR textF16 ">
                          {(() => {
                            switch (modalObj.emp_form) {
                              case "FullTimer":
                                return "정규직";
                              case "ContractWorker":
                                return "계약직";
                              case "FreeLancer":
                                return "프리랜서";
                              case "PartTimer":
                                return "아르바이트";
                              case "Etc":
                                return "기타";
                              default:
                                return modalObj.emp_form;
                            }
                          })()}
                        </div>
                      </div>
                      <div className="readContentsRow ">
                        <div className="tbContentsB FontNB textF16">
                          채용분야
                        </div>
                        <div className="tbContents tcb FontNR textF16 ">
                          {modalObj.recruitment}
                        </div>
                      </div>
                    </div>
                    <div className="readContentsTableButtonTd">
                      <div className="readContentsTableButton FontNR textF16">
                        {modalObj.closing_date} 까지
                      </div>
                    </div>
                  </div>
                  <div className="careerContents FontNR textF16">
                    {(() => {
                      if (
                        modalObj.content !== undefined &&
                        modalObj.content !== ""
                      ) {
                        return parse(modalObj.content);
                      }
                    })()}
                    {/* {(() => {
                      if (modalObj.content) {
                        return modalObj.content
                          .split("<br>")
                          .map((line, index) => {
                            return (
                              <span key={index}>
                                {line}
                                <br />
                              </span>
                            );
                          });
                      } else {
                        return "";
                      }
                    })()} */}
                  </div>
                  <div className="careerModalBottom">
                    <div
                      className="careerModalClose FontR textF14"
                      onClick={handleClose}
                    >
                      <span className="newsButtonLink" onClick={handleClose}>
                        Close
                      </span>
                    </div>
                  </div>
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
