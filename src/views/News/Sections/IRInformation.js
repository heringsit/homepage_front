import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../News.css";

export default function NewsRelease() {
  const matches = useMediaQuery("(max-width:600px)");
  const [isDataReady, setIsDataReady] = useState(false);
  const [paginginfo, setPaginginfo] = useState([]);
  return (
    <div id="content" style={{ position: "relative" }}>
      <div className="SectionDivNews" id="irinformation">
        <div className="SectionDivNT ">
          <div className="titleDiv">
            <div className="textT22 FontEB">
              <span>IR Information</span>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="careerContainList">
          <div className="careerContainListHeader FontNL">
            <div className="careerContainListHeaderCol col1 textF16 korFonts">
              제목
            </div>
            <div className="careerContainListHeaderCol col2 textF16 korFonts">
              첨부파일
            </div>
            <div className="careerContainListHeaderCol col2 textF16 korFonts">
              등록일
            </div>
          </div>
          <div className="nodatasWrap">
            <div className="nodatas FontB">등록된 게시물이 없습니다!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
