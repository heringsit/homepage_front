import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
//import { Slide } from "react-slideshow-image";

import topSlidImg1 from "../../../assets/images/slide/main_visual1.jpg";
import topSlidImg2 from "../../../assets/images/slide/main_visual2.jpg";

import topSlideArrowPrev from "../../../assets/images/etc/chevron_left.svg";
import topSlideArrowNext from "../../../assets/images/etc/chevron_right.svg";

const slideImages = [topSlidImg1, topSlidImg2];
document.documentElement.setAttribute("data-agent", navigator.userAgent);

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.slideRef = React.createRef();
    this.touchStartPos = 0;
    this.touchStopPos = 0;
    this.touchMinLength = 50;
  }

  onTouchSlideStart = (e) => {
    e.preventDefault();
    //alert("onTouchSlideStart");
    if (
      e.type === "touchstart" ||
      e.type === "touchmove" ||
      e.type === "touchend" ||
      e.type === "touchcancel"
    ) {
      var touch = e.touches[0] || e.changedTouches[0];
      this.touchStartPos = touch.pageX;
    }
  };

  onTouchSlideEnd = (e) => {
    e.preventDefault();
    if (
      e.type === "touchstart" ||
      e.type === "touchmove" ||
      e.type === "touchend" ||
      e.type === "touchcancel"
    ) {
      var touch = e.touches[0] || e.changedTouches[0];
      this.touchStopPos = touch.pageX;
    }

    if (this.touchStartPos + 50 < this.touchStopPos) {
      this.slideRef.current.goBack();
    } else if (this.touchStartPos > this.touchStopPos + 50) {
      this.slideRef.current.goNext();
    }
  };

  render() {
    return (
      <div
        className="slide-container"
        // onClick={() => {
        //   this.slideRef.current.goNext();
        // }}
        onTouchStart={this.onTouchSlideStart}
        onTouchEnd={this.onTouchSlideEnd}
      >
        {this.props.matches ? null : (
          <div
            className="headImgArrowPrev nav"
            onClick={(e) => {
              this.slideRef.current.goBack();
            }}
          >
            <img src={topSlideArrowPrev} alt="arrowPrev" />
          </div>
        )}

        <Fade
          duration={5000}
          transitionDuration={1000}
          infinite={true}
          indicators={false}
          scale={0.4}
          arrows={false}
          //arrows={this.props.matches ? false : true}
          onChange={(oldIndex, newIndex) => {
            this.props.setSlideIndex(newIndex);
          }}
          style={{ height: "100%", width: "100%" }}
          ref={this.slideRef}
        >
          <div className="each-slide">
            <div
              className="each-slide-image"
              style={{
                backgroundImage: `url(${slideImages[0]})`,
              }}
            ></div>
            {/* <svg className="blur-ie">
              <defs>
                <filter id="blur">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <image
                xlinkHref={`${slideImages[0]}`}
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                className="ieTopImage"
                filter="url(#blur)"
              ></image>
            </svg> 
            <div className="blur-mask"></div>*/}
            <div className="headImgDiv">
              <div className="mainTopText tcw">
                <div className="mainTopTextnb textF22 FontL">
                  Keeping the <span className="tcsb1">Integrity of life</span>
                </div>
                <div className="mainTopTextnb textF22 FontL">
                  against serious chronic disease through our
                </div>
                <div className="mainTopTexty textF48 FontL tcsb2">
                  DIGITAL THERAPEUTICS
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div
              className="each-slide-image"
              style={{
                //background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slideImages[1]})`,
                backgroundImage: `url(${slideImages[1]})`,
              }}
            ></div>
            {/* <svg className="blur-ie">
              <defs>
                <filter id="blur">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <image
                xlinkHref={`${slideImages[1]}`}
                className="ieTopImage"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                filter="url(#blur)"
              ></image>
            </svg> 
            <div className="blur-mask"></div>*/}
            <div className="headImgDiv2Wrap">
              <div className="headImgDiv2">
                <div className="mainTopText headImgDiv2padding tcb">
                  <div className="mainTopTextnb textF22 FontL">
                    Keeping the Integrity of life
                  </div>
                  <div className="mainTopTextnb textF22 FontL">
                    against serious chronic disease through our
                  </div>
                  <div className="mainTopTexty textF48 FontL">
                    DIGITAL THERAPEUTICS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {this.props.matches ? null : (
          <div
            className="headImgArrowNext nav"
            onClick={(e) => {
              this.slideRef.current.goNext();
            }}
          >
            <img src={topSlideArrowNext} alt="arrowNext" />
          </div>
        )}
      </div>
    );
  }
}
