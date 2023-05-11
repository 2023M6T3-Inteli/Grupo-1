import React, { useState } from "react";
import "./ApplyProject.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
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
            <h2 className="apply-project">Apply to project</h2>
            <div className="line"></div>
            <div className="select-roles-text">
              <p className="select-roles"> Select the roles you are interested in: </p>
            </div>
            <div className="roles">
              <div>
                <input className="frontend " type="checkbox" name="role" value="frontend" />
                <label for="frontend">Frontend</label>
              </div>
              <div>
                <input className="ux" type="checkbox" name="role" value="ux" /> <label
                  for="ux">UX Designer</label>
              </div>
              <div>
                <input className="data" type="checkbox" name="role" value="data" /> <label
                  for="data">Data Analyst</label>
              </div>
              <div>
                <button className="apply" type="submit">Apply</button>
              </div>



            </div>

            <button className="close-modal" onClick={toggleModal}>
              <span className="close-modal-text"> X </span>
            </button>
          </div>
        </div>
      )}

    </>
  );
}
