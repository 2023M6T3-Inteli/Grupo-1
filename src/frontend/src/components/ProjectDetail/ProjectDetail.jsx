import "./ProjectDetail.css"
import {useState} from 'react'


export default function ProjectDetail(props){

    const[title,setTitle]=useState(props.title)
    const[desc,setDesc]=useState(props.desc)
    const[area,setArea]=useState(props.area)
    const[deadLine,setDeadLine]=useState(props.deadLine)
    const[startDate,setStartDate]=useState(props.startDate)
    const[endDate,setEndDate]=useState(props.endDate)
    const[status,SetStatus]=useState(props.status)
    const[avaiableJobs,setAvaiableJobs]=useState(props.jobs)
    const[ocupation,setOcupation]= useState(props.ocupation)
    const[isOwner,setIsOwner]=useState(false)

    return(
        <div className="projectDetailBG">
            <div className="pdContent">
                <div className="pdHeader">
                    <p>Project Details</p>          
                </div>
                <div className="pdBody">
                    <div className="projectTitle">
                        <p>{title}</p>
                    </div>
                    <div className="projectInfos">
                        <div className="pjItem-Value">
                            <p className="pjItem">Project Description:</p>
                            <p className="pjValue">{desc}</p>
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
        </div>
    )
}