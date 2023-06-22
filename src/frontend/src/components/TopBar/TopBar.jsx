import "./TopBar.css"
import faq from "../../assets/faq.svg"
import AlarmBellTop from "../../assets/AlarmBellTop.jsx";
import { Link } from 'react-router-dom';

export default function TopBar(props){
    return (
      <div className="TopBar">
        <p className="TextTitle">{props.title}</p>

        <div className="topBarIcons">
          <Link to="/Notifications">
            <AlarmBellTop/>
          </Link>
          
          <Link to="/Faq">
            <img className="faq" src={faq} alt="faq" />
          </Link>
          
          
        </div>
        
      </div>
    );
}