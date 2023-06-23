import "./ProjectDetail.css"
import React, { useState, useEffect } from "react";
import axios from "../../../api";


export default function ProjectDetail(props){

    const [dadosPD, setDadosPD] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/getAllProjects')
            .then(response => {
                setDadosPD(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const[title,setTitle]=useState(props.title)
    

    console.log(dadosPD)

    return(
        <div className="projectDetailBG">
            {dadosPD.map((item,index)=>(
                <div className="pdContent" key={index}>
                    <div className="pdHeader">
                        <p>Project Details</p>          
                    </div>
                    <div className="pdBody">
                        <div className="projectTitle">
                            <p>{item.name}</p>
                        </div>
                        <div className="projectInfos">
                            <div className="pjItem-Value">
                                <p className="pjItem">Proct Description:je</p>
                                <p className="pjValue">{item.description}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Project Area:</p>
                                <p className="pjValue">{area}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Aplication Deadline:</p>
                                <p className="pjValue">{deadLine}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Start Date:</p>
                                <p className="pjValue">{startDate}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">End Date:</p>
                                <p className="pjValue">{endDate}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Status:</p>
                                <p className="pjValue">{status}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Avaiable Jobs:</p>
                                <p className="pjValue">{avaiableJobs}</p>
                            </div>
                            <div className="pjItem-Value">
                                <p className="pjItem">Ocupation:</p>
                                <p className="pjValue">{ocupation}</p>
                            </div>
                        </div>
                    </div>
                 <div className="pdButton">
                     {!isOwner && (
                         <div className="">
                              <button 
                             className="pdCloseButton"
                             onClick={()=>props.onPdOpen()}
                             >Close
                             </button>
                         </div>
                        
                     )}
                     {isOwner && (
                         <div className="ownerButtons">
                             <button
                             className="pdCloseButton"
                             onClick={()=>props.onPdOpen()}
                             >Close</button>
 
                             <button
                             className="pdEditButton"
                             >Edit</button>
                         </div>
                         
 
                     )}
                 </div>
             </div>
            ))}
           
        </div>
    )
}