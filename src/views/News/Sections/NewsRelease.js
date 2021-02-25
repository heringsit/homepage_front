import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../News.css";
import DataList from "./detail/DataList";

export default function NewsRelease({ match }) {
  const matches = useMediaQuery("(max-width:600px)");
  const [isDataReady, setIsDataReady] = useState(false);
  const [paginginfo, setPaginginfo] = useState([]);
  const [dataList] = useState([
    {
      id: 1,
      title: "아 너무 졸립습니다.",
      regiDate: "2021-02-25",
      writer: "관리자",
      img: "http://",
      link: "http://",
      download: ["a", "b"],
    },
    {
      id: 2,
      title: "아 너무 졸립습니다.",
      regiDate: "2021-02-25",
      writer: "관리자",
      img: "http://",
      link: "http://",
      download: ["a", "b"],
    },
    {
      id: 3,
      title: "아 너무 졸립습니다.",
      regiDate: "2021-02-25",
      writer: "관리자",
      img: "http://",
      link: "http://",
      download: ["a", "b"],
    },
  ]);
  console.log(dataList);
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
            {dataList.map((data, index) => {
              return <DataList data={data} key={index} />;
            })}
            {/* <div className="nodatas FontB">등록된 게시물이 습니다!</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
