import "./CreateNav.css"
import CarryCase from "../../assets/CarryCase.jsx"
import UserGroup from "../../assets/UserGroup.jsx"

function CreateNav (props){
    return(
        <>
            <div 
            onClick={()=>props.onShowCreateNav()}
            className="backgroundCreate">
            </div>
            <div className="cardCreateContainer">
                    <button 
                    onClick={()=>{props.onShowCreateProject();props.onCloseCreateNav()}}
                    className="createOption" id="createProject">
                    <label>Create <span style={{ color: '#0672CB' }}>Project</span></label>
                        <CarryCase/>
                    </button>
                    <hr></hr>
                    <button 
                    onClick={()=>props.onShowCreatePost()}
                    className="createOption" id="createPost">

                    <label>Create <span style={{ color: '#0672CB' }}>Post</span></label>
                        <UserGroup/>
                    </button>
                </div>
        </>


    )
}

export default CreateNav