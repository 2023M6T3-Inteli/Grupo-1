import React, { useState } from "react";
import "./CreateProject.css";

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

  const [tags, setTags] = useState([])

  function handleKeyDown(e) {
    if(e.key !== 'Enter') return
    const value = e.target.value
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
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
          <div className="modal-header">
            <h2 className="create-project">Create Project</h2>
          </div>
          <div className="line"></div>
          <form className="form">
            <fieldset>
              <div className="project-details">
                  <label for="project-name">Project Name:
                    <textarea className="project-name" name="project-name" rows="1" cols="10"></textarea>
                  </label>
                  <label for="description">Description:
                    <textarea className="description" name="description" rows="4" cols="2"></textarea>
                  </label>
                  <label for="area">Area:
                    <textarea className="area" name="area" rows="1" cols="10"></textarea>
                  </label>
                  <div className="dates">
                    <div className="end">
                      <label for="end-date" />End Date:
                      <input className="end-date" type="date" name="end-date" />
                    </div>
                    <div className="deadline">
                      <label for="application-deadline" /> Deadline:
                      <input className="application-deadline" type="date" name="application-deadline" />
                    </div>
                  </div>
                  
                  
                  <label for="status">Status:</label>
                  <div className="status">
                    <div className="step1">
                      <input type="radio" id="recruiting" name="status" value="recruiting" /> Recruiting
                    </div>
                    <div className="step2">
                      <input type="radio" id="in-progress" name="status" value="in-progress" /> In Progress
                    </div>
                    <div className="step3">
                      <input type="radio" id="done" name="status" value="done" /> Done
                    </div>
                  </div>
                  
                  <div className="occupations">
                    <label for="occupations">Occupation 1:</label>
                    <input type="text" className="occupation1" name="occupation1" />
                    <label for="occupations">Occupation 2:</label>
                    <input type="text" className="occupation2" name="occupation2" />
                  </div>
                  <label for="tags">Keywords:</label>
                  <div className="tags-input-container">
                    {/*<div className="tag-item">
                      <span className="text">hello</span>
                      <span className="close">&times;</span>
                    </div> */  }

                    { tags.map((tag, index) => (
                      <div className="tag-item" key={index} >
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTag(index)}>&times;</span>
                      </div>
                      
                      )) }
                    <input onKeyDown={handleKeyDown}  type="text" className="tags-input" placeholder="Type something" />
                  </div>
                  <div className="submit">
                    <button className="submit-btn" type="submit">Create project</button>
                  </div>

                  
              </div>
            </fieldset>
          </form>
            
            
            
            <button className="close-modal" onClick={toggleModal}>
              <span className="close-modal-text"> X </span> 
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
