import "./CardProject.css";
import alert from "../../assets/alert.svg";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import fullHeart from "../../assets/fullHeart.svg";
import { useState, useEffect } from "react";
import Modal from "../../components/ApplyProject/ApplyProject.jsx";
import axios from 'axios';
import ProjectDetail from "../projectDetail/projectDetail";

function CardProject(props) {
    
    const[pdOpen,setPdOpen]=useState(false)
    
    const [applyProject, setApplyProject] = useState(false)

    function showApplyProjects() {
        setApplyProject((prevState) => !prevState)
    }

    function openClosePD(){
        setPdOpen((prevState)=> !prevState)
        console.log("deu certo")
        console.log(pdOpen)
    }

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

    //to revert the data ordem on the feed
    const dadosInvertidos = [...dados].reverse();
    //console.log(dadosInvertidos);


    return (
        <div className="card-main">
            {dadosInvertidos.map(item => (
                <div className="cardProject">

                    <div className="cardHeader">
                        <label className="cardTitle" >{item.name}</label>
                        <div className="iconsHeader">
                            <label
                            onClick= {()=>openClosePD()}
                            >+ info</label>
                            <img src={alert} alt="report" />
                        </div>
                    </div>
                    <div className="cardContent">
                        <ul>
                            <li>
                                <p className="title">Aplications Until:</p>
                                <p className="desc" >11/04/2023</p>
                            </li>
                            <li>
                                <p className="title">Ocupation:</p>
                                <p className="desc" >Back-end Developer</p>
                            </li>
                            <li>
                                <p className="title">Status:</p>
                                <p className="statusProject" >In Progress</p>
                            </li>
                        </ul>
                    </div>
                    <div className="cardFooter">
                        <button
                            onClick={() => showApplyProjects()}>
                            Apply
                        </button>
                        <div className="iconsFooter">
                            {props.cardDisliked &&
                                <img
                                    onClick={() => props.onLike()}
                                    src={heart}
                                    alt="like" />
                            }
                            {props.cardLiked &&
                                <img
                                    onClick={() => props.onDisLike()}
                                    src={fullHeart}
                                    alt="like" />
                            }
                            <img src={chat} alt="comment" />
                        </div>
                    </div>
                    
                </div>
            ))}
            {pdOpen && (
                <ProjectDetail/>
            )}
        </div>
    )
}

export default CardProject