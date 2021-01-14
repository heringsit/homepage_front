import React from "react";
import subImage from "../../assets/images/etc/sub_visual.jpg";
document.documentElement.setAttribute("data-agent", navigator.userAgent);
export default function ContentsTitle(props) {
  return (
    <div className="">
      <div
        className=""
        style={{
          height: "330px",
          width: "100%",
          background: `url(${subImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="textF53 FontL tcw menuTitleDiv">{props.title}</div>
      </div>
    </div>
  );
}
