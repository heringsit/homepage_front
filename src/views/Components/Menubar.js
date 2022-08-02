import React, { useContext, useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Icon from "@material-ui/core/Icon";
import { HamburgerSqueeze } from "react-animated-burgers";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import herings_logo_b from "../../assets/images/etc/heringsLOGO_black.svg";
import herings_logo_w from "../../assets/images/etc/heringsLOGO_white.svg";
import { ReactComponent as HeringsLogo } from "../../assets/images/etc/heringsLOGO.svg";
import { ReactComponent as HeringsLogoDark } from "../../assets/images/etc/heringsLOGO_dark.svg";
import "./Menubar.css";
import { Button } from "@material-ui/core";
import DarkModeOnIcon from "../../assets/images/etc/icon_dark_on.svg";
import DarkModeOffIcon from "../../assets/images/etc/icon_dark_off.svg";
import { ThemeContext } from "../../context";

export default function Menubar(props) {
  const pathname = useLocation().pathname;
  const imsi = process.env.PUBLIC_URL;
  smoothscroll.polyfill();
  const matches = useMediaQuery("(max-width:1260px)");
  const mobile = useMediaQuery("(max-width:320px)");
  const [isOver, setIsOver] = useState(false);
  const [isMActive, setIsMActive] = useState(false);
  const [mobileSelected, setMobileSelected] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  // const [mode, setMode] = useState(theme);

  console.log(pathname === "/", ">pathname");

  const changeMode = () => changeTheme(theme === "light" ? "dark" : "light");

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

  // 모바일 메뉴
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);

  if (matches) {
    return (
      <div className="mobileMenuWrapDiv">
        <div
          className={`mobileMenuroot`}
          style={{ backgroundColor: theme === "dark" && "#282828" }}
          onMouseEnter={menuover}
          onMouseLeave={menuout}
        >
          {/* <div className="logoImgContainCenter">
                {theme === "light" ? (
                  <HeringsLogo
                    style={{
                      fill:
                        props.slideIndex === 0 && pathname === "/"
                          ? "#000"
                          : "",
                    }}
                  />
                ) : (
                  <HeringsLogoDark
                    style={{
                      fill:
                        props.slideIndex === 0 && pathname === "/"
                          ? "#fff"
                          : "",
                    }}
                  />
                )}
              </div> */}
          <div className="mobileMenulogo">
            <NavLink to={`${imsi}/`}>
              <div
                className="logoImgContainCenterM"
                style={
                  theme === "light"
                    ? {
                        backgroundImage: "url('" + herings_logo_b + "')",
                      }
                    : {
                        backgroundImage: "url('" + herings_logo_w + "')",
                      }
                }
              ></div>
            </NavLink>
            {/* Dark Mode Toggle Mobile */}
            <div className="modediv">
              <Button
                className="modebutton"
                id="modebutton"
                onClick={changeMode}
              >
                {theme === "dark" ? (
                  <label htmlFor="modebutton" className="lighttoggle">
                    <img
                      src={DarkModeOffIcon}
                      alt="dark mode icon"
                      className="lighticon"
                    />
                    {!mobile && (
                      <span className="lightmode">LIGHT MODE ON</span>
                    )}
                  </label>
                ) : (
                  <label htmlFor="modebutton" className="darktoggle">
                    <img
                      src={DarkModeOnIcon}
                      alt="dark mode icon"
                      className="darkicon"
                    />
                    {!mobile && <span className="darkmode">DARK MODE ON</span>}
                  </label>
                )}
              </Button>
            </div>
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
                smooth="true"
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
                    smooth="true"
                    to={`${imsi}/aboutus/#whoweare`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">Who We Are</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/aboutus/#heringsteam`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">HERINGS Team</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
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
                smooth="true"
                to={`${imsi}/service/#service`}
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
                    SERVICE
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
                    smooth="true"
                    to={`${imsi}/service/#digitalcareservice`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Digital Care Service
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobileMenudiv">
              <Link
                smooth="true"
                to={`${imsi}/research/#research`}
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
                    RESEARCH
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
                    smooth="true"
                    to={`${imsi}/research/#nutritionincancercare`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Nutrition in Cancer Care
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#drugadverseevent`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Drug Adverse Event
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#recurrenceprediction`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Recurrence Prediction
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#exercise`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">Excercise</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#aibasedostomyconditioncheck`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      AI Based Ostomy Condition Check
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#adherenceofhormonetherapy`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Adherence of Hormone Therapy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mobileMenudiv">
              <Link
                smooth="true"
                to={`${imsi}/crs/#crs`}
                onClick={(e) => {
                  mobilemenuclick(e, 3);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 3 ? "mobilemenusactive" : ""
                    }`}
                  >
                    CRS
                  </span>
                  {mobileSelected === 3 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 3
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#propreplatform`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      PRO · PRE Platform
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#datamanagement`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Data Management
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#biostatistics`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Bio Statistics
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#clinicaloperation`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      Clinical Operation
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mobileMenudiv">
              <Link
                smooth="true"
                to={`${imsi}/news/#news`}
                onClick={(e) => {
                  mobilemenuclick(e, 4);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 4 ? "mobilemenusactive" : ""
                    }`}
                  >
                    NEWS & IR
                  </span>
                  {mobileSelected === 4 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 4
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/news/#newsrelease`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">NEWS RELEASE</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/news/#irinformation`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">
                      IR INFORMATION
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mobileMenudiv">
              <Link
                smooth="true"
                to={`${imsi}/contactus/#contactus`}
                onClick={(e) => {
                  mobilemenuclick(e, 5);
                }}
              >
                <div className="mobileMenuRow">
                  <span
                    className={`FontEB textF22 menuText ${
                      mobileSelected === 5 ? "mobilemenusactive" : ""
                    }`}
                  >
                    CONTACT US
                  </span>
                  {mobileSelected === 5 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon>expand_more</Icon>
                  )}
                </div>
              </Link>
              <ul
                className={`mobileMenuul ${
                  mobileSelected === 5
                    ? "mobilemenuslider"
                    : "mobilemenuslideroff"
                }`}
              >
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/contactus/#career`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">CAREER</span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/contactus/#contact`}
                    onClick={menuclick}
                  >
                    <span className="menuText FontB textF18">CONTACT</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`menuWrapDiv ${
          isOver
            ? "menuWrapOver"
            : isScroll
            ? "menuWrapOver isScrolledmenu"
            : ""
        }`}
        style={{ backgroundColor: theme === "dark" && "#282828" }}
        onMouseEnter={menuover}
        onMouseLeave={menuout}
      >
        <div className="mewnuWrap">
          <div className="menulogo">
            <NavLink to={`${imsi}/`}>
              <div className="logoImgContainCenter">
                {theme === "light" ? (
                  <HeringsLogo
                    style={{
                      fill:
                        props.slideIndex === 0 && pathname === "/"
                          ? "#000"
                          : "",
                    }}
                  />
                ) : (
                  <HeringsLogoDark
                    style={{
                      fill:
                        props.slideIndex === 0 && pathname === "/"
                          ? "#fff"
                          : "",
                    }}
                  />
                )}
              </div>
            </NavLink>

            {/* GNB 대메뉴 */}
          </div>
          <div className="menusAfterLogo">
            <div className="menudiv">
              <Link
                smooth="true"
                to={`${imsi}/aboutus/#aboutus`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
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
                smooth="true"
                to={`${imsi}/service/#service`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  SERVICE
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link
                smooth="true"
                to={`${imsi}/research/#research`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  RESEARCH
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link smooth="true" to={`${imsi}/crs/#crs`} onClick={menuclick}>
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  CRS
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link smooth="true" to={`${imsi}/news/#news`} onClick={menuclick}>
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
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
                smooth="true"
                to={`${imsi}/contactus/#contactus`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
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
          {/* Dark Mode Toggle */}
          <div className="menudiv">
            <Button className="modebutton" id="modebutton" onClick={changeMode}>
              {theme === "dark" ? (
                <label htmlFor="modebutton" className="lighttoggle">
                  <img
                    src={DarkModeOffIcon}
                    alt="dark mode icon"
                    className="lighticon"
                  />
                  <span className="lightmode">LIGHT MODE ON</span>
                </label>
              ) : (
                <label htmlFor="modebutton" className="darktoggle">
                  <img
                    src={DarkModeOnIcon}
                    alt="dark mode icon"
                    className="darkicon"
                  />
                  <span className="darkmode">DARK MODE ON</span>
                </label>
              )}
            </Button>
          </div>
        </div>

        {/* ABOUT US 하단 메뉴 */}
        <div
          className={`${theme === "light" ? "menuDetail" : "menuDetailDark"} ${
            isOver ? "part" : "partHide"
          }`}
          style={{ backgroundColor: theme === "dark" && "#282828" }}
        >
          <div className="menuDetailRow">
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link
                smooth="true"
                to={`${imsi}/aboutus/#aboutus`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  ABOUT US
                </span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/aboutus/#whoweare`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Who We Are
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/aboutus/#heringsteam`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      HERINGS Team
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/aboutus/#researchpartners`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Partners &amp; Investors
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICE 하단 메뉴 */}
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link
                smooth="true"
                to={`${imsi}/service/#service`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  SERVICE
                </span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/service/#digitalcareservice`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Digital Care Service
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESEARCH 하단 메뉴 */}
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link
                smooth="true"
                to={`${imsi}/research/#research`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  RESEARCH
                </span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#nutritionincancercare`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Nutrition in Cancer Care
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#drugadverseevent`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Drug Adverse Event
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#recurrenceprediction`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Recurrence Prediction
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#exercise`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Excercise
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#aibasedostomyconditioncheck`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                      style={{ display: "block" }}
                    >
                      AI-Based Ostomy
                    </span>
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                      style={{ display: "block" }}
                    >
                      Condition Check
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/research/#adherenceofhormonetherapy`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                      style={{ display: "block" }}
                    >
                      Adherence of Hormone
                    </span>
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                      style={{ display: "block" }}
                    >
                      Therapy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* CRS 하단 메뉴 */}
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link smooth="true" to={`${imsi}/crs/#crs`} onClick={menuclick}>
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  CRS
                </span>
              </Link>
              <ul className="menuul">
                <Link
                  smooth="true"
                  to={`${imsi}/crs/#propreplatform`}
                  onClick={menuclick}
                >
                  <span
                    className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                  >
                    PRO · PRE Platform
                  </span>
                </Link>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#datamanagement`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Data Management
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#biostatistics`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Bio-Statistics
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/crs/#clinicaloperation`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Clinical Operation
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* NEWS 하단 메뉴 */}
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link smooth="true" to={`${imsi}/news/#news`} onClick={menuclick}>
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  NEWS & IR
                </span>
              </Link>
              <ul className="menuul">
                <Link
                  smooth="true"
                  to={`${imsi}/news/#newsrelease`}
                  onClick={menuclick}
                >
                  <span
                    className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                  >
                    News Release
                  </span>
                </Link>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/news/#irinformation`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      IR Information
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT US 하단 메뉴 */}
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link
                smooth="true"
                to={`${imsi}/contactus/#contactus`}
                onClick={menuclick}
              >
                <span
                  className={`textF18 ${theme === "light" ? "tcb" : "tcw"}`}
                >
                  CONTACT US
                </span>
              </Link>
              <ul className="menuul">
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/contactus/#career`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Career
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    smooth="true"
                    to={`${imsi}/contactus/#contact`}
                    onClick={menuclick}
                  >
                    <span
                      className={`textF15 ${theme === "light" ? "tcg" : "tcw"}`}
                    >
                      Contact{" "}
                    </span>
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
