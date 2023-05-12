import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar'
import './Notifications.css';
import CardNotification from '../../components/CardNotification/CardNotification';


function Notifications() {

  return (
    <div className='body'>
      <TopBar title={"Notifications"}></TopBar>
      <div className='cards'>
      <CardNotification></CardNotification>
      <CardNotification></CardNotification>
      </div>
      
      <NavBar></NavBar>
    </div>
  );
};

export default Notifications;