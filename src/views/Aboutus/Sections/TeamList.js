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
import CommonCardTitle from "../../common/CommonCardTitle";

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

  const HERINGS_TEAM_LIST = [
    Executive_Leadership,
    Research_Leadership,
    Advisory_Board,
  ];
  const ListTitle = [
    "Executive_Leadership",
    "Research_Leadership",
    "Advisory_Board",
  ];
  return (
    <div className="aboutuscontents bg-gray ">
      <div className="pt-48" />
      <CommonCardTitle title={"HERINGS TEAM"} tc={0} />
      {HERINGS_TEAM_LIST.map((LIST, idx) => (
        <div className="TeamListWrap" key={idx}>
          <div className="Subtitle">
            <span className="FontB tcb textF24">
              {ListTitle[idx].split("_")[0]}
            </span>
            <span className="FontR tcb textF24">
              {ListTitle[idx].split("_")[1]}
            </span>
          </div>
          <Slider {...LeaderShipSettings} className="listWrap">
            {LIST.map((team, index) => {
              return (
                <div
                  key={index}
                  className={`teamDivWrap ${index === 0 && "ml-0"}`}
                >
                  <div
                    className={` ${
                      team.jobs === "None" ? "none" : "heringsTeamWrap m-reset"
                    }`}
                    onClick={() => {
                      props.handleOpen(team);
                    }}
                  >
                    <hr />
                    <div className={`${mobile ? "pt-20" : "pt-40"}`}></div>
                    <div className="align-items-center justify-center flex w-full">
                      <img
                        className="listImg"
                        src={team.modalimg}
                        alt={team.name}
                      />
                    </div>
                    <div className="heringsTeamContentText">
                      <span
                        className={`${mobile ? "FontR" : "FontB"} textF18 ${
                          theme === "dark" ? "tcw" : "tcb"
                        }`}
                      >
                        {team.name}
                      </span>
                      {idx === 0 && (
                        <span className="tco textF16 FontR">{team.jobs}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ))}
    </div>
  );
}
