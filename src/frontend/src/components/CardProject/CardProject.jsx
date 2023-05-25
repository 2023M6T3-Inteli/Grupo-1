import "./CardProject.css"
import alert from "../../assets/alert.svg" 
import heart from "../../assets/heart.svg"
import chat from "../../assets/chat.svg"
import fullHeart from "../../assets/fullHeart.svg"
import {useState} from "react"
import Modal from "../../components/ApplyProject/ApplyProject.jsx"


function CardProject(props){
    const[applyProject,setApplyProject]= useState(false)
    
    function showApplyProjects(){
        setApplyProject((prevState)=>!prevState)
    }

    return(
        <div className="cardProject">
            <div className="cardHeader">
                <label className="cardTitle">Web Development</label>
                <div className="iconsHeader">
                    <label >+info</label>
                    <img src={alert} alt="report"/>
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
                onClick={()=>showApplyProjects()}>
                Apply
                </button>
                <div className="iconsFooter">
                    {props.cardDisliked && 
                        <img 
                        onClick={()=>props.onLike()}
                        src={heart} 
                        alt="like"/>
                    }
                    {props.cardLiked && 
                        <img
                        onClick={()=> props.onDisLike()}
                        src={fullHeart}
                        alt="like"/>
                    }
                    <img src={chat} alt="comment"/>
                </div>
            </div>
            <Modal/>
            {applyProject && (
                <>
                    <Modal/>
                </>
            )}
        </div>
    )
}

export default CardProject