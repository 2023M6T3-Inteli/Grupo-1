import './Community.css';
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/Post/Post';
import TopBar from '../../components/TopBar/TopBar'
import Search from '../../components/Search/Search';
import TopNavPosts from '../../components/TopNavPosts/TopNavPosts';
import { useState } from "react";

function Community() {
    const[allPostsPage, setAllPostsPage] = useState(true);
    const[MyPostsPage, setMyPostsPage] = useState(false);
    
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


    function changeToAllPosts() {
      setAllPostsPage(true);
      setMyPostsPage(false);
    }
    
    function changeToMyPosts() {
      setAllPostsPage(false);
      setMyPostsPage(true);
    }
  
  return (
    <div className='body'>
      <TopBar title={"Community"}></TopBar>
      <TopNavPosts 
        onChangeToAll={changeToAllPosts}
        onChangeToMy={changeToMyPosts}
        MyPostsPage={MyPostsPage}
        allPostsPage={allPostsPage}/>

      <Search></Search>

      {allPostsPage && (
      <main className='posts'>
      <Post onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}></Post>
      <Post onLike={likeCard}
                onDisLike={dislikeCard}
                cardLiked={cardLiked}
                cardDisliked={cardDisliked}></Post>
      </main>)}
      
      {MyPostsPage && (
      <main className='posts'>
      
      </main>)}

      <NavBar></NavBar>
    </div>
  );
};

export default Community;