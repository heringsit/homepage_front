import React, { useState } from "react";
//import iconClose from "../../assets/images/02about_herings_team/window-close.svg";
import Menubar from "../Components/Menubar";
import Totop from "../Components/Totop";
import ContentsTitle from "../Components/ContentsTitle";
import Footer from "../Components/Footer";
import Career from "./Career";

import "./Contactus.css";
import { useContext } from "react";
import { MediaQueryContext, ThemeContext } from "../../context";

export default function ContactUs() {
  //const imsi = process.env.PUBLIC_URL;
  // const matches = useMediaQuery("(max-width:600px)");
  const { sTablet } = useContext(MediaQueryContext);
  const { theme } = useContext(ThemeContext);
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
            className="ContactButtonLink FontR"
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
            className="ContactButtonLink FontR"
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

  return (
    <div
      id="content"
      className="content"
      style={{
        backgroundColor: theme === "dark" && "#282828",
        color: theme === "dark" && "white",
      }}
    >
      <Menubar slideIndex={0} />
      <Totop />
      <div id="contactus">
        <div className="pt-97" />
        <ContentsTitle matches={sTablet} title={"CONTACT US"} />
        <Career matches={sTablet} />
        <div className="SectionDiv" id="contact">
          <div className="titleDiv">
              <span className="textT22 FontEB">CONTACT</span>
            <hr></hr>
          </div>
          <div className="subTitleDiv">
            <div className="contactusSubTitle textT22 FontR">
              <span className="tcgreen1 textT22 FontEB">We are here to help.</span> Want to
              learn more about our services?
              <br />
              Please get in touch,{" "}
              <span className="tco textT22 FontEB">we'd love to hear from you!</span>
            </div>
          </div>
          <div className="contactusContentsDiv">
            <div className="contractusMapWrap">
              <div className="contractusMap">
                <iframe
                  title="maps"
                  className="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0098946623134!2d127.03767551516597!3d37.50768477980899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f7e3020f01%3A0x1277a3bb7d2a84c8!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsl63sgrzrj5kg7Ja47KO866GcIDU2MA!5e0!3m2!1sko!2skr!4v1570788489588!5m2!1sko!2skr"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="squareDiv tcw">
              <div className="textF20 FontR">
                <span className="textF40 FontB">OFFICE</span> 14th Floor, 560,
                Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
              </div>
              <hr></hr>
              <div className="FontR textF16">
                <span className="tcgreen3 FontB">TEL</span>+82.02.6949.3516
                <span className="tcgreen3 FontB">FAX</span>+82.02.6949.3517
              </div>
            </div>
            <div className="contactusInputDiv">
              <form
                method="POST"
                className="contactusInputForm "
                id="contactDatas"
              >
                <input
                  type="text"
                  onChange={onChange}
                  placeholder="Name"
                  name="cName"
                  className={`FontR textF14 ${inputClassNameHelper(isEnteredNameValid())}`}
                />
                <input
                  type="text"
                  onChange={onChange}
                  placeholder="Email"
                  name="cEmail"
                  className={`FontR textF14 ${inputClassNameHelper(isEnteredEmailValid())}`}
                />
                <input
                  type="text"
                  onChange={onChange}
                  placeholder="Phone"
                  name="cPhone"
                  className={`FontR textF14 ${inputClassNameHelper(isEnteredPhoneValid())}`}
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
          </div>
        </div>
        <Footer />
      </div>
      <div></div>
    </div>
  );
}
