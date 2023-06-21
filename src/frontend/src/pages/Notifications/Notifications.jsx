import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar'
import './Notifications.css';
import CardNotification from '../../components/CardNotification/CardNotification';
import CardAllNotification from '../../components/CardAllNotification/CardAllNotification';
import TopNavNotifications from "../../components/TopNavNotifications/TopNavNotifications";
import { useState, useEffect } from 'react';
import axios from "../../../api";


export default function Notifications() {
const [dados, setDados] = useState([]);
const [loading, setLoading] = useState(true);
  const [newNotificationsPage, setNewNotificationsPage] = useState(true);
  const [AllNotificationsPage, setAllNotificationsPage] = useState(false);
  
  function changeToNewNotifications() {
    setNewNotificationsPage(true);
    setAllNotificationsPage(false);
  }

  function changeToAllNotifications() {
    setNewNotificationsPage(false);
    setAllNotificationsPage(true);
  }

useEffect(() => {
  const userId = JSON.parse(sessionStorage.getItem("user"));

  axios
    .get(`/getNotifications/${userId.user.id}`)
    .then((response) => {
      setDados(response.data);
      setLoading(false); // set loading to false once data is fetched
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

console.log(dados); // Log state here

if (loading) {
  return <div>Loading...</div>;
}

  return (
    <div className="body">
      <TopBar title={"Notifications"}></TopBar>
      <div>
        <TopNavNotifications
          onChangeToAll={changeToNewNotifications}
          onChangeToMy={changeToAllNotifications}
          newNotifications={newNotificationsPage}
          AllNotifications={AllNotificationsPage}
        />
      </div>
      <div className="cards">
        {newNotificationsPage && (
            <CardNotification
             
            ></CardNotification>
     
        )}

        {AllNotificationsPage && (
            <CardAllNotification
           
            ></CardAllNotification>

        )}
      </div>

      <NavBar></NavBar>
    </div>
  );
};

