import { useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";

import CreateNav from "../CreateNav/CreateNav";
import Modal from "../../components/CreateProject/CreateProject.jsx"
import ManageApply from "../../components/ManageApply/ManageApply.jsx"

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
  const [createNavOpen, setCreateNavOpen] = useState(false);
  const[createProjectOpen,setCreateProjectOpen]=useState(false)

  function showCreateNav() {
    setCreateNavOpen((prevState) => !prevState);
  }

  const toggleProjectModal = () => {
    setProjectModal((prevState) => !prevState);
  };

  if (projectModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [tags, setTags] = useState([]);

  // function handleKeyDown(e) {
  //   if (e.key !== "Enter") return;
  //   const value = e.target.value;
  //   if (!value.trim()) return;
  //   setTags([...tags, value]);
  //   e.target.value = "";
  // }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  function showCreateProject(){
    setCreateProjectOpen((prevState)=>!prevState)
    setCreateNavOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="nav-toda">
        <div className="nav-bar">
          <div className="nav-item">
            <CarryCase />
            <a href="/Projects">Projects</a>
          </div>
          <div className="nav-item">
            <People />
            <a href="/Community">Community</a>
          </div>
          <div className="nav-item">
            <button
              onClick={
                currentPath === "/Community"
                  ? () =>
                      console.log("Coloque sua função de togglePostModal aqui")
                  : toggleProjectModal
              }
            >
              <Create onShowCreateNav={showCreateNav} />
            </button>
          </div>
          <div className="nav-item">
            <Trophy />
            <a href="/Ranking">Ranking</a>
          </div>
          <div className="nav-item">
            <Person></Person>
            <a href="/Profile">Profile</a>
          </div>
        </div>
      </div>
      {createNavOpen && (
        <>
          <CreateNav 
          onShowCreateNav={showCreateNav}
          onShowCreateProject={showCreateProject} />
        </>
      )}
      {createProjectOpen&& (
        <>
          <Modal/>
        </>
      )}
    </>
  );
}

export default NavBar;
