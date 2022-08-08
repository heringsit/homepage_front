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
import { MediaQueryContext, ThemeContext } from "../../context";
import DarkToggle from "./DarkToggle";

export default function Menubar(props) {
  const pathname = useLocation().pathname;
  const imsi = process.env.PUBLIC_URL;
  smoothscroll.polyfill();
  // const matches = useMediaQuery("(max-width:1260px)");
  // const mobile = useMediaQuery("(max-width:320px)");
  const { mDesktop, mobile } = useContext(MediaQueryContext);
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
  const MENU = {
    title: [
      "ABOUT US",
      "SERVICE",
      "RESEARCH",
      "CTS",
      "NEWS & IR",
      "CONTACT US",
    ],
    link: [
      `${imsi}/aboutus/#aboutus`,
      `${imsi}/service/#service`,
      `${imsi}/research/#research`,
      `${imsi}/crs/#crs`,
      `${imsi}/news/#news`,
      `${imsi}/contactus/#contactus`,
    ],
    smallMenu: [
      {
        title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
        link: [
          `${imsi}/aboutus/#whoweare`,
          `${imsi}/aboutus/#heringsteam`,
          `${imsi}/aboutus/#researchpartners`,
        ],
      },
      {
        title: [
          "DIGITAL HEALTHCARE SERVICE PLATFORM",
          "TELE-HEALTHCARE SERVICE PLATFORM",
        ],
        link: [
          `${imsi}/service/#digitalcareservice`,
          `${imsi}/service/#telehealthcareservice`,
        ],
      },
      {
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
      },
      {
        title: [
          "CLINICAL TRIAL DESIGN",
          "DATA MANAGEMENT",
          "STATISTICAL ANALYSIS",
        ],
        link: [
          `${imsi}/crs/#clinicaltrialdesign`,
          `${imsi}/crs/#datamanagement`,
          `${imsi}/crs/#statisticalanalysis`,
        ],
      },
      {
        title: ["NEWS RELEASE", "IR INFORMATION"],
        link: [`${imsi}/news/#newsrelease`, `${imsi}/news/#irinformation`],
      },
      {
        title: ["CAREER", "CONTACT US"],
        link: [`${imsi}/contactus/#career`, `${imsi}/contactus/#contact`],
      },
    ],
  };
  const scrollWithOffset = (el, yOffset = -90) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  if (mDesktop) {
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
            {MENU.title.map((menu, idx) => (
              <div className="mobileMenuDiv" key={idx}>
                <Link
                  smooth="true"
                  to={MENU.link[idx]}
                  onClick={(e) => {
                    mobilemenuclick(e, idx);
                  }}
                >
                  <div className="mobileMenuRow">
                    <span
                      className={`FontEB textF22  menuText ${
                        mobileSelected === idx ? "mobilemenusactive" : ""
                      }
                       ${theme === "light" ? "tcb" : "tcw"}`}
                    >
                      {menu}
                    </span>
                    {mobileSelected === idx ? (
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
                    mobileSelected === idx
                      ? "mobilemenuslider"
                      : "mobilemenuslideroff"
                  }`}
                >
                  {MENU.smallMenu[idx].title.map((smallMenu, i) => (
                    <li key={i}>
                      <Link
                        smooth="true"
                        to={MENU.smallMenu[idx].link[i]}
                        onClick={menuclick}
                      >
                        <span
                          className={`menuText textF18 FontB ${
                            theme === "light" ? "tcg" : "tcw"
                          }`}
                        >
                          {smallMenu}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          pathname === "/aboutus/" ||
          pathname === "/research/" ||
          pathname === "/crs/"
            ? theme === "dark"
              ? "menuBorderBottomDark"
              : "menuBorderBottomLight"
            : ""
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#282828" : "#ffffff",
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
            {MENU.title.map((menu, idx) => (
              <div className="menudiv" key={idx}>
                <Link smooth="true" to={MENU.link[idx]} onClick={menuclick}>
                  <span
                    className={`menuText textF18 FontR ${
                      props.slideIndex === 0
                        ? theme === "light"
                          ? "tcb"
                          : "tcw"
                        : "tcb"
                    }`}
                  >
                    {menu}
                  </span>
                </Link>
              </div>
            ))}
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
          <div className="menuDetailRow">
            {MENU.title.map((menu, idx) => (
              <div
              key={idx}
                className={`${
                  theme === "light" ? "menuDetailDiv" : "menuDetailDivDark"
                }`}
              >
                <Link smooth={true} to={MENU.link[idx]} onClick={menuclick}>
                  <span
                    className={`menuText textF18 FontR ${
                      theme === "light" ? "tcb" : "tcw"
                    }`}
                  >
                    {menu}
                  </span>
                </Link>
                <ul className="menuul">
                  {MENU.smallMenu[idx].title.map((smallMenu, i) => (
                    <li key={i}>
                      <Link
                        smooth={true}
                        to={MENU.smallMenu[idx].link[i]}
                        scroll={(el) => scrollWithOffset(el, -189)}
                        onClick={menuclick}
                      >
                        <span
                          className={`menuText FontR ${
                            theme === "light" ? "tcg" : "tcw"
                          }`}
                        >
                          {smallMenu}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
