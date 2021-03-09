import React, { useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Icon from "@material-ui/core/Icon";
import { HamburgerSqueeze } from "react-animated-burgers";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import herings_logo_b from "../../assets/images/etc/heringsLOGO_black.svg";
//import herings_logo_w from "../../assets/images/etc/heringsLOGO_white.svg";
import { ReactComponent as HeringsLogo } from "../../assets/images/etc/heringsLOGO.svg";

// import herings_ci_s from "../../assets/images/etc/logo_s";
// import herings_ci_l from "../../assets/images/etc/logo_l";

import "./Menubar.css";

export default function Menubar(props) {
  const imsi = process.env.PUBLIC_URL;
  smoothscroll.polyfill();
  const matches = useMediaQuery("(max-width:1260px)");
  const [isOver, setIsOver] = useState(false);
  const [isMActive, setIsMActive] = useState(false);
  const [mobileSelected, setMobileSelected] = useState(null);
  const [isScroll, setIsScroll] = useState(false);

  const mobilemenuclick = (e, val) => {
    e.preventDefault();
    val === mobileSelected ? setMobileSelected(null) : setMobileSelected(val);
  };

  const menuclick = (e, key) => {
    setIsMActive(!isMActive);
    setMobileSelected(null);
  };

  const onScroll = () => {
    setIsScroll(window.scrollY || window.pageYOffset > 0 ? true : false);
  };

  const menuover = (e, key) => {
    e.preventDefault();
    setIsOver(true);
  };

  const menuout = (e, key) => {
    e.preventDefault();
    setIsOver(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);

  if (matches) {
    return (
      <div className="mobileMenuWrapDiv">
        <div
          className={`mobileMenuroot`}
          onMouseEnter={menuover}
          onMouseLeave={menuout}
        >
          <div className="mobileMenulogo">
            <NavLink to={`${imsi}/`}>
              <div
                className="logoImgContainCenterM"
                style={{ backgroundImage: "url('" + herings_logo_b + "')" }}
              ></div>
            </NavLink>
            <div className="mobileBtn">
              <HamburgerSqueeze
                className="mobileBtnHambuger"
                isActive={isMActive}
                toggleButton={menuclick}
                buttonWidth={25}
                buttonColor="#FFF"
                barColor="black"
              />
            </div>
          </div>
          <div className={`mobileMenus ${isMActive ? "slider" : "slideroff"}`}>
            <div className="mobileMenudiv">
              <Link
                smooth
                to={`${imsi}/aboutus/#aboutus`}
                onClick={(e) => {
                  mobilemenuclick(e, 0);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 0 ? "mobilemenusactive" : ""
                    }`}
                  >
                    ABOUT US
                  </span>
                  {mobileSelected === 0 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 0
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#whoweare`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">WHO WE ARE</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#heringsteam`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">HERINGS TEAM</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#researchpartners`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      PARTNERS & INVESTORS
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobileMenudiv">
              <Link
                smooth
                to={`${imsi}/platforms/#platforms`}
                onClick={(e) => {
                  mobilemenuclick(e, 1);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 1 ? "mobilemenusactive" : ""
                    }`}
                  >
                    PLATFORMS
                  </span>
                  {mobileSelected === 1 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 1
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth
                    to={`${imsi}/platforms/#craimon`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">CRAIMON</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/platforms/#rhexium`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">RHEXIUM</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobileMenudiv">
              <Link
                smooth
                to={`${imsi}/pipeline/#pipeline`}
                onClick={(e) => {
                  mobilemenuclick(e, 2);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 2 ? "mobilemenusactive" : ""
                    }`}
                  >
                    PIPELINE
                  </span>
                  {mobileSelected === 2 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 2
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth
                    to={`${imsi}/pipeline/#craimon`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      CRAIMON PIPELINE
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/pipeline/#rhexium`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      RHEXIUM PIPELINE
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobileMenudiv">
              <Link smooth to={`${imsi}/career`} onClick={menuclick}>
                <div className="mobileMenuRow">
                  <span className={`FontEB textF22 menuText`}>CAREER</span>
                </div>
              </Link>
            </div>
            <div className="mobileMenudiv">
              <Link smooth to={`${imsi}/contactus`} onClick={menuclick}>
                <div className="mobileMenuRow">
                  <span className={`FontEB textF22 menuText`}>CONTACT US</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`menuWrapDiv ${isOver ? "menuWrapOver" : ""} ${
          isScroll ? "menuWrapOver isScrolledmenu" : ""
        }`}
        onMouseEnter={menuover}
        onMouseLeave={menuout}
      >
        <div className="mewnuWrap">
          <div className="menulogo">
            <NavLink to={`${imsi}/`}>
              <div
                className="logoImgContainCenter"
                // style={{
                //   // animationName:
                //   //   props.slideIndex === 0 ? changeBgbw : changeBgwb,
                //   // animationDuration: "1s",

                //   backgroundImage:
                //     props.slideIndex === 0
                //       ? isScroll || isOver
                //         ? "url('" + herings_logo_b + "')"
                //         : "url('" + herings_logo_w + "')"
                //       : "url('" + herings_logo_b + "')",
                // }}
              >
                <HeringsLogo
                  style={{
                    fill:
                      props.slideIndex === 0
                        ? isScroll || isOver
                          ? "#000"
                          : "#FFF"
                        : "#000",
                  }}
                />
              </div>
            </NavLink>

            {/* GNB 대메뉴 */}
          </div>
          <div className="menusAfterLogo">
            <div className="menudiv">
              <Link smooth to={`${imsi}/aboutus/#aboutus`} onClick={menuclick}>
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? isScroll || isOver
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  ABOUT US
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link
                smooth
                to={`${imsi}/platforms/#platforms`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? isScroll || isOver
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  PLATFORMS
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link
                smooth
                to={`${imsi}/pipeline/#pipeline`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? isScroll || isOver
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  PIPELINE
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link smooth to={`${imsi}/news/#news`} onClick={menuclick}>
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? isScroll || isOver
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  NEWS & IR
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link
                smooth
                to={`${imsi}/contactus/#contactus`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? isScroll || isOver
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  CONTACT US
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ABOUT US 하단 메뉴 */}

        <div className={`menuDetail ${isOver ? "part" : "partHide"}`}>
          <div className="menuDetailRow">
            <div className="menuDetailDiv">
              <Link smooth to={`${imsi}/aboutus/#aboutus`} onClick={menuclick}>
                <span className="textF18 tcb">ABOUT US</span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#whoweare`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg"> Who We Are </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#heringsteam`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg"> HERINGS Team </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#researchpartners`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">Partners & Invenstors</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/aboutus/#certificates`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">Certificates</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* PLATFORMS 하단 메뉴 */}
            <div className="menuDetailDiv">
              <Link
                smooth
                to={`${imsi}/platforms/#platforms`}
                onClick={menuclick}
              >
                <span className="textF18 tcb">PLATFORMS</span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth
                    to={`${imsi}/platforms/#craimon`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">Craimon</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/platforms/#rhexium`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg"> Rhexium </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* PIPELINE 하단 메뉴 */}
            <div className="menuDetailDiv">
              <Link
                smooth
                to={`${imsi}/pipeline/#pipeline`}
                onClick={menuclick}
              >
                <span className="textF18 tcb">PIPELINE</span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth
                    to={`${imsi}/pipeline/#craimon`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg"> Craimon Pipeline</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/pipeline/#rhexium`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg"> Rhexium Pipeline</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* NEWS 하단 메뉴 */}
            <div className="menuDetailDiv">
              <Link smooth to={`${imsi}/news/#news`} onClick={menuclick}>
                <span className="textF18 tcb">NEWS & IR</span>
              </Link>
              <ul className="menuul">
                <Link
                  smooth
                  to={`${imsi}/news/#newsrelease`}
                  onClick={menuclick}
                >
                  <span className="textF15 tcg">News Release</span>
                </Link>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/news/#irinformation`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">IR Information</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT US 하단 메뉴 */}
            <div className="menuDetailDiv">
              <Link
                smooth
                to={`${imsi}/contactus/#contactus`}
                onClick={menuclick}
              >
                <span className="textF18 tcb">CONTACT US</span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth
                    to={`${imsi}/contactus/#career`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">Career</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to={`${imsi}/contactus/#contact`}
                    onClick={menuclick}
                  >
                    <span className="textF15 tcg">Contact </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
