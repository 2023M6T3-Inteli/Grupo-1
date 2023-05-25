import "./SavedProjects.css";
import TopBar from "../../components/TopBar/TopBar";
import TopNavBar from "../../components/Top-nav-bar/Top-nav-bar";
import CardProject from "../../components/CardProject/CardProject";
import Search from "../../components/Search/Search"
import CardProjectOwn from "../../components/CardProjectOwn/CardProjectOwn"
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import {useLocation} from "react-router-dom";
import FilledLikedComp from "../../assets/FilledLikedComp";

export default function SavedProjects() {

  return (
    <>
      <div className="header-savproj">
        <TopBar title={"Saved Projects"}/>
        <Search/>
      </div>
      <div className="behind-savproj"></div>
            <main className="projects-container-savproj">
                <p>All Projects</p>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </main>
        <div className="likedButton-savproj">
        <FilledLikedComp></FilledLikedComp>
        </div>
        <NavBar/>
      </>
  );
}
