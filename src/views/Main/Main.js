import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import "./Main.css";
import "../../index.css";
import { MediaQueryContext } from "../../context";

export default function Main() {
  const { mTablet } = useContext(MediaQueryContext);
  return (
    <div className="" id="main">
      <Menubar slideIndex={0} />
      <Totop />
      <div className="main-container">
        {mTablet ? (
          <div className="mainimagelayout w-full h-full">
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
            controls={false}
            muted={true}
            loop={true}
            autoPlay={true}
            playsInline
          >
            <source
              src="https://turtleneck.s3.ap-northeast-2.amazonaws.com/homepage_background.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video tag.
          </video>
        )}
      </div>
      <Footer />
    </div>
  );
}
