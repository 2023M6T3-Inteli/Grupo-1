import "./TopBar.css"
import faq from "../../assets/faq.svg"



export default function TopBar(props){
    return(
        <div className="TopBar">
            <p>{props.title}</p>
            <img className="faq" src={faq} alt="faq"/>
        </div>
    )
}