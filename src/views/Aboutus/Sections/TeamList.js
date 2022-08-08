import React, { useContext } from "react";
import { MediaQueryContext, ThemeContext } from "../../../context";
import Slider from "react-slick";
import {
  Executive_Leadership,
  Research_Leadership,
  Advisory_Board,
} from "./HeringsTeamMember";

// import TeamListArrowPrev from "../../../assets/images/etc/team_left.svg";
//import TeamListArrowNext from "../../../assets/images/etc/team_right.svg";
import { ReactComponent as TeamListArrowPrev } from "../../../assets/images/02about_herings_team/chevron_left.svg";
import { ReactComponent as TeamListArrowNext } from "../../../assets/images/02about_herings_team/chevron_right.svg";
//import topSlideArrowPrev from "../../../assets/images/etc/chevron_left.svg";
//import topSlideArrowNext from "../../../assets/images/etc/chevron_right.svg";

import "../Aboutus.css";
import "../slick.css";

function PrevArrow(props) {
  const { className, style, onClick, matches } = props;
  return (
    <div
      className={className}
      style={({ ...style }, { display: matches ? "none" : "block" })}
      onClick={onClick}
    >
      <TeamListArrowPrev style={{ fill: "#F0F" }} />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick, matches } = props;
  return (
    <div
      className={className}
      style={({ ...style }, { display: matches ? "none" : "block" })}
      onClick={onClick}
    >
      <TeamListArrowNext style={{ fill: "#e6e9ed" }} />
    </div>
  );
}

// class component에서 function component로 변경 (08.01)
export default function TeamList(props) {
  // const matches = useMediaQuery("(max-width: 600px)");
  // const mobile = useMediaQuery("(max-width: 320px)");
  const { sTablet, mobile } = useContext(MediaQueryContext);
  const theme = useContext(ThemeContext);

  const LeaderShipSettings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: sTablet ? 2 : 4,
    // slidesToScroll: this.props.matches ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    //arrows: this.props.matches ? false : true,
    nextArrow: <NextArrow matches={sTablet} />,
    prevArrow: <PrevArrow matches={sTablet} />,
  };
  return (
    <div className={`${mobile ? "" : "pt-80"}`}>
      <div className="SectionDiv">
        <div className="titleDiv">
          <span className="FontB">HERINGS TEAM</span>
          <hr />
        </div>
        <div className="SectionColorGray" style={{ padding: "16px 0" }}>
          <div className="TeamListWrap">
            <div className="Subtitle">
              <span className="FontB tcb">EXECUTIVE</span>
              <span className="FontR tcb">LEADERSHIP</span>
            </div>
            <Slider {...LeaderShipSettings} className="listWrap">
              {Executive_Leadership.map((team, index) => {
                return (
                  <div
                    key={index}
                    className={`teamDivWrap ${index === 0 ? "wrapFirst" : ""}`}
                  >
                    <div
                      className="heringsTeamWrap"
                      onClick={() => {
                        props.handleOpen(team);
                      }}
                    >
                      <hr />
                      <div className="listImgWrap">
                        <img
                          className="listImg"
                          src={team.modalimg}
                          alt={team.name}
                        />
                      </div>
                      <div className="heringsTeamContentText">
                        <div>
                          <span
                            className={`${mobile ? "" : "FontB"} ${
                              theme === "dark" ? "tcw" : "tcb"
                            }`}
                          >
                            {team.name}
                          </span>
                        </div>
                        <div>
                          {/* 여기 index === 4 */}
                          <span className="tco">{team.jobs}</span>
                        </div>
                        {/* <div>
                            <span className="textF14 tcg">
                              {team.positions}
                            </span>
                          </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="TeamListWrap">
            <div className="Subtitle">
              <span className="FontB tcb">RESEARCH</span>
              <span className="FontR tcb">LEADERSHIP</span>
            </div>
            <Slider {...LeaderShipSettings} className="listWrap">
              {Research_Leadership.map((team, index) => {
                return (
                  <div key={index} className="teamDivWrap">
                    <div
                      className={` ${
                        team.jobs === "None"
                          ? "teamDivWrapNone"
                          : "heringsTeamWrap"
                      }`}
                      onClick={() => {
                        props.handleOpen(team);
                      }}
                    >
                      <hr />
                      <div className="listImgWrap">
                        <img
                          src={team.modalimg}
                          alt={team.name}
                          className="listImg"
                        />
                      </div>
                      <div className="heringsTeamContentText">
                        <div>
                          <span
                            className={`${mobile ? "" : "FontB"} ${
                              theme === "dark" ? "tcw" : "tcb"
                            }`}
                          >
                            {team.name}
                          </span>
                        </div>
                        {/* <div>
                            <span className="textF14 tco">{team.jobs}</span>
                          </div>
                          <div>
                            <span className="textF14 tcg">
                              {team.positions}
                            </span>
                          </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="TeamListWrap">
            <div className="Subtitle">
              <span className="FontB tcb">ADVISORY</span>
              <span className="FontR tcb">BOARD</span>
            </div>
            <Slider {...LeaderShipSettings} className="listWrap">
              {Advisory_Board.map((team, index) => {
                return (
                  <div key={index} className="teamDivWrap">
                    <div
                      className="heringsTeamWrap"
                      onClick={() => {
                        props.handleOpen(team);
                      }}
                    >
                      <hr />
                      <div className="listImgWrap">
                        <img
                          src={team.modalimg}
                          alt={team.name}
                          className="listImg"
                        />
                      </div>
                      <div className="heringsTeamContentText">
                        <div>
                          <span
                            className={`${mobile ? "" : "FontB"} ${
                              theme === "dark" ? "tcw" : "tcb"
                            }`}
                          >
                            {team.name}
                          </span>
                        </div>
                        {/* <div>
                            <span className="textF14 tco">{team.jobs}</span>
                          </div>
                          <div>
                            <span className="textF14 tcg">
                              {team.positions !== ""
                                ? team.positions
                                : "\u00A0"}
                            </span>
                          </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
