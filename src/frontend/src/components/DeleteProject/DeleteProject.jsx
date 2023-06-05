import "./DeleteProject.css"
import x from "../../assets/x.svg"

function DeleteProject(props){
    return(
        <div className="backgroundDelete">
            <div className="deleteModal">
                <div className="modalDeleteTitle">
                    <label>Delete Project</label>
                    <img 
                    onClick={()=>props.onShowDeleteProject()}
                    src={x}></img>
                </div>
                <hr></hr>
                <div className="modalDeleteContent">
                    <p>Are you sure you want to delete this project?</p>
                    <button>Delete Permanently</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProject