import "./TopBar.css"
import faq from "../../assets/faq.svg"



export default function TopBar(props){
    return(
        <div className="TopBar">
            <h1>{props.title}</h1>
            <img className="faq" src={faq} alt="faq"/>
        </div>
    )
}