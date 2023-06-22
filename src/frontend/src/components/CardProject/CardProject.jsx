import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";
import ProjectDetail from "../projectDetail/projectDetail";
import ApplyProject from "../ApplyProject/ApplyProject";
import alert from "../../assets/alert.svg";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import fullHeart from "../../assets/fullHeart.svg";
import "./CardProject.css";

function CardProject(props) {
    const [dados, setDados] = useState(null);
    const [pdOpen, setPdOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [formSubmitStatus, setFormSubmitStatus] = useState("");

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/getAllProjects')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (dados === null) {
        return <div>Loading...</div>;
    }

    const dadosInvertidos = [...dados].reverse();

    function openClosePD() {
        setPdOpen((prevState) => !prevState);
    }

    return (
        <div className="card-main">
            {dadosInvertidos.map((item, index) => (
                <div className="cardProject" key={index}>
                    <div className="cardHeader">
                        <label className="cardTitle">{item.name}</label>
                        <div className="iconsHeader">
                            <label onClick={() => openClosePD()}>+ info</label>
                            <img src={alert} alt="report" />
                        </div>
                    </div>
                    <div className="cardContent">
                        <ul>
                            <li>
                                <p className="title">Applications Until:</p>
                                <p className="desc">{moment(item.applicationDeadline).format("DD MMMM YYYY")}</p>
                            </li>
                            <li>
                                <p className="title">Status:</p>
                                <p className="statusProject">{item.status}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="cardFooter">
                        <button onClick={toggleModal}>
                            Apply
                        </button>
                    
                    </div>
                </div>
            ))}
            {isModalOpen && (
                <div>
                    <ApplyProject />
                </div>
            )}
            {pdOpen && (
                <div>
                    <ProjectDetail
                        onPdOpen={openClosePD}
                        title="Web Development"
                        desc="Eu estou assistindo a aula de negocios no inteli e estou tendo uma paastra na aula da lisane"
                        area="Development"
                        deadLine="09/01/23"
                        startDate="09/01/23"
                        endDate="09/01/23"
                        status="Recruiting"
                        jobs={3}
                        ocupation="Front-End Developer"
                    />
                </div>
            )}
        </div>
    );
}

export default CardProject;
