import AlarmBell from "../../assets/AlarmBell.jsx";
import "./CardNotification.css";
import CheckBox from "../CheckBox/CheckBox.jsx";
import React, { useState, useEffect } from "react";


export default function CardNotification({description}) {
  

  return (
    
    <div className="not-card">
      <div className="not-item">
        <AlarmBell />
      </div>
      <div className="not-item notText">
        <p>{description}</p>
      </div>
      <div className="not-item">
        <CheckBox />
      </div>
    </div>
  );
}





