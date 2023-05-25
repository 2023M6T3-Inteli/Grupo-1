import "./style.css";
import TopBar from "../../components/TopBar/TopBar";
import TopNavBar from "../../components/Top-nav-bar/Top-nav-bar";
import CardProject from "../../components/CardProject/CardProject";
import Search from "../../components/Search/Search"
import CardProjectOwn from "../../components/CardProjectOwn/CardProjectOwn"
import NavBar from "../../components/NavBar/NavBar"
import { useState } from "react";
import {useLocation} from "react-router-dom"

export default function AllProjects() {
  const[allProjectPage, setAllProjectPage] = useState(true);
  const[subProjectPage, setSubProjectPage] = useState(false);
  const[createdProjectPage, setCreatedProjectPage] = useState(false);
  const[cardLiked,setCardLiked]=useState(false)
  const[cardDisliked,setCardDisliked]=useState(true)

  

  function likeCard() {
      setCardLiked(true)
      setCardDisliked(false)
  }

    function dislikeCard() {
        setCardLiked(false)
        setCardDisliked(true)
    }

  function changeToAllProject() {
    setAllProjectPage(true);
    setSubProjectPage(false);
    setCreatedProjectPage(false);
  }

  function changeToSubProject() {
    setAllProjectPage(false);
    setSubProjectPage(true);
    setCreatedProjectPage(false);
  }

  function changeToCreatedProject() {
    setAllProjectPage(false);
    setSubProjectPage(false);
    setCreatedProjectPage(true);
  }
  

  return (
    <>
      <div className="header">
        <TopBar title={"Projects"}/>
        <TopNavBar
            onChangeToAll={changeToAllProject}
            onchangeToSub={changeToSubProject}
            onChangeToCreated={changeToCreatedProject}
            subProjectPage={subProjectPage}
            allProjectPage={allProjectPage}
            createdProjectPage={createdProjectPage}
        />
        <Search/>
      </div>
      <div className="behind"></div>
        {allProjectPage && (
            <main className="projects-container">
                <p>All Projects</p>
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />  
            </main>
            
        )}
        {subProjectPage && (
            <main className="projects-container">
                <p>Sub Project</p>
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProject
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
            </main>
            
        )}
        {createdProjectPage && (
            <main className="projects-container">
                <p>Created Project</p>
                <CardProjectOwn
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProjectOwn
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProjectOwn
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProjectOwn
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
                <CardProjectOwn
                onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}
                />
            </main>
            
        ) }
        <NavBar/>
      </>
  );
}
