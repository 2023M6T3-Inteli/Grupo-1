import React, { useState, useEffect } from "react";
import "./CreateProject.css";
import axios from 'axios';
import moment from "moment";
import { parseISO } from 'date-fns';


export default function Modal(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    aplicationDeadline: '',
    duration: '',
    dateStart: '',
    status: '',
    idUser: 1,
    idManager: 2,
    idRole: [1],
  });

  const [idTag, setIdTag] = useState(new Set());
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Formate as datas usando moment.js
    const formattedFormData = {
      ...formData,
      aplicationDeadline: moment(formData.aplicationDeadline).format("DD MMMM YYYY HH:mm"),
      dateStart: moment(formData.dateStart).format("DD MMMM YYYY HH:mm"),
      idTag: Array.from(idTag), // Converte o conjunto para uma array
    };
    console.log(formattedFormData)
    try {
      const response = await axios.post('http://localhost:3000/createProject', formattedFormData);
      console.log(response.data);
      // Faça algo com a resposta do servidor, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const newTag = Number(tagInput.trim()); // Converte o valor para número
    if (!isNaN(newTag) && newTag !== 0) { // Verifica se é um número válido
      setIdTag((prevTags) => new Set([...prevTags, newTag]));
      setTagInput("");
    }
  }, [tagInput]);

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
              <label htmlFor="project-name">Project Name:
                <input className="project-name" name="name" id="project-name-input" onChange={handleInputChange} />
              </label>
              <label htmlFor="description">Description:
                <input className="description" name="description" rows="4" cols="2" value={formData.description} onChange={handleInputChange} />
              </label>
              <label htmlFor="duration">Duration:
                <input className="duration" name="duration" rows="1" cols="10" value={formData.duration} onChange={handleInputChange} />
              </label>
              <div className="dates">
                <div className="start">
                  <label htmlFor="start-date">Start Date:</label>
                  <input className="start-date" type="date" name="dateStart" value={formData.dateStart} onChange={handleInputChange} />
                </div>
                <div className="deadline">
                  <label htmlFor="application-deadline">Deadline:</label>
                  <input className="application-deadline" type="date" name="aplicationDeadline" value={formData.aplicationDeadline} onChange={handleInputChange} />
                </div>
              </div>
              <label htmlFor="status">Status:</label>
              <div className="status">
                <div className="step1">
                  <input type="radio" id="recruiting" name="status" value="recruiting" onChange={handleInputChange} /> Recruiting
                </div>
                <div className="step2">
                  <input type="radio" id="in-progress" name="status" value="in-progress" onChange={handleInputChange} /> In Progress
                </div>
                <div className="step3">
                  <input type="radio" id="done" name="status" value="done" onChange={handleInputChange} /> Done
                </div>
              </div>
              <div className="occupations">
                <label htmlFor="occupation1">Occupation 1:</label>
                <input type="text" className="occupation1" name="occupation1" onChange={handleInputChange} />
                <label htmlFor="occupation2">Occupation 2:</label>
                <input type="text" className="occupation2" name="occupation2" onChange={handleInputChange} />
              </div>
              <label htmlFor="tags">Keywords:</label>
              <div className="tags-input-container">
                <input
                  type="text"
                  className="tags-input"
                  placeholder="Type something"
                  value={tagInput}
                  onChange={(event) => setTagInput(event.target.value)}
                />
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
