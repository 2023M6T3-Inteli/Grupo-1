import "./CardProjectOwn.css"
import heart from "../../assets/heart.svg"
import chat from "../../assets/chat.svg"
import fullHeart from "../../assets/fullHeart.svg"
import profile from "../../assets/profile.svg"
import {useState} from 'react'
import ManageApply from "../ManageApply/ManageApply"
import OwnerOptions from "../../components/OwnerOptions/OwnerOptions.jsx"
import DeleteProject from "../DeleteProject/DeleteProject"

function CardProjectOwn(props){
    const[manageModal,setManageModal]=useState(false)
    const[ownerOptions,setOwnerOptions]=useState(false)
    const[deleteProject,setDeleteProject]=useState(false)

    function showManageModal(){
        setManageModal((prevState)=>!prevState);
        setOwnerOptions(false)
    }

    function showOwnerOptions(){
        setOwnerOptions((prevState)=>!prevState);
    }

    function showDeleteProject(){
        setDeleteProject((prevState)=>!prevState)
        setOwnerOptions(false)
    }

    return(
        <div className="cardProject">
            <div className="cardHeader">
                <label className="cardTitle">Web Development</label>
                <div className="iconsHeader">
                    <label >+info</label>
                    <img 
                    onClick={()=>showOwnerOptions()}
                    src={profile} 
                    alt="profile"/>
                </div>
                {ownerOptions && (
                <>
                    <OwnerOptions
                    onShowDeleteProject={showDeleteProject}
                    onShowOwnerOptions={showOwnerOptions}
                    onShowManageModal={showManageModal}
                    />
                </>
            )}
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
                        <p className="statusCard" >In Progress</p>
                    </li>
                </ul>
            </div>
            <div className="cardFooter">
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
            
            {manageModal&&(
                <>
                    <ManageApply
                    onCloseManageModal={showManageModal}
                    />
                </>
            )}  
            {deleteProject && (
                <>
                    <DeleteProject
                    onShowDeleteProject={showDeleteProject}
                    />
                </>
            )}      
        </div>
    )
}

export default CardProjectOwn