import React, { useContext, useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Icon from "@material-ui/core/Icon";
import { HamburgerSqueeze } from "react-animated-burgers";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import herings_logo_b from "../../assets/images/etc/heringsLOGO_black.svg";
import herings_logo_w from "../../assets/images/etc/heringsLOGO_white.svg";
import herings_logo_m from "../../assets/images/etc/heringsLOGO_mobile.svg";
import { ReactComponent as HeringsLogo } from "../../assets/images/etc/heringsLOGO.svg";
import { ReactComponent as HeringsLogoDark } from "../../assets/images/etc/heringsLOGO_dark.svg";
import "./Menubar.css";
import { MediaQueryContext, ThemeContext } from "../../context";
import DarkToggle from "./DarkToggle";
import { MENU } from "./MenuList";

export default function Menubar(props) {
  const pathname = useLocation().pathname;
  const imsi = process.env.PUBLIC_URL;
  smoothscroll.polyfill();
  const { mDesktop, mTablet, mobile } = useContext(MediaQueryContext);
  const [isOver, setIsOver] = useState(false);
  const [isMActive, setIsMActive] = useState(false);
  const [mobileSelected, setMobileSelected] = useState(null);
  const [isScroll, setIsScroll] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  // const [mode, setMode] = useState(theme);
  const scrollOffset = (mTablet 
    ? [-84, -(84+40), -84, -84, 0, 0] // screen < 768px
    : [-(84+100), -(84+40), -184, -184, 0, 0]) // screen > 768px
  // console.log(pathname === "/", ">pathname");

  const changeMode = () => changeTheme(theme === "light" ? "dark" : "light");

  const mobilemenuclick = (e, val) => {
    e.preventDefault();
    val === mobileSelected ? setMobileSelected(null) : setMobileSelected(val);
  };

  const menuclick = (e, key) => {
    setIsMActive(!isMActive);
    setMobileSelected(null);
    setIsOver(false);
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

  const scrollWithOffset = (el, yOffset = -90) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  if (mDesktop) {
    return (
      <div className="mobileMenuWrapDiv">
        <div
          className={`mobileMenuroot  ${
            theme === "dark" ? "menuBorderBottomDark" : "menuBorderBottomLight"
          }`}
          style={{ backgroundColor: theme === "dark" && "#282828" }}
          onMouseEnter={menuover}
          onMouseLeave={menuout}
        >
          <div className="mobileMenulogo ptb-10 flex align-items-center">
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
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                        smooth="true"
                        to={MENU.smallMenu[idx].link[i]}
                        scroll={(el) => scrollWithOffset(el, scrollOffset[idx])}
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
        className={`menuWrapDiv position-fixed w-full flex-col ${
          isOver && "menuWrapOver"
        } ${
          theme === "dark" ? "menuBorderBottomDark" : "menuBorderBottomLight"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#282828" : "#ffffff",
          color: theme === "dark" && "white",
        }}
        onMouseEnter={menuover}
        onMouseLeave={menuout}
      >
        <div
          className="menuWrap"
          
        >
          {/* <div className="menulogo"> */}
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
          {/* </div> */}

          {/* GNB 대메뉴 */}
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
                        scroll={(el) => scrollWithOffset(el, scrollOffset[idx])}
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
