import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import moment from "moment";
import "../../News/News.css";
// import { CommonBoard } from "./components/CommonBoard";

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
  const [cDataList] = useState([
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
  const [cpDataList] = useState([
    {
      id: "저작권 ",
      content:
        "STATA(스타타, 통계소프트웨어)를 활용한 임상시험에서의 Form Missing (양식 누락) 확인 프로그램",
      number: "제C-2017-008136호",
    },
    {
      id: "저작권 ",
      content:
        "STATA(스타타, 통계소프트웨어)를 활용한 임상시험에서의 Study Drug(연구 약물) 데이터 검증 프로그램",
      number: "제C-2017-008137호",
    },
    {
      id: "저작권 ",
      content:
        "STATA(스타타, 통계소프트웨어)를 활용한 임상시험에서의 Laboratory Values Grading(실험실 가치 평가) 프로그램",
      number: "제C-2017-008138호",
    },
    {
      id: "저작권 ",
      content:
        "STATA(스타타, 통계소프트웨어)를 활용한 임상시험에서의 Tumor Evaluation(종양 평가) 검증 프로그램",
      number: "제C-2017-008139호",
    },
    {
      id: "저작권 ",
      content:
        "JAVA Script(자바스크립트)를 이용한 EDC(Electronic Data Capture, 전자 데이터 수집 프로그램)의 구현",
      number: "제C-2017-008140호",
    },
    {
      id: "저작권 ",
      content: "프로그램 명칭 R(알, 통계 소프트웨어)을 활용한 프로그램",
      number: "제C-2017-008141호",
    },
  ]);
  const [tDataList] = useState([
    { id: "상표권", content: "Rhexium", number: "제40-2020-0058730호" },
  ]);
  const [aDataList] = useState([
    { id: "ISO9001", content: "품질경영시스템인증서", number: "2020.09.09" },
    {
      id: "ISO27001",
      content: "정보보호경영시스템인증서",
      number: "2020.09.09",
    },
  ]);

  return (
    <div id="certificates" style={{ position: "relative" }}>
      <div className="SectionDivNews" id="certificates">
        <div className="SectionDivNT ">
          <div className="titleDiv">
            <div className="textT22 FontB tcb">
              <span>CERTIFICATES</span>
            </div>
            <hr></hr>
          </div>
        </div>
        <div>
          {/* <CommonBoard dataList={cDataList} title="특허" numName="출원번호" />
          <CommonBoard
            dataList={cpDataList}
            title="저작권"
            numName="출원번호"
          />
          <CommonBoard dataList={tDataList} title="상표" numName="출원번호" />
          <CommonBoard dataList={aDataList} title="인증" numName="인증일" /> */}
        </div>
      </div>
    </div>
  );
}
