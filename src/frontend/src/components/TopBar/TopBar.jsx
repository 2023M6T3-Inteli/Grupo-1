import "./TopBar.css"
import faq from "../../assets/faq.svg"



export default function TopBar(){
    return(
        <div className="TopBar">
            <p>Projects</p>
            <img className="faq" src={faq} alt="faq"/>
        </div>
    )
}