import "./TopBar.css"
import faq from "../../assets/faq.svg"
import AlarmBell from "../../assets/AlarmBell.jsx";
import { Link } from 'react-router-dom';

export default function TopBar(props){
    return (
      <div className="TopBar">
        <p className="TextTitle">{props.title}</p>

        <p className="TextSubTitle">{props.subtitle}</p>
        <div className="topBarIcons">
          <Link to="/Notifications">
            <AlarmBell/>
          </Link>
          
          <Link to="/Faq">
            <img className="faq" src={faq} alt="faq" />
          </Link>
          
          
        </div>
        
      </div>
    );
}