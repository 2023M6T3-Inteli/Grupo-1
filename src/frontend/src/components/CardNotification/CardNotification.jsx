import AlarmBell from "../../assets/AlarmBell.jsx";
import "./CardNotification.css";
import CheckBox from "../CheckBox/CheckBox.jsx";
import axios from "../../../api";
import React, { useState, useEffect } from "react";

export default function CardNotification() {
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
  function CheckBox({ item }) {
    const [checked, setChecked] = useState(item.checked);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      axios
        .put(`/updateNotifications/${item.id}`, {
          checked: event.target.checked,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return <input type="checkbox" checked={checked} onChange={handleChange} />;
  }
  return (
    <>
      {dados.map((item) => (
        <div className="not-card">
          <div className="not-item">
            <AlarmBell />
          </div>
          <div className="not-item notText">
            <p>{item.description}</p>
          </div>
          <div className="not-item">
            <CheckBox item={item} />
          </div>
        </div>
      ))}
    </>
  );
}
