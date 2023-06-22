import React, { useEffect } from "react";
import "./ApplySuccess.css";
import success from "../../assets/success.svg";

export default function ApplySuccess({ toggleModal, togglePreviousModal }) {
  useEffect(() => {
    document.body.classList.add("active-modal");

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, []);

  const handlePreviousModal = () => {
    togglePreviousModal();
    toggleModal();
  };

  return (
    <div className="modal">
      <div onClick={handlePreviousModal} className="overlay"></div>
      <div className="modal-content">
        <div className="line"></div>
        <div className="check-img">
          <img src={success} alt="success" className="check" />
        </div>
        <p className="congratulations">
          <strong>Congratulations!</strong>
        </p>
        <p className="check-text">
          Your project has been <br /> sent.
        </p>
        <button className="close-modal" onClick={handlePreviousModal}>
          <span className="close-modal-text">X</span>
        </button>
      </div>
    </div>
  );
}
