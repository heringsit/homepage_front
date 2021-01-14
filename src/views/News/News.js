import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Menubar from "../Components/Menubar";
import Footer from "../Components/Footer";
import "./News.css";
import headerBg from "../../assets/images/05career/news_header_image.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    ieAlignCenter: {
      //display: "-webkit-box",
      //display: "-moz-box",
      //display: "box",
      //display: "-webkit-flex",
      //display: "-moz-flex",
      //display: "-ms-flexbox",
      display: "flex",
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
      width: "50%",
      minHeight: 600,
      boxShadow: "0 0 100px 20px rgba(0, 0, 0, 0.7)",
      backgroundColor: "#FFF",
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        minHeight: 400,
      },
    },

    modalContent: {
      display: "flex",
      padding: 20,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    modalCloseWrap: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
    },
    modalClose: {
      maxWidth: 30,
      cursor: "pointer",
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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalObj, setModalObj] = useState({});
  const [listData, setListData] = useState([]);
  const [paginginfo, setPaginginfo] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);

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

  const getdata = () => {
    axios
      .get("/api/boardList", {
        params: {
          type: "News",
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

  const loadMore = (e) => {
    e.preventDefault();
    if (paginginfo.totalPage >= parseInt(paginginfo.curPage) + 1) {
      axios
        .get("/api/boardList", {
          params: {
            type: "News",
            page: parseInt(paginginfo.curPage) + 1,
          },
        })
        .then((response) => {
          setPaginginfo(response.data.paginginfo);
          setIsDataReady(true);
          let newlistData = [...listData];
          response.data.board_data.map((data) => {
            newlistData.push(data);
          });
          setListData(newlistData);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("더 이상 데이터가 없습니다.");
    }
  };

  useEffect(getdata, []);
  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        <Grid item align="center" xs={12} className={classes.header}>
          <Menubar />
        </Grid>
        <Grid item xs={12} className={`${classes.ieAlignCenter}`}>
          <div className="newsWrap">
            <div className="contentsTopDiv">
              <img src={headerBg} className="contentsTopImage" />
            </div>
            <div className="newsContainList">
              {isDataReady ? (
                listData.length > 0 ? (
                  listData.map((data, index) => {
                    return (
                      <div key={index} className="newsContain">
                        {data.img !== "" ? (
                          <div className="newsContentsImgContain">
                            <div className="newsContentsImgContainCenter">
                              <img
                                className="newsContentsImg"
                                src={data.img}
                                alt="News"
                              />
                            </div>
                          </div>
                        ) : null}

                        <div
                          className={`newsContentsTextContain ${
                            data.img !== "" ? "" : "noImage"
                          }`}
                        >
                          <div className="newsContentsTopBar">
                            <span className={`FontB textF12 ${data.category}`}>
                              {data.category}
                            </span>
                            <span className="FontR textF12 newsDate">
                              {moment(data.reg_datetime).format(
                                "MMMM.DD, YYYY"
                              )}
                            </span>
                          </div>
                          <div className="newsContentsTitleBar FontR textF26">
                            {data.title}
                          </div>
                          <div className="newsContentsBar FontR">
                            {data.content.replace(/<br>/g, "\n")}
                          </div>
                          <div className="newsContentsBottomBar FontB textF14">
                            <hr className="listBottomLine" />
                            <p
                              key={data.no}
                              onClick={(e) => {
                                handleOpen(data);
                              }}
                            >
                              DETAIL VIEW
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="nodatasWrap">
                    <div className="nodatas FontB">
                      등록된 게시물이 없습니다!
                    </div>
                  </div>
                )
              ) : (
                <div></div>
              )}
              {paginginfo.totalPage > 1 ? (
                <div
                  className="newsSquareButtonContain"
                  onClick={(e) => loadMore(e)}
                >
                  <div className="newsSquareButton">
                    <span className="newsButtonLink">More article</span>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {modalObj !== JSON.stringify({}) ? (
              <div className={classes.modalContent}>
                <div className="layerPopup">
                  <div className="layerPopupInner">
                    <div className="newsContentsTopBar">
                      <span className={`FontB textF16 ${modalObj.category}`}>
                        {modalObj.category}
                      </span>
                      <span className="FontR textF16 newsDate">
                        {moment(modalObj.reg_datetime).format("MMMM.DD, YYYY")}
                      </span>
                    </div>
                    <div className="newsPopContentsTitleBar FontR textF26">
                      {modalObj.title}
                    </div>
                    {modalObj.img !== "" ? (
                      <div className="newsPopImg">
                        <img src={`/upimg/${modalObj.img}`} alt="News" />
                      </div>
                    ) : (
                      <div className="newsPopNoImg"></div>
                    )}
                    <div className="newsPopContentsBar FontR textF18">
                      {(() => {
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
                      })()}
                    </div>
                    <div
                      className="newsSquarePopButtonContain FontR textF14"
                      onClick={handleClose}
                    >
                      <div className="newsSquareButton" onClick={handleClose}>
                        <span className="newsButtonLink" onClick={handleClose}>
                          Close
                        </span>
                      </div>
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
