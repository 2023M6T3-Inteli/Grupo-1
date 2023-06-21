import "./CardProject.css";
import alert from "../../assets/alert.svg";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import fullHeart from "../../assets/fullHeart.svg";
import { useState, useEffect } from "react";
import Modal from "../../components/ApplyProject/ApplyProject.jsx";
import axios from 'axios';
import ProjectDetail from "../projectDetail/projectDetail";
import moment from "moment";

function CardProject(props) {
    const userId = JSON.parse(sessionStorage.getItem("user"));
    const [liked, setLiked] = useState(false);
    const [formSubmitStatus, setFormSubmitStatus] = useState("");

    const applyToProject = (idUser, idProject, idRole) => {
        const postData = {
            idUser,
            idProject,
            idRole,
        };


        axios
            .post("http://localhost:3000/applyProject", postData)
            .then((response) => {
                setFormSubmitStatus("success");
                // Faça qualquer ação adicional que você deseja realizar após o envio bem-sucedido
            })
            .catch((error) => {
                setFormSubmitStatus("error");
                console.error(error);
            });
    };

    function openClosePD(){
        setPdOpen((prevState) => !prevState)
    }


    const [pdOpen, setPdOpen] = useState(false);
    const [dados, setDados] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/getAllProjects')
            .then(response => {
                // Armazena os dados da resposta no estado
                setDados(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (dados === null) {
        return <div>Loading...</div>;
    }

    // Revertendo a ordem dos dados no feed
    const dadosInvertidos = [...dados].reverse();

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
                        <button onClick={() => applyToProject(item.idUser, item.id, item.projectRole[0].id)}>
                            Apply
                        </button>
                        <div className="iconsFooter">
                            {props.cardDisliked && (
                                <img onClick={() => props.onLike()} src={heart} alt="like" />
                            )}
                            {props.cardLiked && (
                                <img onClick={() => props.onDisLike()} src={fullHeart} alt="like" />
                            )}
                            <img src={chat} alt="comment" />
                        </div>
                    </div>
                </div>
            ))}
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
