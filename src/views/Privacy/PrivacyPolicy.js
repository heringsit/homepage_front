import React, { useContext, useEffect, useRef, useState } from "react";
import { MediaQueryContext, ThemeContext } from "../../context";
import TabClick from "../common/TabClick";
import Footer from "../Components/Footer";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import useOnScreen from "../hooks/objectObserver";
export default function PrivacyPolicy() {
  const { mTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);

  const [isScroll, setIsScroll] = useState(false);
  const [slideIndex] = useState(0);

  function goPrivacy() {

  }

  const onScroll = () => {
    if (window.scrollY > 238 || window.pageYOffset > 238) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  // 모바일 메뉴
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);

  // Scroll Tracker
  const scrollElem = Array.from(Array(2).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(2).fill(true);
  visibleArray[0] = useOnScreen(refs.current[0]);
  visibleArray[1] = useOnScreen(refs.current[1]);

  return (
    <div
      id="privacypolicy"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "#fff",
      }}
    >
      <Menubar slideIndex={slideIndex} />
      {!mTablet && <TabClick visibleArray={visibleArray} isScroll={isScroll} />}
      <div id="healiary" ref={refs.current[0]}>
        {/* 버튼 3개  */}
        <div>
          <span onClick={goPrivacy}>개인 정보 처리 방침</span>
        </div>
        {/* title */}
        {/* content */}
      </div>
      <div id="ostomy" ref={refs.current[1]}></div>
      <Totop />
      <Footer />
    </div>
  );
}
