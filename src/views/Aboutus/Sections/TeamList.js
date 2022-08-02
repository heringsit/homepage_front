import React, { Component, useContext } from "react";
import { ThemeContext } from "../../../context"
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
  const LeaderShipSettings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: props.matches ? 2 : 4,
    // slidesToScroll: this.props.matches ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    //arrows: this.props.matches ? false : true,
    nextArrow: <NextArrow matches={props.matches} />,
    prevArrow: <PrevArrow matches={props.matches} />,
  };
  const { theme } =useContext(ThemeContext);

  return (
    <div className="addPadding">
      <div className="SectionDiv">
        <div className="titleDiv">
          <div className="textT22 FontB">
            <span>HERINGS Team</span>
          </div>
          <hr style={{border: "1px solid " + (theme === "dark" ? "white" : "black")}}></hr>
        </div>
        <div className="SectionColorGray" style={{ padding: "16px 0" }}>
          <div className="TeamListWrap  ">
            <div className="textT18 Subtitle">
              <span className="FontB">EXECUTIVE</span>
              <span className="FontR">LEADERSHIP</span>
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
                          <span className="FontB textF16 tcb">{team.name}</span>
                        </div>
                        <div>
                          {/* 여기 index === 4 */}
                          <span className="textF14 tco">{team.jobs}</span>
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
            <div className="textT18 Subtitle">
              <span className="FontB">RESEARCH</span>
              <span className="FontR">LEADERSHIP</span>
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
                          <span className="FontB textF16 tcb">{team.name}</span>
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
            <div className="textT18 Subtitle">
              <span className="FontB">ADVISORY</span>
              <span className="FontR">BOARD</span>
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
                          <span className="FontB textF16 tcb">{team.name}</span>
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
