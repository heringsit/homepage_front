import React, { useState } from "react";
import "./News.css";
import moment from "moment";
import parse from "html-react-parser";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import noimg from "../../assets/images/10newsir/noImg.png";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Menubar from "../Components/Menubar";

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

export default function NewsDetail() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  const [slideIndex] = useState(0);

  const { open, modalObj, modalImg } = location.state || {};
  console.log(location.state, "location.state");
  const handleClose = () => {
    history.push("/news");
    // setOpen(false);
  };

  return (
    <div>
      <Menubar slideIndex={slideIndex} />

      <div>
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
                      src={modalImg ? modalImg : noimg}
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
    </div>
  );
}

// export default NewsDetail;
