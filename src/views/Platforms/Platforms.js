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
import platformVideo from "../../assets/videos/platform.mp4";
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
          <div className="platformVideoCont">
            <video controls autoPlay loop playsInline className="platformVideo">
              <source src={platformVideo} type="video/mp4"></source>
            </video>
          </div>
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
