import { Fade, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import parse from "html-react-parser";
import { ReactComponent as IconClose } from "../../assets/images/05career/close.svg";
import React from "react";
import "./modal.css"

export function CareerModal({ open, handleClose, modalObj }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="flex align-items-center justify-center out-none"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      disableScrollLock={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="paper">
          {modalObj !== JSON.stringify({}) ? (
            <div className="flex-col justify-center overflow-auto">
              <div className="flex-row p-20 w-full">
                <div className="w-95 text-align-center">
                  <span className="FontNB textF26">{modalObj.title}</span>
                </div>
                <IconClose
                  onClick={handleClose}
                  className="careerModalIconSection"
                />
              </div>

              <div className="careerModalContent">
                <div className="careerModalContentCaption tcw FontB textF16">
                  HERINGS Career
                </div>
                <div className="flex-wrap w-full p-20 borderBottom">
                  <div className="flex-col">
                    <div className="readContentsRow ">
                      <div className="tbContentsB FontNB textF16">학력</div>
                      <div className="tbContents tcb FontNR textF16 ">
                        {(() => {
                          switch (modalObj.education) {
                            case "E1":
                              return "학력무관";
                            case "E2":
                              return "전문학사 이상";
                            case "E3":
                              return "학사 이상";
                            case "E4":
                              return "석사 이상";
                            case "E5":
                              return "박사 이상";
                            default:
                              return modalObj.education;
                          }
                        })()}
                      </div>
                    </div>
                    <div className="readContentsRow ">
                      <div className="tbContentsB FontNB textF16">경력</div>
                      <div className="tbContents tcb FontNR textF16 ">
                        {(() => {
                          var career_text = "";
                          if (modalObj.check_career_new) career_text += "신입 ";
                          if (
                            modalObj.check_career_new &&
                            modalObj.check_career_experienced
                          )
                            career_text += "및 ";
                          if (modalObj.check_career_experienced)
                            career_text += "경력 ";
                          if (
                            modalObj.check_career_experienced &&
                            modalObj.check_career_exp_year > 0
                          )
                            career_text +=
                              modalObj.check_career_exp_year + "년 이상";
                          return career_text;
                        })()}
                      </div>
                    </div>
                    <div className="readContentsRow ">
                      <div className="tbContentsB FontNB textF16">고용형태</div>
                      <div className="tbContents tcb FontNR textF16 ">
                        {(() => {
                          switch (modalObj.emp_form) {
                            case "FullTimer":
                              return "정규직";
                            case "ContractWorker":
                              return "계약직";
                            case "FreeLancer":
                              return "프리랜서";
                            case "PartTimer":
                              return "아르바이트";
                            case "Etc":
                              return "기타";
                            default:
                              return modalObj.emp_form;
                          }
                        })()}
                      </div>
                    </div>
                    <div className="readContentsRow ">
                      <div className="tbContentsB FontNB textF16">채용분야</div>
                      <div className="tbContents tcb FontNR textF16 ">
                        {modalObj.recruitment}
                      </div>
                    </div>
                  </div>
                  <div className="w-40 flex align-items-center justify-center">
                    <div className="readContentsTableButton FontNR textF16">
                      {modalObj.closing_date} 까지
                    </div>
                  </div>
                </div>
                <div className="careerContents FontNR textF16">
                  {(() => {
                    if (
                      modalObj.content !== undefined &&
                      modalObj.content !== ""
                    ) {
                      return parse(modalObj.content);
                    }
                  })()}
                  {/* {(() => {
                      if (modalObj.content) {
                        return modalObj.content
                          .split("<br>")
                          .map((line, index) => {
                            return (
                              <span key={index}>
                                {line}
                                <br />
                              </span>
                            );
                          });
                      } else {
                        return "";
                      }
                    })()} */}
                </div>
                <div className="careerModalBottom">
                  <div
                    className="careerModalClose FontR textF14"
                    onClick={handleClose}
                  >
                    <span className="newsButtonLink" onClick={handleClose}>
                      Close
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div> no info</div>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
