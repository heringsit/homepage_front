import React from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { Backdrop } from "@material-ui/core";
// import iconClose from "../../assets/images/02about_herings_team/window-close.svg";
import iconClose from "../../assets/images/02about_herings_team/closeIcon.png"
import "./modal.css"

export function AboutUsModal(props) {
    // open, handleClose, modalObj 
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        id="aboutusmodal"
        className="modalNoOutline position-fixed flex align-items-center justify-center"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="paper flex">
            {props.modalObj !== JSON.stringify({}) ? (
              <div className="modalContent">
                <div className="modalCloseWrap">
                  <div className="modalCloseDiv" onClick={props.handleClose}>
                    <img src={iconClose} alt="close" className="modalClose" />
                  </div>
                </div>
                <div className="modalimgaeWrap">
                  <img
                    src={props.modalObj?.modalimg}
                    alt={props.modalObj?.name}
                    className="modalimage"
                  />
                </div>
                <div className="modalTitle mt-20 mb-20 flex-wrap-col align-items-center justify-center">
                  <span
                    className="teamModalName textF22 FontB"
                    id="transition-modal-title"
                  >
                    {props.modalObj?.name}
                  </span>
                  <span className="teamModalPosition textF16 FontB">
                    {props.modalObj?.positions}
                  </span>
                </div>
                <div
                  id="transition-modal-description"
                  className="modalContentText textF16 FontR"
                >
                  {props.modalObj?.detail}
                </div>
              </div>
            ) : (
              <div> no info</div>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
