import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import moment from "moment";
import "../../News/News.css";

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

export default function Certificates(props) {
  const imsi = process.env.PUBLIC_URL;
  const matches = useMediaQuery("(max-width:600px)");
  const [isDataReady, setIsDataReady] = useState(false);
  const [paginginfo, setPaginginfo] = useState([]);
  const classes = useStyles();
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
  const [dataList] = useState([
    {
      id: "국내특허",
      content: "사용자의 생활습관 관리 방법 및 장치",
      number: "제10-2020-0038253호",
    },
    {
      id: "국내특허",
      content: "사용자의 생활습관 관리 방법 및 장치",
      number: "제10-2020-0038253호",
    },
  ]);
  return (
    <div id="aboutus" style={{ position: "relative" }}>
      <div className="SectionDivNews" id="certificates">
        <div className="SectionDivNT ">
          <div className="titleDiv">
            <div className="textT22 FontB tcb">
              <span>CERTIFICATES</span>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="newsContainList">
          <div className="newsContainListHeader FontNL">
            <div className="newsContainListHeaderCol ccol1 textF16 korFonts">
              특허
            </div>
            <div className="leftContainListHeaderCol ccol2 textF16 korFonts">
              내용
            </div>
            <div className="leftContainListHeaderCol ccol1 textF16 korFonts">
              출원번호
            </div>
          </div>
          <div className="nodatasWrap">
            {dataList.map((data, index) => {
              return (
                <div key={index} className="certificatesListRow FontNR">
                  <div className="newsContainListCol newsListTitle">
                    {/* <Link to={`${imsi}/news/#newsrelease/detail/${data.id}`}> */}
                  </div>
                  <div className="newsContainListCol tcol1 textF16">
                    {data.id}
                  </div>
                  <div className="contentContainListCol  tcol2 textF16">
                    {data.content}
                  </div>
                  <div className="numberContainListCol tcol3 textF16">
                    {data.number}
                  </div>
                </div>
              );
            })}
            {/* <div className="nodatas FontB">등록된 게시물이 습니다!</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
