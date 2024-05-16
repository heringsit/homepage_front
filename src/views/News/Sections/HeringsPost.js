import React, { useState, useEffect, useContext } from "react";
import "../News.css";
import axios from "axios";
import moment from "moment";
import parse from "html-react-parser";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { ReactComponent as IconClose } from "../../../assets/images/05career/close.svg";
import { saveAs } from "file-saver";
import { imsi } from "../../..";
// import search from "../../../assets/images/etc/search.png";
// import downLoad from "../../../assets/images/etc/download.svg";
// import CommonCardTitle from "../../common/CommonCardTitle";
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
  // useEffect(() => {
  //   const fetchImageUrls = async () => {
  //     const urls = await Promise.all(
  //       listData.map(async (item) => {
  //         try {
  //           const downloadResult = await fetch(`${imsi}/upimg/${item.img}`);

  //           return downloadResult.url;
  //         } catch (error) {
  //           console.error("Image fetch failed", error);
  //           return ""; // 에러 발생 시 빈 문자열 반환
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
                  key={index}
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
          style: { backgroundColor: "transparent" }, // 뒷배경을 투명하게 설정 - 어두움 방지
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {modalObj !== JSON.stringify({}) ? (
              <div className={classes.modalContent}>
                <div className="modal-header">
                  <p
                    className="modal-header-text"
                    style={{
                      fontSize:
                        modalObj.title?.length > 120
                          ? "clamp(1.2rem, 1.7vw, 2rem)"
                          : undefined,
                    }}
                  >
                    {modalObj.title}
                  </p>
                  <span className="modal-date">
                    {moment(modalObj.reg_datetime).format("YYYY.MM.DD")}
                  </span>
                </div>
                {/* <IconClose
                    onClick={handleClose}
                    className="careerModalIconSection"
                  /> */}
                <div className="modal-body-container ">
                  <img
                    src={modalImg ? modalImg : null}
                    alt="news-img"
                    className="modal-img"
                  />
                  <div className="">
                    {(() => {
                      if (
                        modalObj.content !== undefined &&
                        modalObj.content !== ""
                      ) {
                        return parse(modalObj.content);
                      }
                    })()}
                  </div>

                  <div className="modal-bottom">
                    <div className="modal-back-btn" onClick={handleClose}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M22.6678 14.6663H12.5478L16.9478 10.2796C17.1989 10.0285 17.34 9.688 17.34 9.33293C17.34 8.97786 17.1989 8.63733 16.9478 8.38626C16.6968 8.13519 16.3562 7.99414 16.0012 7.99414C15.6461 7.99414 15.3056 8.13519 15.0545 8.38626L8.38783 15.0529C8.26644 15.1797 8.17129 15.3293 8.10783 15.4929C7.97447 15.8175 7.97447 16.1816 8.10783 16.5063C8.17129 16.6699 8.26644 16.8195 8.38783 16.9463L15.0545 23.6129C15.1784 23.7379 15.3259 23.8371 15.4884 23.9048C15.6509 23.9725 15.8251 24.0073 16.0012 24.0073C16.1772 24.0073 16.3515 23.9725 16.5139 23.9048C16.6764 23.8371 16.8239 23.7379 16.9478 23.6129C17.0728 23.489 17.172 23.3415 17.2397 23.179C17.3074 23.0166 17.3422 22.8423 17.3422 22.6663C17.3422 22.4902 17.3074 22.316 17.2397 22.1535C17.172 21.991 17.0728 21.8435 16.9478 21.7196L12.5478 17.3329H22.6678C23.0215 17.3329 23.3606 17.1925 23.6106 16.9424C23.8607 16.6924 24.0012 16.3532 24.0012 15.9996C24.0012 15.646 23.8607 15.3068 23.6106 15.0568C23.3606 14.8067 23.0215 14.6663 22.6678 14.6663Z"
                          fill="white"
                        />
                      </svg>
                      <span
                        className="newsButtonLink FontR"
                        onClick={handleClose}
                      >
                        목록으로 돌아가기
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

// <div className="newsContainList">
//   <div
//     className={`newsContainListHeader FontNL ${
//       theme === "dark" ? "border-w" : "border-b"
//     }`}
//   >
//     <div className="newsContainListHeaderCol ncol1 textF16 korFonts">
//       제목
//     </div>
//     <div className="newsContainListHeaderCol ncol3 textF16 korFonts">
//       첨부파일
//     </div>
//     <div className="newsContainListHeaderCol ncol2 textF16 korFonts">
//       등록일
//     </div>
//   </div>
//   <div className="nodatasWrap">
//     {listData.map((data, index) => {
//       return (
//         <div key={index} className="careerListRow FontNR">
//           <div className="newsContainListCol ncol1 newsListTitle">
//             <div
//               onClick={(e) => {
//                 handleOpen(data, checkDate(data.regiDate, "E"));
//               }}
//             >
//               <div className={`textF20 ${fontColor} FontNB`}>
//                 {data.title}
//               </div>
//             </div>
//           </div>
//           <div
//             className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
//           >
//             <div
//               style={{
//                 border: "solid 1px",
//                 width: 204,
//                 height: 34,
//                 paddingTop: 4,
//               }}
//               onClick={() => onDownLoad(data.img)}
//             >
//               다운로드{" "}
//               <img
//                 alt="img"
//                 src={downLoad}
//                 className={theme === "dark" ? "invert" : ""}
//                 style={{ width: 15, height: 15, marginLeft: 8 }}
//               />
//             </div>
//           </div>
//           <div
//             className={`newsContainListCol ${fontColor} FontNB ncol2 textF16`}
//           >
//             {moment(data.reg_datetime).format("YYYY-MM-DD")}
//           </div>
//         </div>
//       );
//     })}

//     {/* <div className="nodatasWrap">
//       <div className="nodatas FontB">등록된 게시물이 없습니다!</div>
//     </div> */}
//     {paginginfo.totalPage > 1 ? (
//       <div
//         className="pagingDiv"
//         // onClick={(e) => loadMore(e)}
//       >
//         {pageingFn(paginginfo)}
//       </div>
//     ) : (
//       <div></div>
//     )}
//   </div>
// </div>;
