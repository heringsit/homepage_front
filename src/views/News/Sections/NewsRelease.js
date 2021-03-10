import React, { useState, useEffect } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import parse from "html-react-parser";
import { makeStyles, createStyles } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ReactComponent as IconClose } from "../../../assets/images/05career/close.svg";

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

export default function NewsRelease({ match }) {
  // const imsi = process.env.PUBLIC_URL;
  const imsi = `http://52.79.120.20:9099`;
  // const matches = useMediaQuery("(max-width:600px)");
  const [, setIsDataReady] = useState(false);
  const [, setPaginginfo] = useState([]);
  const classes = useStyles();
  const [modalObj, setModalObj] = useState({});
  const [open, setOpen] = useState(false);
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
  const [, setCountList] = useState([]);
  const [listData, setListData] = useState([]);

  const getdata = (tab) => {
    let today = new Date();
    // let selectedTab = tab !== undefined ? tab : careerTab;
    // console.log("getdata tab->" + selectedTab);
    let sendingDateFormat =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      today.getDate().toString().padStart(2, "0");
    axios
      .get(`${imsi}/api/boardListCnt`, {
        //
        params: {
          type: "News",
          date: sendingDateFormat,
        },
      })
      .then((response) => {
        //
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
          type: "News",
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
  // 52.79.120.20:9099/api/boardList?type=News&page=1
  const handleOpen = (obj, isEnd) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(getdata, []);
  return (
    <div id="content" style={{ position: "relative" }}>
      <div className="SectionDivNews" id="newsrelease">
        <div className="SectionDivNT ">
          <div className="titleDiv">
            <div className="textT22 FontEB">
              <span>News Release</span>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="newsContainList">
          <div className="newsContainListHeader FontNL">
            <div className="newsContainListHeaderCol ncol1 textF16 korFonts">
              제목
            </div>
            <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
              등록일
            </div>
          </div>
          <div className="nodatasWrap">
            {listData.map((data, index) => {
              return (
                <div key={index} className="careerListRow FontNR">
                  <div className="newsContainListCol ncol1 newsListTitle">
                    {/* <Link to={`${imsi}/news/#newsrelease/detail/${data.id}`}> */}
                    <div
                      onClick={(e) => {
                        handleOpen(data, checkDate(data.regiDate, "E"));
                      }}
                    >
                      <div className="textF20 tcb FontNB">{data.title}</div>
                    </div>
                  </div>
                  <div className="newsContainListCol ncol2 textF16">
                    {data.regiDate}
                  </div>
                </div>
              );
            })}
            {/* <div className="nodatas FontB">등록된 게시물이 습니다!</div> */}
          </div>
        </div>
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
                  {/* <div className="careerModalContentCaption tcw FontB textF16">
                    HERINGS Career
                  </div> */}
                  <div className="readContentsCareerCategoryWrap borderBottom">
                    <div className="readContentsCareerCategory">
                      <div className="readContentsRow ">
                        <div className="tbContentsB FontNB textF16">제목</div>
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
                        <div className="tbContentsB FontNB textF16">
                          첨부파일
                        </div>
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
                          등록일자
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
                        {/* <div className="tbContentsB FontNB textF16">
                          {" "}
                          채용분야
                        </div> */}
                        <div className="tbContents tcb FontNR textF16 ">
                          {modalObj.recruitment}
                        </div>
                      </div>
                    </div>
                    {/* <div className="readContentsTableButtonTd">
                      <div className="readContentsTableButton FontNR textF16">
                        {modalObj.closing_date}
                      </div>
                    </div> */}
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
