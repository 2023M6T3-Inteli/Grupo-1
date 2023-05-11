import React, { useState } from "react";
import "./ApplySuccess.css";
import success from "../../assets/success.svg";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="line"></div>
            <div className="check-img">
              <img src= {success} className="check" />
            </div>
            <p className="congratulations"> <strong>Congratulations!</strong> </p>
            <p className="check-text"> Your project has been <br /> sent.</p>
            <button className="close-modal" onClick={toggleModal}>
              <span className="close-modal-text"> X </span> 
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}


