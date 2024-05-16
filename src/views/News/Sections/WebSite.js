import React, { useState, useEffect, useContext } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { imsi } from "../../..";
import { ThemeContext } from "../../../context";
import noimg from "../../../assets/images/10newsir/noImg.png";

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

export default function WebSite({ match }) {
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
  const [imgUrls, setImgUrls] = useState("");
  const [loadedUrls, setLoadedUrls] = useState({}); // 이미 로드된 URL 관리
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 위한 상태 변수

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
        // console.log(response.data, "response data News111");
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
        // console.log(response.data, "response data News222");
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
        // console.log(response.data, "response data News333");
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

  // 카드 썸네일 이미지
  // useEffect(() => {
  //   const fetchImageUrls = async () => {
  //     const urls = await Promise.all(
  //       listData.map(async (item) => {
  //         if (item.img) {
  //           try {
  //             const downloadResult = await fetch(`${imsi}/upimg/${item.img}`);

  //             return downloadResult.url;
  //           } catch (error) {
  //             console.error("Image fetch failed", error);
  //             return ""; // 에러 발생 시 빈 문자열 반환
  //           }
  //         }
  //       })
  //     );
  //     setImgUrls(urls);
  //   };

  //   if (listData) {
  //     fetchImageUrls();
  //   }
  // }, [listData]);
  useEffect(() => {
    const fetchImageUrls = async () => {
      setIsLoading(true); // 이미지 로딩 시작

      const urls = await Promise.all(
        listData.map(async (item) => {
          if (item.img && !loadedUrls[item.img]) {
            // 아직 로드되지 않은 이미지만 처리
            try {
              const downloadResult = await fetch(`${imsi}/upimg/${item.img}`);
              const finalUrl = downloadResult.url;
              setLoadedUrls((prev) => ({ ...prev, [item.img]: finalUrl })); // 로드된 이미지 URL 저장
              return finalUrl;
            } catch (error) {
              console.error("Image fetch failed", error);
              return ""; // 에러 발생 시 빈 문자열 반환
            }
          } else {
            return loadedUrls[item.img] || ""; // 이미 로드된 이미지는 즉시 반환
          }
        })
      );
      setImgUrls(urls);
      setIsLoading(false); // 이미지 로딩 완료
    };

    if (listData) {
      fetchImageUrls();
    }
  }, [listData, loadedUrls]);

  useEffect(getdata, []);
  //   console.log(listData, "listData");

  const { theme } = useContext(ThemeContext);
  const fontColor = theme === "dark" ? "tcw" : "tcb";
  return (
    <div>
      {/* id="content" className="content"> */}
      <div className="SectionDivNewsIp">
        {/* <div className="SectionDivNT ">
          <div className="titleDiv">
              <span className="textT22 FontEB">IR Information</span>
            <hr></hr>
          </div>
        </div> */}
        <p className="FontB textF28">WEBSITE</p>
        {isLoading ? (
          <div className="loaderPost"></div> // 로딩 인디케이터 표시
        ) : (
          <div className="website-card-container">
            {listData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="website-card"
                  style={{
                    backgroundColor: theme === "dark" ? "#000" : "#FFF",
                  }}
                  onClick={(e) => handleOpen(data)}
                >
                  {/* <img
                  src={onCardImg(data.img)}
                  alt="card-img"
                  className="website-card-img"
                /> */}
                  {imgUrls[index] ? (
                    <img // 각 인덱스에 맞는 이미지 URL 검사
                      src={imgUrls[index]} // imgUrls 배열에서 해당 인덱스의 URL 사용
                      alt="card-img"
                      className="website-card-img"
                      loading="lazy"
                    />
                  ) : (
                    <img // 이미지 없을시
                      src={noimg}
                      alt="card-img"
                      className="website-card-img"
                      loading="lazy"
                    />
                  )}
                  <div
                    // onClick={(e) => {
                    //   handleOpen(data, checkDate(data.regiDate, "E"));
                    // }}
                    // modalObj?.link &&
                    //   window.open(`${modalObj.link}`, "_blank")
                    className="website-card-text-layout"
                  >
                    <div className={`website-card-date-text ${fontColor}`}>
                      {moment(data.reg_datetime).format("YYYY-MM-DD")}
                    </div>
                    <div className={`website-card-title-text ${fontColor}`}>
                      {data.title}
                    </div>
                    <div className="website-card-bottom-text">자세히보기</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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
  );
}
