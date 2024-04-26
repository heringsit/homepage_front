import React, { useContext, useEffect, useRef, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//import iconClose from "../../assets/images/02about_herings_team/window-close.svg";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import ContentsTitle from "../Components/ContentsTitle";
import Footer from "../Components/Footer";
import Career from "./Career";

import "./Contactus.css";
import CommonCardTitle from "../common/CommonCardTitle";
import { ThemeContext, MediaQueryContext } from "../../context";
import useOnScreen from "../hooks/objectObserver";
import TabClick from "../common/TabClick";
import { useHistory } from "react-router-dom";

export default function ContactUs(props) {
  //const imsi = process.env.PUBLIC_URL;
  const matches = useMediaQuery("(max-width:600px)");
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cMessage, setCMessage] = useState("");

  const [iscNameValid, setIscNameValid] = useState(false);
  const [iscEmailValid, setIscEmailValid] = useState(false);
  const [iscPhoneValid, setIscPhoneValid] = useState(false);
  const [iscMessageValid, setIscMessageValid] = useState(false);

  const inputClassNameHelper = (boolean) => {
    switch (boolean) {
      case true:
        return "check-val";
      case false:
        return "check-inval";
      default:
        return "";
    }
  };

  const isEnteredNameValid = () => {
    if (cName) return iscNameValid;
  };
  const isEnteredEmailValid = () => {
    if (cEmail) return iscEmailValid;
  };
  const isEnteredPhoneValid = () => {
    if (cPhone) return iscPhoneValid;
  };
  const isEnteredMessageValid = () => {
    if (cMessage) return iscMessageValid;
  };
  const isEveryFormOK = () => {
    return iscNameValid && iscEmailValid && iscPhoneValid && iscMessageValid;
  };

  const renderSubmitBtn = () => {
    if (isEveryFormOK()) {
      return (
        <div className="contactSquareButton">
          <span
            className="ContactButtonLink FontB"
            style={{ fontSize: "1.044vw" }}
            // style={{ fontSize: "20px" }}
            onClick={(e) => submitData(e)}
          >
            SEND MESSAGE
          </span>
        </div>
      );
    } else {
      return (
        <div className="contactSquareButtonDisable">
          <span
            className="ContactButtonLink FontB"
            style={{ fontSize: "1.044vw" }}
            // style={{ fontSize: "20px" }}
            onClick={(e) => checkData(e)}
          >
            SEND MESSAGE
          </span>
        </div>
      );
    }
  };

  const checkData = () => {
    alert("모든 항목을 입력해 주셔야합니다.");
  };

  const onChange = (e) => {
    const emailRegExp =
      /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    const phoneNumberRegExp2 = /^\d{3}\d{3,4}\d{4}$/;
    switch (e.target.name) {
      case "cName":
        if (e.target.value.length > 1) {
          setCName(e.target.value);
          setIscNameValid(true);
        } else {
          setIscNameValid(false);
        }
        break;
      case "cEmail":
        if (e.target.value.match(emailRegExp)) {
          setCEmail(e.target.value);
          setIscEmailValid(true);
        } else {
          setCEmail(e.target.value);
          setIscEmailValid(false);
        }
        break;
      case "cPhone":
        if (
          e.target.value.match(phoneNumberRegExp) ||
          e.target.value.match(phoneNumberRegExp2)
        ) {
          setCPhone(e.target.value);
          setIscPhoneValid(true);
        } else {
          setCPhone(e.target.value);
          setIscPhoneValid(false);
        }
        break;
      case "cMessage":
        if (e.target.value.length > 1) {
          setCMessage(e.target.value);
          setIscMessageValid(true);
        } else {
          setIscMessageValid(true);
        }
        break;
      default:
        return "";
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    //console.log("click~");
    onSubmit(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let resGetter = 0;
    var sendobj = {
      cName: cName,
      cEmail: cEmail,
      cPhone: cPhone,
      cMessage: cMessage,
    };

    fetch("/api/contactus", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(sendobj),
    })
      .then((response) => response.json())
      .then((result) => {
        resGetter = result;
        console.log("getter->" + resGetter);
        if (resGetter) {
          alert("정상적으로 발송되었습니다.");
          window.location.reload();
        } else {
          alert("통신중 에러가 발생했습니다. 다시 한번 시도해주세요.");
        }
      });
  };

  const { theme } = useContext(ThemeContext);
  const { mTablet } = useContext(MediaQueryContext);
  const scrollElem = Array.from(Array(2).keys());
  const refs = useRef(scrollElem.map(() => React.createRef()));
  const visibleArray = Array(2).fill(true);
  // visibleArray[0] = useOnScreen(refs.current[0]);
  // visibleArray[1] = useOnScreen(refs.current[1]);

  // Scroll function
  // update: TabClick function -> NavLink 에서 오는 random 숫자
  // hashId: TabClick function -> NavLink 에서 오는 hashId
  // Tab/Menubar 안에서 NavLink 눌을때 마다 random number가 만들어 집니다.
  // useEffect hook + random number 통해 click 을 track 합니다
  const executeScroll = () => {
    const element = document.getElementById(props.location.hashId);
    const headOffset = mTablet ? 84 : 184;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    executeScroll();
  }, [props.location.update]);

  return (
    <div
      id="contactus"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "#fff",
      }}
    >
      <Menubar slideIndex={0} />

      {/* {!mTablet && <TabClick visibleArray={visibleArray} />} */}

      {/* <ContentsTitle matches={matches} title={"CONTACT US"} />
      <div id="career" ref={refs.current[0]}>
        <Career matches={matches} />
      </div> */}

      <div id="contact">
        <div className="contact_container">
          <div className="contact_section1">
            <div className="contact_text_section1">
              <p className="ir_maintext1">
                Want to learn <br /> more about our services?
              </p>
              <span className="ir_subtext1">
                Please get in touch, We'd love to hear from you!
              </span>
            </div>
          </div>
          {/* <div className="titleDiv">
          <div className="textT22 FontEB">
            <span>CONTACT</span>
          </div>
          <hr></hr>
        </div> */}
          {/* 구간 나뉨 */}
          <div className="contact_section2">
            {/* <div className="subTitleDiv">
          <div
            className={`contactusSubTitle FontL textF22 ${
              theme === "dark" ? "tcw" : "tcg4"
            }`}
          >
            <span className="tcgreen1 FontL">We are here to help.</span> Want to
            learn more about our services?
            <br />
            Please get in touch,{" "}
            <span className="FontL tco">we'd love to hear from you!</span>
          </div>
        </div> */}
            <div className="contactusContentsDiv">
              {/* <div className="squareDiv tcw">
            <div className="textF20 FontL">
              <span className="textF40 FontB">OFFICE</span> 14th Floor, 560,
              Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
            </div>
            <hr></hr>
            <div className="textF16 FontL">
              <span className="tcgreen3 FontB">TEL</span>+82.02.6949.3516
              <span className="tcgreen3 FontB">FAX</span>+82.02.6949.3517
            </div>
          </div> */}
              <div className="contactusInputDiv">
                {/* <CommonCardTitle title="CONTACT" /> */}
                <p className="card_titleLeft">CONTACT</p>
                <form
                  method="POST"
                  className="contactusInputForm "
                  id="contactDatas"
                >
                  <div className="contactusInputNamePhoneLayout">
                    <input
                      type="text"
                      onChange={onChange}
                      placeholder="Name"
                      name="cName"
                      className={`${inputClassNameHelper(
                        isEnteredNameValid()
                      )} FontR textF14 contactusInputNamePhone`}
                    />
                    <input
                      type="text"
                      onChange={onChange}
                      placeholder="Phone"
                      name="cPhone"
                      className={`${inputClassNameHelper(
                        isEnteredPhoneValid()
                      )} FontR textF14 contactusInputNamePhone`}
                    />
                  </div>
                  <input
                    type="text"
                    onChange={onChange}
                    placeholder="Email"
                    name="cEmail"
                    className={`${inputClassNameHelper(
                      isEnteredEmailValid()
                    )} FontR textF14`}
                  />

                  <textarea
                    type="textarea"
                    placeholder="Message"
                    onChange={onChange}
                    style={{
                      height: "123px",
                      resize: "none",
                      overflow: "auto",
                    }}
                    name="cMessage"
                    className={`FontR textF14 ${inputClassNameHelper(
                      isEnteredMessageValid()
                    )}`}
                  />
                  <div className="contactSquareButtonContain">
                    {renderSubmitBtn()}
                  </div>
                </form>
              </div>
              <div className="contractusMapWrap">
                {/* <CommonCardTitle title="OFFICE" /> */}
                <p className="card_titleLeft">OFFICE</p>

                <div className="contractusMap">
                  <iframe
                    title="maps"
                    className="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0098946623134!2d127.03767551516597!3d37.50768477980899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f7e3020f01%3A0x1277a3bb7d2a84c8!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsl63sgrzrj5kg7Ja47KO866GcIDU2MA!5e0!3m2!1sko!2skr!4v1570788489588!5m2!1sko!2skr"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ paddingTop: "2.5vw" }}>
                  {/* <div style={{ paddingTop: "48px" }}> */}
                  <span className="ir_subtext1" style={{ color: "#000000" }}>
                    14th Floor, 560, Eonju-ro, Gangnam-gu,
                    <br /> Seoul, Republic of Korea
                  </span>
                  <p className="contact_sub_text">
                    <span style={{ color: "#008F8F" }}>TEL</span>{" "}
                    +82.02.6949.3516 <br />
                    <span style={{ color: "#008F8F" }}>FAX</span>{" "}
                    +82.02.6949.3517
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Totop />
      <Footer />
    </div>
  );
}
