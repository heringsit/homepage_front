import React from "react";
import { Link } from "react-router-dom";

export default function DataList({ data }) {
  const imsi = process.env.PUBLIC_URL;
  //console.log(data);
  return (
    <>
      <div key={data.id} className="careerListRow FontNR">
        <div className="newsContainListCol ncol1 newsListTitle">
          {/* <Link to={`${imsi}/news/#newsrelease/detail/${data.id}`}> */}
          <Link to={`/news/#newsrelease/detail/${data.id}`}>
            <div className="textF20 tcb FontNB">{data.title}</div>
          </Link>
        </div>
        <div className="newsContainListCol ncol2 textF16">{data.regiDate}</div>
      </div>
    </>
  );
}
