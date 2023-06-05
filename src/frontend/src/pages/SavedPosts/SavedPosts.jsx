import './SavedPosts.css';
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/Post/Post';
import TopBar from '../../components/TopBar/TopBar'
import Search from '../../components/Search/Search';
import { useState } from "react";
import FilledLikedComp from '../../assets/FilledLikedComp';

function SavedPosts() {

  return (
    <div className='body'>
      <div className='header-saved'>
        <TopBar title={"Saved Posts"}></TopBar>
        <div className='search-div-saved'><Search></Search></div>
      </div>
      <main className='posts-saved'>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>

       
      </main>
      <div className='likedButton-saved'>
        <FilledLikedComp></FilledLikedComp>
      </div>
      <div><NavBar></NavBar></div>
    </div>
  );
};

export default SavedPosts;