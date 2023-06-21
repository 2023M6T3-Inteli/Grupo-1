import React, { useState, useEffect } from "react";
import "./CreateProject.css";
import axios from 'axios';
import moment from "moment";
import Select from 'react-select';
import { parseISO } from 'date-fns';

export default function Modal(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    aplicationDeadline: '',
    duration: '',
    dateStart: '',
    status: '',
    isApproved: "true",
    idUser: 1,
    idManager: 2,
    idRole: [],
    idTag: []
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionsTagPost, setOptionsTagPost] = useState([]);
  const [optionsRole, setOptionsRole] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    const fetchTagOptions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllTags');
        const options = response.data.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setOptionsTagPost(options);
      } catch (error) {
        console.error('Erro ao obter opções de tags:', error);
      }
    };

    const fetchRoleOptions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllRoles');
        const options = response.data.map((option) => ({
          value: option.id,
          label: option.name,
        }));
        setOptionsRole(options);
      } catch (error) {
        console.error('Erro ao obter opções de papéis:', error);
      }
    };

    fetchTagOptions();
    fetchRoleOptions();
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedFormData = {
      ...formData,
      aplicationDeadline: moment(formData.aplicationDeadline).format("DD MMMM YYYY HH:mm"),
      dateStart: moment(formData.dateStart).format("DD MMMM YYYY HH:mm"),
      idTag: Array.from(selectedOptions.map(option => option.value)),
      idRole: Array.from(selectedRoles.map(role => role.value)),
    };

    console.log(formattedFormData);

    try {
      const response = await axios.post('http://localhost:3000/createProject', formattedFormData);
      console.log(response.data);
      // Faça algo com a resposta do servidor, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTag = (selected) => {
    setSelectedOptions(selected);
  };

  const handleChangeRole = (selected) => {
    setSelectedRoles(selected);
  };

  return (
    <div className="modal">
      <div onClick={props.toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="create-project">Create Project</h2>
        </div>
        <div className="line"></div>
        <form onSubmit={handleSubmit} className="form">
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
              <div>
                <label htmlFor="idTag">Keywords:</label>
                <Select
                  className="keys-create-post"
                  name="idTag"
                  options={optionsTagPost}
                  isMulti
                  value={selectedOptions}
                  onChange={handleChangeTag}
                />
              </div>
              <div>
                <label htmlFor="idRole">Roles:</label>
                <Select
                  className="roles-create-post"
                  name="idRole"
                  options={optionsRole}
                  isMulti
                  value={selectedRoles}
                  onChange={handleChangeRole}
                />
              </div>
              <div className="submit">
                <button className="submit-btn" type="submit" onClick={() => props.onShowCreateNav2()}>Create project</button>
              </div>
            </div>
          </fieldset>
        </form>
        <button className="close-modal" onClick={() => { props.onShowCreateProject(); props.onShowCreateNav2() }}>
          <span className="close-modal-text"> X </span>
        </button>
      </div>
    </div>
  );
}
