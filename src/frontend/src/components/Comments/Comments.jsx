import "./Comments.css"
import Person from "../../assets/UserCir"
import ArrowUp from "../../assets/ArrowUp.svg"
export default function Comments(props){

    const message = props.message;
    const userName= props.userName;
    return(
        <div className="commentsContent">
            <p >Comments</p>
            <div className="commentOwner">
                <Person/>
                <p>{userName}</p>
            </div>
            <div className="commentMessage">
                <p>{message}</p>
            </div>
            <hr></hr>
            <div className="sendMessage">
                <input
                type="text"
                placeholder="Add a comment"
                />
                <img
                src={ArrowUp}
                />
    
            </div>
        </div>
        
    )
}