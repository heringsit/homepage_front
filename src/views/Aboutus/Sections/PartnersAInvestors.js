import React, { useContext } from "react";
// import { MediaQueryContext } from "../../../context";
import p_logo_01 from "../../../assets/images/02about_partners/01suh.png";
import p_logo_02 from "../../../assets/images/02about_partners/02gsh.png";
import p_logo_03 from "../../../assets/images/02about_partners/03auh.png";
import p_logo_04 from "../../../assets/images/02about_partners/04eumc.png";
import p_logo_05 from "../../../assets/images/02about_partners/05cuh.png";
import p_logo_06 from "../../../assets/images/02about_partners/06gudh.png";
import p_logo_07 from "../../../assets/images/02about_partners/07ssh.png";
import p_logo_08 from "../../../assets/images/02about_partners/08kcsg1.png";
import p_logo_09 from "../../../assets/images/02about_partners/KGOG.png";
import p_logo_10 from "../../../assets/images/02about_partners/09hu.png";
import p_logo_11 from "../../../assets/images/02about_partners/10pu.png";
import i_logo_01 from "../../../assets/images/02about_investors/01alpen_n.svg";
import i_logo_02 from "../../../assets/images/02about_investors/02korea_n.svg";
import i_logo_03 from "../../../assets/images/02about_investors/03venture_n.svg";
import i_logo_04 from "../../../assets/images/02about_investors/04cap_n.svg";
import i_logo_05 from "../../../assets/images/02about_investors/05coree.png";
import i_logo_06 from "../../../assets/images/02about_investors/06kakaotalk.png";
import { ThemeContext } from "../../../context";
import CommonCardTitle from "../../common/CommonCardTitle";

export default function PartnersAInvestors(props) {
  const { theme } = useContext(ThemeContext);
  // const { mobile } = useContext(MediaQueryContext);
  return (
    <div className={`aboutuscontents`}>
      <div className="pt-48" />
      {/* {!props.matches && <CommonCardTitle title="PARTNERS & INVESTORS" fontSize="textF28" />} */}
      <div className="aboutustitle">
        <CommonCardTitle
          title={"PARTNERS & INVESTORS"}
          fontStyle={"FontCB"}
          fontSize={"textF40"}
        />
        {/* <div
          className={`${theme === "dark" ? "aboutuslineDark" : "aboutusline"}`}
        ></div> */}
      </div>
      <div className="SectionDivTailContent">
        <div className="researchWrap">
          {props.matches ? (
            <div className="Subtitle">
              <div className="textF28 FontEB">
                <span>
                  <span style={{ color: "#F68C29" }}>RESEARCH</span> PARTNERS
                </span>
              </div>
              <hr></hr>
            </div>
          ) : (
            <div className="textF28 Subtitle">
              <span className="FontB" style={{ color: "#F68C29" }}>
                RESEARCH
              </span>
              <span className="FontR">PARTNERS</span>
            </div>
          )}
          <div className="PAIDiv">
            <div className="partner__image__container">
              <img src={p_logo_01} alt="SNUH" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_02} alt="GSH" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_03} alt="AUH" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_04} alt="EUMC" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_05} alt="CNUH" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_06} alt="GUDH" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_07} alt="SSMC" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_08} alt="KCSG" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_09} alt="KGOG" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_10} alt="HGU" />
            </div>
            <div className="partner__image__container">
              <img src={p_logo_11} alt="Pusan Medical" />
            </div>
          </div>
        </div>
        <div className="researchWrap">
          {props.matches ? (
            <div className="Subtitle">
              <div className="textF24 FontEB">
                <span>INVESTORS</span>
              </div>
              <hr></hr>
            </div>
          ) : (
            <div className="textF24 Subtitle">
              <span className="FontB">INVESTORS</span>
            </div>
          )}
          <div className="PAIDiv">
            <div className="inventors__image__container">
              <img src={i_logo_02} alt="korea" />
            </div>
            <div className="inventors__image__container">
              <img src={i_logo_05} alt="coree" />
            </div>
            <div className="inventors__image__container">
              <img src={i_logo_04} alt="cap" />
            </div>
            <div className="inventors__image__container">
              <img src={i_logo_03} alt="venture" />
            </div>
            <div className="inventors__image__container">
              <img src={i_logo_01} alt="alpen" />
            </div>
            <div className="inventors__image__container">
              <img src={i_logo_06} alt="kakaotalk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
