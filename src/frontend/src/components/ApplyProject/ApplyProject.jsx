import React, { useState } from "react";
import "./ApplyProject.css";

import ApplySuccess from "../ApplySuccess/ApplySuccess";

export default function Modal() {
  const [modal, setModal] = useState(true); // Alterado para true
  const [successModal, setSuccessModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSuccessModal = () => {
    setSuccessModal(!successModal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="apply-project">Apply to project</h2>
            <div className="line"></div>
            <div className="select-roles-text">
              <p className="select-roles">Select the roles you are interested in:</p>
            </div>
            <div className="roles">
              <div>
                <input className="frontend" type="checkbox" name="role" value="frontend" />
                <label htmlFor="frontend">Frontend</label>
              </div>
              <div>
                <input className="ux" type="checkbox" name="role" value="ux" />{" "}
                <label htmlFor="ux">UX Designer</label>
              </div>
              <div>
                <input className="data" type="checkbox" name="role" value="data" />{" "}
                <label htmlFor="data">Data Analyst</label>
              </div>
              <div>
                <button className="apply" type="submit" onClick={toggleSuccessModal}>
                  Apply
                </button>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <span className="close-modal-text">X</span>
            </button>
          </div>
        </div>
      )}

      {successModal && <ApplySuccess togglePreviousModal={toggleModal} toggleModal={toggleSuccessModal} />}
    </>
  );
}
