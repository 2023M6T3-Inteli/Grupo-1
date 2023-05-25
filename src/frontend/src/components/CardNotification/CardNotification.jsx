import AlarmBell from '../../assets/AlarmBell.jsx';
import './CardNotification.css'
import CheckBox from '../CheckBox/CheckBox.jsx';



function CardNotification() {

    return (
        <div className='not-card'>
            <div className="not-item"><AlarmBell></AlarmBell></div>
            <div className="not-item notText"><p>Luisa wants to apply to your project!</p></div>
            <div className="not-item"><CheckBox></CheckBox></div> 
        </div>
    );
}

export default CardNotification;