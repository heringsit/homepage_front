import React from "react";
//import { makeStyles, createStyles } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import Footer from "../Components/Footer";

import ContentsTitle from "../Components/ContentsTitle";
import Craimon from "./Sections/Craimon";
import Rhexium from "./Sections/Rhexium";
import RhexiumContents from "./Sections/RhexiumContents";
import platformTopImage from "../../assets/images/03craimon/PLATFORMS_TOP.svg";
<<<<<<< HEAD
import platformVideo from "../../assets/images/videos/platform.mp4"
=======
>>>>>>> 5d3646757864680fe7fac8892478c578c5441d27
import "./Platforms.css";

export default function Platforms({ match }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div id="content" style={{ position: "relative" }}>
      <Menubar slideIndex={0} />
      <Totop />
      <div id="platforms">
        <ContentsTitle matches={matches} title={"PLATFORMS"} />
        <div className="SectionDivNT SectionDivUpBlank">
<<<<<<< HEAD
          <div className="platformVideoCont">
            <video controls autoPlay loop playsInline className="platformVideo">
              <source src={platformVideo} type="video/mp4" ></source>
            </video>
          </div>
=======
          <video width="100%" controls autoPlay loop playsInline className="platform-video">
            <source src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5a23d3a-6c68-43d6-a263-0683525bd198/VD%ED%97%A4%EB%A7%81%EC%8A%A4220308_ENG%28no_sub%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220323T004358Z&X-Amz-Expires=86400&X-Amz-Signature=7f50a692792c411ed3035f12a6d4d32ccfdaf379bf9838a84c32f21164ec59ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%255BVD%255D%255B%25ED%2597%25A4%25EB%25A7%2581%25EC%258A%25A4%255D220308_ENG%28no%2520sub%29.mp4%22&x-id=GetObject'} type="video/mp4" ></source>
          </video>
>>>>>>> 5d3646757864680fe7fac8892478c578c5441d27
        </div>
        <div className="SectionDivNT SectionDivUpBlank">
          <div className="platformTopImage">
            <img
              src={platformTopImage}
              alt="platform"
              className="platformImg"
            />
          </div>
        </div>
        <Craimon matches={matches} />
        <Rhexium matches={matches} />
        <RhexiumContents matches={matches} />
        <Footer />
      </div>
    </div>
  );
}

