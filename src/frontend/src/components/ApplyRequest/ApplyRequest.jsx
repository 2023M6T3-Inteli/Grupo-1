import "./ApplyRequest.css"

function ApplyRequest(){
    return(
        <div className="applyRequestContent">
            <div className="requestTitle">
                <label>Luisa Leite</label>
                <button>Visit Profile</button>
            </div>
            <div className="requestContent">
                <label>Ocupation of interest:</label>
                <p>Frontend Development</p>
            </div>
            <div className="requestButton">
                <button className="aproveButton">Aprove</button>
                <button className="rejectButton">Reject</button>
            </div>
            <div>
                <hr></hr>
            </div>
           
        </div>
    )
}

export default ApplyRequest