import "./ProjectDetail.css"
import x from "../../assets/x.svg"

export default function ProjectDetail(){
    return(
        <div className="projectDetailBG">
            <div className="pdContent">
                <div className="pdHeader">
                    <p>Project Details</p>
                    <img className="closeOption"
                    src={x}
                    ></img>
                </div>
            </div>
        </div>
    )
}