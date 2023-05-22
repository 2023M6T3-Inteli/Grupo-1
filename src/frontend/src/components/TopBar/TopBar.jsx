import "./TopBar.css"
import faq from "../../assets/faq.svg"



export default function TopBar(props){
    return (
      <div className="TopBar">
            <p className="TextTitle">{props.title}</p>

            <p className="TextSubTitle">{props.subtitle}</p>
        <img className="faq" src={faq} alt="faq" />
      </div>
    );
}