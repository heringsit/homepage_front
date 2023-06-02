import React, { useState, useEffect, useContext } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import parse from "html-react-parser";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ReactComponent as IconClose } from "../../../assets/images/05career/close.svg";
import { saveAs } from "file-saver";
import { imsi } from "../../..";
import search from "../../../assets/images/etc/search.png";
// import downLoad from "../../../assets/images/etc/download.png";
import CommonCardTitle from "../../common/CommonCardTitle";
import { ThemeContext } from "../../../context";

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

export default function NewsRelease() {
  const [, setIsDataReady] = useState(false);
  const [paginginfo, setPaginginfo] = useState([]);
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
  // const [, setCountList] = useState([]);
  const [listData, setListData] = useState([]);
  const [boardType, setBoardType] = useState("PATENT");
  // let boardType = "PATENT";
  const getdata = (tab) => {
    // let today = new Date();
    // let selectedTab = tab !== undefined ? tab : careerTab;
    // console.log("getdata tab->" + selectedTab);
    // let sendingDateFormat =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1).toString().padStart(2, "0") +
    //   "-" +
    //   today.getDate().toString().padStart(2, "0");
    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "IP",
          page: 1,
          typeDetail: "PATENT",
        },
      })
      .then((response) => {
        // const boardDataType = response.data.board_data.filter(
        //   (arr, index) =>
        //     response.data.board_data[index].type === "PATENT" && arr
        // );
        // console.log(boardDataType, "boardDataType");
        setListData(response.data.board_data);
        setIsDataReady(true);
        setPaginginfo(response.data.paginginfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const filteredData = listData.filter((list) => list.type === boardType); // 한번 필터 후 페이지네이션 적용 하려함

  const handleOpen = (obj, isEnd) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDownLoad = async (file) => {
    const downloadResult = await fetch(`${imsi}/upimg/${file}`);
    const blob = await downloadResult.blob();
    saveAs(blob, "file");
  };
  const page = (e, page, boardType) => {
    e.preventDefault();

    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "IP",
          page: parseInt(page),
          typeDetail: boardType,
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
  const pageingFn = (paging) => {
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
            className={`FontNR ${
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

  const { theme } = useContext(ThemeContext);
  const fontColor = theme === "dark" ? "tcw" : "tcb";
  return (
    <div>
      {" "}
      {/*id="content" className="content">*/}
      <div className="SectionDivNewsIp">
        {/* <div className="SectionDivNT ">
          <div className="titleDiv">
              <span className="textT22 FontEB">IR Information</span>
            <hr></hr>
          </div>
        </div> */}
        <CommonCardTitle
          // title={`Intellectual Property (${boardType})`}
          title={"Intellectual Property"}
          fontStyle={"FontEB"}
          fontSize={"textF22"}
        />
        <div className="BoardTypeBtn">
          <button
            className={theme === "dark" ? "boardButton-Dark" : "boardButton"}
            onClick={(e) => {
              setBoardType("PATENT");
              // boardType = "PATENT";
              page(e, "1", "PATENT");
            }}
          >
            PATENT
          </button>
          <button
            className={theme === "dark" ? "boardButton-Dark" : "boardButton"}
            onClick={(e) => {
              setBoardType("COPYRIGHT");
              // boardType = "PATENT";
              page(e, "1", "COPYRIGHT");
            }}
          >
            COPYRIGHT
          </button>
          <button
            className={theme === "dark" ? "boardButton-Dark" : "boardButton"}
            onClick={(e) => {
              setBoardType("PUBLICATION");
              // boardType = "PUBLICATION";
              page(e, "1", "PUBLICATION");
            }}
          >
            PUBLICATION
          </button>
        </div>
        <div className="newsContainList">
          <div
            className={`newsContainListHeader FontNL ${
              theme === "dark" ? "border-w" : "border-b"
            }`}
          >
            {boardType === "PATENT" ? (
              <>
                <div className="newsContainListHeaderCol ncol3 textF16 korFonts">
                  구분
                </div>
                <div className="newsContainListHeaderCol ncol1 textF16 korFonts">
                  명칭
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  출원인
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  출원번호
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  출원일
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  등록번호
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  등록일
                </div>
              </>
            ) : boardType === "COPYRIGHT" ? (
              <>
                <div className="newsContainListHeaderCol ncol3 textF16 korFonts">
                  구분
                </div>
                <div className="newsContainListHeaderCol ncol1 textF16 korFonts">
                  명칭
                </div>
                <div className="newsContainListHeaderCol ncol4 textF16 korFonts">
                  등록일
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  등록번호
                </div>
              </>
            ) : boardType === "PUBLICATION" ? (
              <>
                <div className="newsContainListHeaderCol ncol3 textF16 korFonts">
                  구분
                </div>
                <div className="newsContainListHeaderCol ncol1 textF16 korFonts">
                  제목
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  저널
                </div>
                <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
                  발간호수
                </div>
              </>
            ) : null}
          </div>

          <div className="nodatasWrap">
            {listData
              // .filter((list) =>
              //   boardType === "PATENT"
              //     ? list.type === "PATENT"
              //     : boardType === "COPYRIGHT"
              //     ? list.type === "COPYRIGHT"
              //     : boardType === "PUBLICATION"
              //     ? list.type === "PUBLICATION"
              //     : listData
              // )

              .map((data, index) => {
                // text.slice(text.indexOf("구분") + 4, text.indexOf("</p>"));
                return (
                  <div key={index} className="careerListRow FontNR">
                    {boardType === "PATENT" ? (
                      <>
                        <div className="newsContainListCol ncol5 newsListTitle">
                          <div className={`${fontColor} FontNB ncol2 textF16`}>
                            {data.content.slice(
                              data.content.indexOf("구분") + 4,
                              data.content.indexOf("</p>")
                            )}
                          </div>
                        </div>
                        <div className="newsContainListCol ncol1 newsListTitle">
                          <div
                            onClick={(e) => {
                              handleOpen(data, checkDate(data.regiDate, "E"));
                            }}
                          >
                            <div className={`textF20 ${fontColor} FontNB`}>
                              {data.title}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {/* var index = filteredData[0].indexOf("출원인");
                            var nextPTagIndex = filteredData[0].indexOf("</p>", index + 1); */}

                          {data.content.slice(
                            data.content.indexOf("출원인") + 5,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("출원인") + 1
                            )
                          )}
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("출원번호") + 6,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("출원번호") + 1
                            )
                          )}
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("출원일") + 5,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("출원일") + 1
                            )
                          )}
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("등록번호") + 6,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("등록번호") + 1
                            )
                          )}
                        </div>

                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {/* {moment(data.reg_datetime).format("YYYY-MM-DD")} */}
                          {data.content.slice(
                            data.content.indexOf("등록일") + 5,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("등록일") + 1
                            )
                          )}
                        </div>
                      </>
                    ) : boardType === "COPYRIGHT" ? (
                      <>
                        <div className="newsContainListCol ncol5 newsListTitle">
                          <div className={`${fontColor} FontNB ncol5 textF16`}>
                            {data.content.slice(
                              data.content.indexOf("구분") + 4,
                              data.content.indexOf("</p>")
                            )}
                          </div>
                        </div>
                        <div className="newsContainListCol ncol1 newsListTitle">
                          <div
                            onClick={(e) => {
                              handleOpen(data, checkDate(data.regiDate, "E"));
                            }}
                          >
                            <div className={`textF20 ${fontColor} FontNB`}>
                              {data.title}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("등록일") + 5,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("등록일") + 1
                            )
                          )}
                        </div>

                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {/* {moment(data.reg_datetime).format("YYYY-MM-DD")} */}
                          {data.content.slice(
                            data.content.indexOf("등록번호") + 6,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("등록번호") + 1
                            )
                          )}
                        </div>
                      </>
                    ) : boardType === "PUBLICATION" ? (
                      <>
                        <div className="newsContainListCol ncol5 newsListTitle">
                          <div className={`${fontColor} FontNB ncol2 textF16`}>
                            {data.content.slice(
                              data.content.indexOf("구분") + 4,
                              data.content.indexOf("</p>")
                            )}
                          </div>
                        </div>
                        <div className="newsContainListCol ncol1 newsListTitle">
                          <div
                            onClick={(e) => {
                              handleOpen(data, checkDate(data.regiDate, "E"));
                            }}
                          >
                            <div className={`textF20 ${fontColor} FontNB`}>
                              {data.title}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("저널") + 5,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("저널") + 1
                            )
                          )}
                        </div>

                        <div
                          className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
                        >
                          {data.content.slice(
                            data.content.indexOf("발간호수") + 6,
                            data.content.indexOf(
                              "</p>",
                              data.content.indexOf("발간호수") + 1
                            )
                          )}
                        </div>
                      </>
                    ) : null}
                  </div>
                );
              })}
            {/* <div className="nodatasWrap">
              <div className="nodatas FontB">등록된 게시물이 없습니다!</div>
            </div> */}

            {paginginfo.totalPage > 1 ? (
              <div
                className="pagingDiv"
                // onClick={(e) => loadMore(e)}
              >
                {pageingFn(paginginfo)}
              </div>
            ) : (
              // listData && filteredData.length > 1 ? (
              //   <div
              //     className="pagingDiv"
              //     // onClick={(e) => loadMore(e)}
              //   >
              //     {pageingFn(filteredData)}
              //   </div>
              // )

              <div></div>
            )}
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
                    <span className="FontNB textF26" style={{ marginLeft: 45 }}>
                      IP
                    </span>
                  </div>
                  <IconClose
                    onClick={handleClose}
                    className="careerModalIconSection"
                  />
                </div>

                <div className="careerModalContent" style={{ paddingTop: 10 }}>
                  <div
                    className="FontB textF18"
                    style={{
                      textAlign: "center",
                      paddingBottom: 30,
                      paddingTop: 20,
                    }}
                  >
                    {modalObj.title}
                  </div>

                  <div className="filecol">
                    <div className="readContentsNewsCategoryWrap borderBottom  borderTop">
                      <div className="readContentsNewsCategory">
                        {modalObj?.img && (
                          <div className="readContentsRow ">
                            <div
                              className="tbContentsB FontNB textF16"
                              style={{ color: "#fd8d27" }}
                            >
                              첨부파일
                            </div>
                            <div
                              className="tbContents tcb FontNR textF16"
                              style={{ cursor: "pointer", color: "#666666" }}
                              onClick={() => onDownLoad(modalObj.img)}
                            >
                              {modalObj.img}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="readContentsRow ">
                          <div
                            className="tbContentsB FontNB textF16"
                            style={{ color: "#fd8d27" }}
                          >
                            등록일
                          </div>
                          <div
                            className="tbContents tcb FontNR textF16 "
                            style={{ color: "#666666" }}
                          >
                            {moment(modalObj.reg_datetime).format("YYYY-MM-DD")}
                          </div>
                        </div>
                        <div className="readContentsRow ">
                          <div className="tbContents tcb FontNR textF16 ">
                            {modalObj.recruitment}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="readContentsTableButtonTd">
                      <div className="readContentsTableButton FontNR textF16">
                        {modalObj.closing_date}
                      </div>
                    </div> */}
                  </div>
                  <div className="careerContents FontNR textF16 borderBottom">
                    {(() => {
                      if (
                        modalObj.content !== undefined &&
                        modalObj.content !== ""
                      ) {
                        return parse(modalObj.content);
                      }
                    })()}
                  </div>
                  {modalObj?.link && (
                    <div
                      className="tbContents tcb FontNR textF24 "
                      style={{ textAlign: "center" }}
                    >
                      <button
                        style={{
                          cursor: "pointer",
                          padding: 10,
                          background: "none",
                          border: "none",
                          fontSize: 17,
                        }}
                        onClick={() =>
                          window.open(`${modalObj.link}`, "_blank")
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
                  )}
                  <div className="careerModalBottom">
                    <div
                      className="careerModalClose FontR textF16"
                      onClick={handleClose}
                    >
                      <span
                        className="newsButtonLink FontR"
                        onClick={handleClose}
                      >
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
