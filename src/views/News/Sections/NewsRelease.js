import React, { useState, useEffect, useContext } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { imsi } from "../../..";
import CommonCardTitle from "../../common/CommonCardTitle";
import { ThemeContext } from "../../../context";
import BannerSlider from "../BannerSlider";

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
  const matches = useMediaQuery("(max-width:600px)");
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
        console.log(response.data, "response data News111");

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
        setListData(response.data.board_data);
        setIsDataReady(true);
        setPaginginfo(response.data.paginginfo);
        console.log(response.data, "response data News222");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOpen = async (obj) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };
  const openWindowWithLink = () => {
    if (modalObj.link) {
      window.open(`${modalObj.link}`);
    }
  };

  useEffect(() => {
    openWindowWithLink();
  }, [modalObj]);

  const handleClose = () => {
    setOpen(false);
  };
  const page = (e, page) => {
    e.preventDefault();

    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "News",
          page: parseInt(page),
        },
      })
      .then((response) => {
        setPaginginfo(response.data.paginginfo);
        setIsDataReady(true);
        setListData(response.data.board_data);
        console.log(response.data, "response data News333");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const onDownLoad = async (file) => {
  //   const downloadResult = await fetch(`${imsi}/upimg/${file}`);
  //   const blob = await downloadResult.blob();
  //   saveAs(blob, "file");
  // };
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
      <div className="SectionDivNews">
        <CommonCardTitle
          title={"NEWS RELEASE"}
          fontStyle={"FontCB"}
          fontSize={"textF40"}
        />

        {/* <div className="SectionDivNT ">
          <div className="titleDiv">
            <span className="textT22 FontEB">News Release</span>
            <hr></hr>
          </div>
        </div> */}
        <div style={{ padding: "110px 0px" }}>
          <BannerSlider />
        </div>
      </div>
    </div>
  );
}

{
  // <Modal
  //   aria-labelledby="transition-modal-title"
  //   aria-describedby="transition-modal-description"
  //   className={classes.modal}
  //   open={open}
  //   onClose={handleClose}
  //   closeAfterTransition
  //   disableScrollLock={true}
  //   BackdropComponent={Backdrop}
  //   BackdropProps={{
  //     timeout: 500,
  //   }}
  // >
  //   <Fade in={open}>
  //     <div className={classes.paper}>
  //       {modalObj !== JSON.stringify({}) ? (
  //         <div className={classes.modalContent}>
  //           <div className="careerModalTitle">
  //             <div className="careerModalTitleSection">
  //               <span className="FontNB textF26" style={{ marginLeft: 45 }}>
  //                 NEWS
  //               </span>
  //             </div>
  //             <IconClose
  //               onClick={handleClose}
  //               className="careerModalIconSection"
  //             />
  //           </div>
  //           <div className="careerModalContent" style={{ paddingTop: 10 }}>
  //             <div
  //               className="FontB textF18"
  //               style={{
  //                 textAlign: "center",
  //                 paddingBottom: 30,
  //                 paddingTop: 20,
  //               }}
  //             >
  //               {modalObj.title}
  //             </div>
  //             <div className="filecol">
  //               <div className="readContentsNewsCategoryWrap borderBottom  borderTop">
  //                 <div className="readContentsNewsCategory">
  //                   {modalObj?.img && (
  //                     <div className="readContentsRow ">
  //                       <div
  //                         className="tbContentsB FontNB textF16"
  //                         style={{ color: "#fd8d27" }}
  //                       >
  //                         첨부파일
  //                       </div>
  //                       <div
  //                         className="tbContents tcb FontNR textF16"
  //                         style={{ cursor: "pointer", color: "#666666" }}
  //                         onClick={() => onDownLoad(modalObj.img)}
  //                       >
  //                         {modalObj.img}
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>
  //                 <div>
  //                   <div className="readContentsRow ">
  //                     <div
  //                       className="tbContentsB FontNB textF16"
  //                       style={{ color: "#fd8d27" }}
  //                     >
  //                       등록일
  //                     </div>
  //                     <div
  //                       className="tbContents tcb FontNR textF16 "
  //                       style={{ color: "#666666" }}
  //                     >
  //                       {moment(modalObj.reg_datetime).format("YYYY-MM-DD")}
  //                     </div>
  //                   </div>
  //                   <div className="readContentsRow ">
  //                     <div className="tbContents tcb FontNR textF16 ">
  //                       {modalObj.recruitment}
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="readContentsTableButtonTd">
  //                 <div className="readContentsTableButton FontNR textF16">
  //                   {modalObj.closing_date}
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="careerContents FontNR textF16 borderBottom">
  //               {(() => {
  //                 if (
  //                   modalObj.content !== undefined &&
  //                   modalObj.content !== ""
  //                 ) {
  //                   return parse(modalObj.content);
  //                 }
  //               })()}
  //             </div>
  //             {modalObj?.link && (
  //               <div
  //                 className="tbContents tcb FontNR textF24 "
  //                 style={{ textAlign: "center" }}
  //               >
  //                 <button
  //                   style={{
  //                     cursor: "pointer",
  //                     padding: 10,
  //                     background: "none",
  //                     border: "none",
  //                     color: "black",
  //                     fontSize: 17,
  //                     overflowWrap: "break-word",
  //                     wordBreak: "break-word",
  //                   }}
  //                   onClick={() => window.open(`${modalObj.link}`, "_blank")}
  //                 >
  //                   <img
  //                     alt="img"
  //                     src={search}
  //                     style={{ marginRight: 9, marginBottom: -4 }}
  //                   />
  //                   ${modalObj.link}
  //                   &nbsp;자세히 보기
  //                 </button>
  //               </div>
  //             )}
  //             <div className="careerModalBottom">
  //               <div
  //                 className="careerModalClose  textF16"
  //                 onClick={handleClose}
  //               >
  //                 <span className="newsButtonLink FontR" onClick={handleClose}>
  //                   Close
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div> no info</div>
  //       )}
  //     </div>
  //   </Fade>
  // </Modal>;
}
