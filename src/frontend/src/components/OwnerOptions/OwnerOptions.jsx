import "./OwnerOptions.css"

function OwnerOptions(props){
    return(
        <>
            <div 
            onClick={()=>props.onShowOwnerOptions()}
            className="backgroundOwnerOptions"></div>
            <div className="ownerOptionsCont">
                <button 
                onClick={()=>props.onShowManageModal()}
                id="manageAplications">
                Manage Applications
                </button>
                
                <button 
                onClick={()=>props.onShowDeleteProject()}
                id="deleteProject">
                Delete Project
                </button>
            </div>
        </>
        
    )
}

export default OwnerOptions