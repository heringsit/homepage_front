import React, { Component } from "react";
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

export default class TeamList extends Component {
  render() {
    const LeaderShipSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.matches ? 2 : 4,
      // slidesToScroll: this.props.matches ? 1 : 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      //arrows: this.props.matches ? false : true,
      nextArrow: <NextArrow matches={this.props.matches} />,
      prevArrow: <PrevArrow matches={this.props.matches} />,
    };
    return (
      <div className="SectionDiv SectionColorGray" id="heringsteam">
        <div className="titleDiv">
          <div className="textT22 FontEB">
            <span>HERINGS TEAM</span>
          </div>
          <hr></hr>
        </div>
        <div className="TeamListWrap">
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
                      this.props.handleOpen(team);
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
                        <span className="FontB textF18 tcb">{team.name}</span>
                      </div>
                      <div>
                        <span className="textF15 tco">{team.jobs}</span>
                      </div>
                      <div>
                        <span className="textF15 tcg">{team.positions}</span>
                      </div>
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
                    className={` ${team.jobs === "None" ? "teamDivWrapNone" : "heringsTeamWrap"}`}
                    onClick={() => {
                      this.props.handleOpen(team);
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
                        <span className="FontB textF18 tcb">{team.name}</span>
                      </div>
                      <div>
                        <span className="textF15 tco">{team.jobs}</span>
                      </div>
                      <div>
                        <span className="textF15 tcg">{team.positions}</span>
                      </div>
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
                      this.props.handleOpen(team);
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
                        <span className="FontB textF18 tcb">{team.name}</span>
                      </div>
                      <div>
                        <span className="textF15 tco">{team.jobs}</span>
                      </div>
                      <div>
                        <span className="textF15 tcg">
                          {team.positions !== "" ? team.positions : "\u00A0"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
