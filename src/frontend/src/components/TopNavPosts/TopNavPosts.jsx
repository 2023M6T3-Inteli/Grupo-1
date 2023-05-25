import { NavLink } from "react-router-dom";
import "./TopNavPosts.css";

const TopNavPosts = (props) => {
 
  return (
    <div className="top-nav-bar">
      <button
        id="allPosts"
        onClick={()=> props.onChangeToAll()}
        className={`buttonNav ${props.allPostsPage? "active" : undefined}`}
      >
        All Posts
      </button>
      <button
        onClick={()=> props.onChangeToMy()}
        id="MyPosts"
        className={`buttonNav ${props.MyPostsPage? "active" : undefined}`}
        // className={`navLink`}
      >
        My Posts
      </button>
      
    </div>
  );
};

export default TopNavPosts;
