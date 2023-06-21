import { NavLink } from "react-router-dom";
import "./TopNavNotifications.css";

const TopNavNotifications = (props) => {
 
  return (
    <div className="top-nav-bar">
      <button
        id="newNotifications"
        onClick={() => props.onChangeToAll()}
        className={`buttonNav ${
          props.newNotifications ? "active1" : undefined
        }`}
      >
        New Notifications
      </button>
      <button
        onClick={() => props.onChangeToMy()}
        id="AllNotifications"
        className={`buttonNav ${
          props.AllNotifications ? "active1" : undefined
        }`}
      >
        All Notifications
      </button>
    </div>
  );
};

export default TopNavNotifications;
