import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar'
import './Notifications.css';
import CardNotification from '../../components/CardNotification/CardNotification';
import { useState, useEffect } from 'react';
import axios from "../../../api";


export default function Notifications() {
const [dados, setDados] = useState([]);
const [loading, setLoading] = useState(true);

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
    <div className='body'>
      <TopBar title={"Notifications"}></TopBar>
      <div className='cards'>
        {dados.map(item => (

        <CardNotification  description={item.description}></CardNotification>
        ))}
      
      </div>
      
      <NavBar></NavBar>
    </div>
  );
};

