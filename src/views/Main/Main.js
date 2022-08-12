import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import "./Main.css"; 
import "../../index.css";
import mainimage from "../../assets/images/mainimage.png";
// import project1_7 from "../../assets/videos/project1_7.mp4";
import { MediaQueryContext } from "../../context";
import project1_7 from "../../assets/videos/homepage_background.mp4";
export default function Main() {
  const { mTablet } = useContext(MediaQueryContext);
  return (
    <div
      id="maincontent"
      className="content"
      style={{
        height: "100vh",
      }}
    >
      <Menubar slideIndex={0} />
      <Totop />
      <div id="main">
        {mTablet ? (
          <div className="mainimagelayout w-full h-full">
            {/* <img
              src={mainimage}
              alt="mainimage"
              style={{
                width: "100%",
                height: "100%",
              }}
            /> */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#000000",
                opacity: "32%",
              }}
            ></div>
            <div className="mainimagetext">
              <span className="block Font_Mont_600">HERINGS</span>
              <span className="block Font_Mont_400">
                Our whole new digital care service
              </span>
              <span className="block Font_Mont_400">
                for you is ready to be discovered.
              </span>
            </div>
          </div>
        ) : (
          <video
            className="mainvideo"
            controls={false}
            muted={true}
            loop={true}
            autoPlay={true}
            src={project1_7}
            alt="project1_7"
            type="video/mp4"
          >
            <source src={project1_7} type="video/mp4" />
            Your Browser does not support the video tag.
          </video>
        )}
      </div>
      <Footer />
    </div>
  );
}
