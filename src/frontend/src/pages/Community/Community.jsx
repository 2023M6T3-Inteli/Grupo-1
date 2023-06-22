import "./Community.css";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import TopBar from "../../components/TopBar/TopBar";
import Search from "../../components/Search/Search";
import TopNavPosts from "../../components/TopNavPosts/TopNavPosts";
import { useState } from "react";
import LikedComp from "../../assets/LikedComp/LikedComp";
import OwnedPost from "../../components/OwnedPost/OwnedPost";

function Community() {
  const [allPostsPage, setAllPostsPage] = useState(true);
  const [MyPostsPage, setMyPostsPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cardLiked, setCardLiked] = useState(false);
  const [cardDisliked, setCardDisliked] = useState(true);

   const handleSearch = (event) => {
     setSearchTerm(event.target.value);
   };
  function likeCard() {
    setCardLiked(true);
    setCardDisliked(false);
  }

  function dislikeCard() {
    setCardLiked(false);
    setCardDisliked(true);
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
    <div className="body">
      <div className="header-com">
        <TopBar title={"Community"}></TopBar>
        <div>
          <TopNavPosts
            onChangeToAll={changeToAllPosts}
            onChangeToMy={changeToMyPosts}
            MyPostsPage={MyPostsPage}
            allPostsPage={allPostsPage}
          />
        </div>
        <div className="search-div">
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />{" "}
        </div>
      </div>

      {allPostsPage && (
        <main className="posts">
          <Post
            onLike={likeCard}
            onDisLike={dislikeCard}
            cardLiked={cardLiked}
            cardDisliked={cardDisliked}
            searchTerm={searchTerm}
          ></Post>
        </main>
      )}

      {MyPostsPage && (
        <main className="posts">
          <OwnedPost
            onLike={likeCard}
            onDisLike={dislikeCard}
            cardLiked={cardLiked}
            cardDisliked={cardDisliked}
            searchTerm={searchTerm}
          ></OwnedPost>
        </main>
      )}

      <div>
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Community;
