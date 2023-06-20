import "./Comments.css"
import Person from "../../assets/UserCir"
export default function Comments(props){

    const message = props.message;
    const userName= props.userName;
    return(
        <div className="commentsContent">
            
            <div className="commentOwner">
                <Person/>
                <p>{userName}</p>
            </div>
            <div className="commentMessage">
                <p>{message}</p>
            </div>
            <hr></hr>
           
        </div>
        
    )
}