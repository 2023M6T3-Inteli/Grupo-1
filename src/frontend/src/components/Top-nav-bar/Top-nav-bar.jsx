import { NavLink } from "react-router-dom";
import "./Top-nav-bar.css";

const TopNavBar = (props) => {
 
  return (
    <div className="top-nav-bar">
      <button
        id="allProjects"
        onClick={()=> props.onChangeToAll()}
        className={`buttonNav ${props.allProjectPage? "active" : undefined}`}
      >
        All Projects
      </button>
      <button
        onClick={()=> props.onchangeToSub()}
        id="SubscribedProjects"
        className={`buttonNav ${props.subProjectPage? "active" : undefined}`}
        // className={`navLink`}
      >
        Subscribed Projects
      </button>
      <button
        id="CreatedProjects"
        onClick={()=> props.onChangeToCreated()}
        className={`buttonNav ${props.createdProjectPage? "active" : undefined}`}
        // className={`navLink`}
      >
        Created Projects
      </button>
    </div>
  );
};

export default TopNavBar;
