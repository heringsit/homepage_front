import React from "react";

export default function CommonBoard({ dataList, title, numName }) {
  return (
    <div className="newsContainList">
      <div className="newsContainListHeader FontNL">
        <div className="newsContainListHeaderCol tcol1 textF16 korFonts">
          {title}
        </div>
        <div className="leftContainListHeaderCol tcol2 textF16 korFonts">
          내용
        </div>
        <div className="leftCertContainListHeaderCol tcol3 textF16 korFonts">
          {numName}
        </div>
      </div>
      <div className="nodatasWrap">
        {dataList.map((data, index) => {
          return (
            <div key={index} className="careerListRow FontNR">
              <div className="certContainListCol tcol1">
                <div>{data.id}</div>
              </div>
              <div className="newsContainListCol tcol2 certListTitle">
                <div>{data.content}</div>
              </div>
              <div className="contentContainListCol tcol3 ">{data.number}</div>
            </div>
          );
        })}
        {/* <div className="nodatas FontB">등록된 게시물이 습니다!</div> */}
        <div style={{ marginBottom: 50 }}></div>
      </div>
    </div>
  );
}
