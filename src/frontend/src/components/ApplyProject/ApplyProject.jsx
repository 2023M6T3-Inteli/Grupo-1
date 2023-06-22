import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";
import "./ApplyProject.css";

import ApplySuccess from "../ApplySuccess/ApplySuccess";

function ApplyProject({ projectId, toggleModal }) {
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [dados, setDados] = useState(null);
  const [user, setDadosUser] = useState(null);

  useEffect(() => {
    axios
      .get("/getRank")
      .then((response) => {
        // Armazena os dados da resposta no estado
        console.log(response.data);
        setDados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const userId = JSON.parse(sessionStorage.getItem("user"));

    console.log(userId.user.id);
    axios
      .get(`/getRankUser/${userId.user.id}`)
      .then((response) => {
        // Armazena os dados da resposta no estado
        console.log(response.data);
        setDadosUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(user);
  }, []);


  useEffect(() => {
    fetchProjectRoles();
  }, []);

  const fetchProjectRoles = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/projects/${projectId}/roles`);
      const data = response.data;
      setRoles(data);
    } catch (error) {
      console.error("Erro ao obter as roles do projeto:", error);
    }
  };

  const handleRoleSelection = (roleId) => {
    if (selectedRoles.includes(roleId)) {
      setSelectedRoles(selectedRoles.filter((id) => id !== roleId));
    } else {
      setSelectedRoles([...selectedRoles, roleId]);
    }
  };

  const applyToProject = () => {
    const userId = JSON.parse(sessionStorage.getItem("user")).user.id;
    selectedRoles.forEach((idRole) => {
      const postData = {
        idUser: userId,
        idProject: projectId,
        idRole,
      };

      axios
        .post("http://localhost:3000/applyProject", postData)
        .then((response) => {
          // Faça qualquer ação adicional que você deseja realizar após o envio bem-sucedido
        })
        .catch((error) => {
          console.error(error);
        });
    });

    setShowSuccessModal(true); // Exibe o modal de sucesso
  };

  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2 className="apply-project">Apply to project</h2>
          <div className="line"></div>
          <div className="select-roles-text">
            <p className="select-roles">Select the roles you are interested in:</p>
          </div>
          <div className="roles">
            {roles.map((role) => (
              <div key={role.idRole}>
                <input
                  className={role.name}
                  type="checkbox"
                  name="role"
                  value={role.idRole}
                  checked={selectedRoles.includes(role.idRole)}
                  onChange={() => handleRoleSelection(role.idRole)}
                />
                <label htmlFor={role.name}>{role.name}</label>
              </div>
            ))}
            <div>
              <button className="apply" type="submit" onClick={applyToProject}>
                Apply
              </button>
            </div>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            <span className="close-modal-text">X</span>
          </button>
        </div>
      </div>

      {showSuccessModal && <ApplySuccess togglePreviousModal={toggleModal} />}
    </>
  );
}

export default ApplyProject;
