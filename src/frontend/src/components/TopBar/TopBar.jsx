import "./TopBar.css"
import faq from "../../assets/faq.svg"



export default function TopBar(){
    return(
        <div className="TopBar">
            <h1>Projects</h1>
            <img className="faq" src={faq} alt="faq"/>
        </div>
    )
}