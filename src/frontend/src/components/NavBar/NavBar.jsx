import { useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";

import Modal from "../CreateProject/CreateProject";

import CarryCase from "../../assets/CarryCase";
import People from "../../assets/UserGroup";
import Person from "../../assets/UserCir";
import Trophy from "../../assets/AwardTrophy";
import Create from "../../assets/Create";

import "./NavBar.css";

//import Pagina1 from '../pages/Projects.jsx';

function NavBar() {
  const [projectModal, setProjectModal] = useState(false);
  const router = useLocation();
  const currentPath = router.pathname;

  const toggleProjectModal = () => {
    setProjectModal((prevState) => !prevState);
  };

  if (projectModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <>
      <div className="nav-toda">
        <div className="nav-bar">
            <div className='nav-item'>
                <CarryCase></CarryCase>
                <p className='navName'>Projects</p>
            </div>
            <div className='nav-item'>
                <People></People>
                <p className='navName'>Community</p>
            </div>
            <div className='nav-item'>
                <Create></Create>
            </div>
            <div className='nav-item'>
                <Trophy></Trophy>
                <p className='navName'>Ranking</p>
            </div>
            <div className='nav-item'>
                <Person></Person>
                <p className='navName'>Profile</p>
            </div>
        </div>
      </div>
      {projectModal && (
        <Modal
          toggleModal={toggleProjectModal}
          tags={tags}
          handleKeyDown={handleKeyDown}
        />
      )}
    </>
  );
}

export default NavBar;
