import React, { useState } from "react";
import "./CreateProject.css";
import axios from 'axios';

export default function Modal(props) {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    aplicationDeadLine: '',
    duration: '',
    dateStart: '',
    status: '',
    idUser: 1
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/createProject', formData);
      console.log(response.data);
      // Faça algo com a resposta do servidor, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <div onClick={props.toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="create-project">Create Project</h2>
        </div>
        <div className="line"></div>
        <form className="form">
          <fieldset>
            <div className="project-details">
              <label for="project-name">Project Name:
                <input className="project-name" name="project-name" value={formData.name} onChange={handleInputChange}></input>
              </label>
              <label for="description">Description:
                <input className="description" name="description" rows="4" cols="2" value={formData.description} onChange={handleInputChange}></input>
              </label>
              <label for="area">Duration:
                <input className="area" name="area" rows="1" cols="10" value={formData.duration} onChange={handleInputChange}></input>
              </label>
              <div className="dates">
                <div className="end">
                  <label for="end-date" />Start Date:
                  <input className="end-date" type="date" name="end-date" value={formData.dateStart} onChange={handleInputChange} />
                </div>
                <div className="deadline">
                  <label for="application-deadline" /> Deadline:
                  <input className="application-deadline" type="date" name="application-deadline" value={formData.dateStart} onChange={handleInputChange} />
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

                <input onKeyDown={props.handleKeyDown} type="text" className="tags-input" placeholder="Type something" />
              </div>
              <div className="submit">
                <button className="submit-btn" type="submit" onClick={handleSubmit}>Create project</button>
              </div>

            </div>
          </fieldset>
        </form>

        <button className="close-modal" onClick={props.toggleModal}>
          <span className="close-modal-text"> X </span>
        </button>
      </div>
    </div>
  );
}
