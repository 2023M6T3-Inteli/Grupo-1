import React, { useState } from "react";
import './CheckBox.css'
import CheckIcon from '../../assets/CheckIcon.jsx'

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <input className="checkbox-id"  type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      {/* <div className="checkbox-icon">
        <CheckIcon></CheckIcon>
      </div> */}
    </div>
  );
}

export default CheckBox;