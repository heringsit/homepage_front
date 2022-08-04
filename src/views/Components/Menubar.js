import React, { useContext, useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Icon from "@material-ui/core/Icon";
import { HamburgerSqueeze } from "react-animated-burgers";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import herings_logo_b from "../../assets/images/etc/heringsLOGO_black.svg";
import herings_logo_w from "../../assets/images/etc/heringsLOGO_white.svg";
import herings_logo_m from "../../assets/images/etc/heringsLOGO_mobile.svg";
import { ReactComponent as HeringsLogo } from "../../assets/images/etc/heringsLOGO.svg";
import { ReactComponent as HeringsLogoDark } from "../../assets/images/etc/heringsLOGO_dark.svg";
import "./Menubar.css";
import { ThemeContext } from "../../context";
import DarkToggle from "./DarkToggle";

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
    console.log("enter");
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

  // 메뉴 텍스트
  const ABOUTUS = {
    title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
    link: [
      `${imsi}/aboutus/#whoweare`,
      `${imsi}/aboutus/#heringsteam`,
      `${imsi}/aboutus/#researchpartners`,
    ],
  };
  const SERVICE = {
    title: [
      "DIGITAL HEALTHCARE SERVICE PLATFORM",
      "TELE-HEALTHCARE SERVICE PLATFORM",
    ],
    // service link 수정하기
    link: [
      `${imsi}/service/#digitalcareservice`,
      `${imsi}/service/#telehealthcareservice`,
    ],
  };
  const RESEARCH = {
    title: [
      "NUTRITION",
      "SYMPTOM MANAGEMENT",
      "EXERCISE",
      "RISK PREDICTION",
      "DRUG ADHERENCE",
      "AI ALGORITHMS",
      "DRUG ADVERSE EVENTS",
    ],
    // link 수정해야함
    link: [
      `${imsi}/research/#nutrition`,
      `${imsi}/research/#symptommanagement`,
      `${imsi}/research/#exercise`,
      `${imsi}/research/#riskprediction`,
      `${imsi}/research/#drugadherence`,
      `${imsi}/research/#aialgorithms`,
      `${imsi}/research/#drugadverseevents`,
    ],
  };
  const CTS = {
    title: ["CLINICAL TRIAL DESIGN", "DATA MANAGEMENT", "STATISTICAL ANALYSIS"],
    link: [
      `${imsi}/crs/#propreplatform`,
      `${imsi}/crs/#datamanagement`,
      `${imsi}/crs/#biostatistics`,
    ],
  };
  const NEWSIR = {
    title: ["NEWS RELEASE", "IR INFORMATION"],
    link: [`${imsi}/news/#newsrelease`, `${imsi}/news/#irinformation`],
  };
  const CONTACTUS = {
    title: ["CAREER", "CONTACT US"],
    link: [`${imsi}/contactus/#career`, `${imsi}/contactus/#contact`],
  };

  if (matches) {
    return (
      <div className="mobileMenuWrapDiv">
        <div
          className="mobileMenuroot"
          style={{ backgroundColor: theme === "dark" && "#282828" }}
          onMouseEnter={menuover}
          onMouseLeave={menuout}
        >
          <div className="mobileMenulogo">
            <NavLink to={`${imsi}/`}>
              <div
                className="logoImgContainCenterM"
                style={
                  mobile
                    ? { backgroundImage: "url('" + herings_logo_m + "')" }
                    : theme === "light"
                    ? {
                        backgroundImage: "url('" + herings_logo_b + "')",
                      }
                    : {
                        backgroundImage: "url('" + herings_logo_w + "')",
                      }
                }
              ></div>
            </NavLink>

            <div className="buttons">
              {/* Dark Mode Toggle */}
              <DarkToggle
                onClick={changeMode}
                className="modediv"
                mobile={mobile}
              />

              <div className="mobileBtn">
                <HamburgerSqueeze
                  className="mobileBtnHambuger"
                  isActive={isMActive}
                  toggleButton={menuclick}
                  buttonWidth={25}
                  buttonColor={theme === "light" ? "#FFF" : "#282828"}
                  barColor={theme === "light" ? "black" : "white"}
                />
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className={`mobileMenus ${isMActive ? "slider" : "slideroff"}`}>
            {/* ABOUT US */}
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
                    className={`FontEB textF22  menuText ${
                      mobileSelected === 0 ? "mobilemenusactive" : ""
                    }
                       ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    ABOUT US
                  </span>
                  {mobileSelected === 0 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {ABOUTUS.title.map((about, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={ABOUTUS.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {about}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* SERVICE */}
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
                    } ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    SERVICE
                  </span>
                  {mobileSelected === 1 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {SERVICE.title.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={SERVICE.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {service}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* RESEARCH */}
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
                    } ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    RESEARCH
                  </span>
                  {mobileSelected === 2 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {RESEARCH.title.map((research, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={RESEARCH.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {research}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTS */}
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
                    } ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    CTS
                  </span>
                  {mobileSelected === 3 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {CTS.title.map((cts, idx) => (
                  <li key={idx}>
                    <Link smooth="true" to={CTS.link[idx]} onClick={menuclick}>
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {cts}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWS & IR */}
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
                    } ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    NEWS & IR
                  </span>
                  {mobileSelected === 4 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {NEWSIR.title.map((news, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={NEWSIR.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {news}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US */}
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
                    } ${theme === "light" ? "tcb" : "tcw"}`}
                  >
                    CONTACT US
                  </span>
                  {mobileSelected === 5 ? (
                    <Icon style={{ color: "#E78510" }}>expand_less</Icon>
                  ) : (
                    <Icon style={{ color: theme === "dark" && "#fff" }}>
                      expand_more
                    </Icon>
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
                {CONTACTUS.title.map((contact, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={CONTACTUS.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText FontB ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {contact}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`menuWrapDiv ${isOver ? "menuWrapOver " : ""} ${
          isScroll
            ? "menuWrapOver " +
              (theme === "dark"
                ? "menuBorderBottomDark "
                : "menuBorderBottomLight ")
            : ""
        } ${
          pathname === "/aboutus/" || pathname === "/research/"
            ? theme === "dark"
              ? "menuBorderBottomDark"
              : "menuBorderBottomLight"
            : ""
        }`}
        style={{
          backgroundColor: theme === "dark" && "#282828",
          color: theme === "dark" && "white",
        }}
        onMouseEnter={menuover}
        onMouseLeave={menuout}
      >
        <div className="menuWrap">
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
                  className={`menuText textF18 FontR ${
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
                  className={`menuText textF18 FontR ${
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
                  className={`menuText textF18 FontR ${
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
                  className={`menuText textF18 FontR ${
                    props.slideIndex === 0
                      ? theme === "light"
                        ? "tcb"
                        : "tcw"
                      : "tcb"
                  }`}
                >
                  CTS
                </span>
              </Link>
            </div>
            <div className="menudiv">
              <Link smooth="true" to={`${imsi}/news/#news`} onClick={menuclick}>
                <span
                  className={`menuText textF18 FontR ${
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
                  className={`menuText textF18 FontR ${
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
          <DarkToggle
            onClick={changeMode}
            className="menudiv"
            mobile={mobile}
          />
        </div>

        {/* 소메뉴 */}
        <div
          className={`${theme === "light" ? "menuDetail" : "menuDetailDark"} ${
            isOver ? "part" : "partHide"
          }`}
          style={{
            backgroundColor: theme === "dark" && "#282828",
          }}
        >
          {/* ABOUT US 하단 메뉴 */}
          <div className="menuDetailRow">
            <div
              className={`${
                theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
              }`}
            >
              <Link
                smooth={true}
                to={`${imsi}/aboutus/#aboutus`}
                onClick={menuclick}
              >
                <span
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  ABOUT US
                </span>
              </Link>
              <ul className="menuul">
                {ABOUTUS.title.map((aboutus, idx) => (
                  <li key={idx}>
                    <Link
                      smooth={true}
                      to={ABOUTUS.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {aboutus}
                      </span>
                    </Link>
                  </li>
                ))}
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
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  SERVICE
                </span>
              </Link>
              <ul className="menuul">
                {SERVICE.title.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={SERVICE.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {service}
                      </span>
                    </Link>
                  </li>
                ))}
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
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  RESEARCH
                </span>
              </Link>
              <ul className="menuul">
                {RESEARCH.title.map((research, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={RESEARCH.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {research}
                      </span>
                    </Link>
                  </li>
                ))}
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
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  CTS
                </span>
              </Link>
              <ul className="menuul">
                {CTS.title.map((cts, idx) => (
                  <li key={idx}>
                    <Link smooth="true" to={CTS.link[idx]} onClick={menuclick}>
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {cts}
                      </span>
                    </Link>
                  </li>
                ))}
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
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  NEWS & IR
                </span>
              </Link>
              <ul className="menuul">
                {NEWSIR.title.map((news, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={NEWSIR.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {news}
                      </span>
                    </Link>
                  </li>
                ))}
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
                  className={`menuText textF18 ${
                    theme === "light" ? "tcb" : "tcw"
                  }`}
                >
                  CONTACT US
                </span>
              </Link>
              <ul className="menuul">
                {CONTACTUS.title.map((contact, idx) => (
                  <li key={idx}>
                    <Link
                      smooth="true"
                      to={CONTACTUS.link[idx]}
                      onClick={menuclick}
                    >
                      <span
                        className={`menuText textF15 ${
                          theme === "light" ? "tcg" : "tcw"
                        }`}
                      >
                        {contact}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
