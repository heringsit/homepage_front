import React, { useState, useEffect, useContext } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { imsi } from "../../..";
import { ThemeContext } from "../../../context";
import noimg from "../../../assets/images/10newsir/noImg.png";
// import NewsDetail from "../NewsDetail";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    paper: {
      width: "100%",
      // height: "100vh",
      // height: `calc(100vh - 72px)`, // 헤더 높이를 뺀 나머지 높이
      height: "100%",

      marginTop: "clamp(8rem, 9vw, 10rem)",

      // marginTop: "160px",
      paddingBottom: "clamp(3.5rem, 4vw, 5rem)",
      // marginBottom: "5vw",
      // maxHeight: "100vh",
      // maxHeight: 650,
      overflow: "auto",
      // boxShadow: "0 0 100px 20px rgba(0, 0, 0, 0.7)",
      backgroundColor: "#FFF",
      outline: "none",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "100%",
        // paddingTop: "5vw",
        // marginTop: "0px",

        // marginTop: "160px",
        // paddingBottom: "5vw",
        // marginBottom: "5vw",
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
export default function HeringsPost() {
  const history = useHistory();
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
  const [imgUrls, setImgUrls] = useState("");
  const [loadedUrls, setLoadedUrls] = useState({}); // 이미 로딩된 이미지 URL을 저장할 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 위한 상태 변수
  const [modalImg, setModalImg] = useState("");

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
          type: "HERINGS",
          page: 1,
        },
      })
      .then((response) => {
        setListData(response.data.board_data);

        setIsDataReady(true);
        setPaginginfo(response.data.paginginfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOpen = (obj, isEnd) => {
    if (JSON.stringify({}) !== obj) {
      setModalObj(obj);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const onDownLoad = async (file) => {
  //   console.log(file, "file");
  //   const downloadResult = await fetch(`${imsi}/upimg/${file}`);
  //   // const downloadResult = await fetch(`${imsi}/upimg/${obj.img}`); // 얘 결과값으로 이미지 출력
  //   const blob = await downloadResult.blob();
  //   saveAs(blob, "file");
  // };

  // 카드 썸네일 이미지
  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = await Promise.all(
        listData.map(async (item) => {
          // 이미 로딩된 이미지는 다시 로드 x
          if (loadedUrls[item.img]) {
            return loadedUrls[item.img];
          }
          try {
            const downloadResult = await fetch(`${imsi}/upimg/${item.img}`);
            const finalUrl = downloadResult.url;

            // 로딩된 이미지 URL 저장
            setLoadedUrls((prev) => ({ ...prev, [item.img]: finalUrl }));
            return finalUrl;
          } catch (error) {
            console.error("Image fetch failed", error);
            return ""; // 에러 발생 시 빈 문자열 반환
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

  // 모달 이미지
  useEffect(() => {
    const onCardImgLoad = async () => {
      try {
        const downloadResult = await fetch(`${imsi}/upimg/${modalObj.img}`);
        // 성공시, 이미지 URL을 상태에 저장
        setModalImg(downloadResult.url);
        // newsDetail로 페이지 이동
        if (Object.keys(modalObj).length !== 0 && modalImg !== "") {
          history.push({
            pathname: `/news/${modalObj.no}`,
            state: {
              open: true,
              modalObj: modalObj,
              modalImg: downloadResult.url,
            },
          });
        }
      } catch (error) {
        console.log(error, "이미지 로딩 중 에러 발생");
        // 에러 처리
      }
    };

    onCardImgLoad();
  }, [modalObj]); // imgName이나 imsi가 변경될 때만 함수 실행

  const page = (e, page) => {
    e.preventDefault();

    axios
      .get(`${imsi}/api/boardList`, {
        params: {
          type: "HERINGS",
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

  const cardTitleTruncate = (title) => {
    if (title.length > 50) {
      return title.slice(0, 50) + "...";
    }
    return title;
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
  // console.log(listData, "listData");
  // console.log(modalObj, "modalObj");
  return (
    <div>
      <div className="SectionDivNewsIp">
        <p className="FontB textF28">HERINGS POST</p>
        {isLoading ? (
          <div className="loaderPost"></div> // 로딩 인디케이터 표시
        ) : (
          <div className="website-card-container">
            {listData.map((data, index) => {
              return (
                <div
                  key={data.no}
                  className="website-card"
                  style={{
                    backgroundColor: theme === "dark" ? "#000" : "#FFF",
                  }}
                  onClick={(e) => handleOpen(data)}
                >
                  {/* <img
                  // src="https://back.heringsglobal.com/upimg/1714471532711_main-sub4.png"
                  src={imgUrls[index]}
                  // src="https://back.heringsglobal.com/upimg/1714621547335_landing_main1-1.png"
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
                  {/* <img src={onCardImg(data.img)} /> */}

                  <div className="website-card-text-layout">
                    <div className={`website-card-date-text ${fontColor}`}>
                      {moment(data.reg_datetime).format("YYYY-MM-DD")}
                    </div>
                    <div className={`website-card-title-text ${fontColor}`}>
                      {/* {data.title} */}
                      {cardTitleTruncate(data.title)}
                    </div>
                    <div className="website-card-bottom-text">자세히보기</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <NewsDetail
        open={open}
        handleClose={() => handleClose()}
        modalObj={modalObj}
        modalImg={modalImg}
      /> */}
    </div>
  );
}
