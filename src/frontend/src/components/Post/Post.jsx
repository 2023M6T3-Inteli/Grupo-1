import "./Post.css";
import Person from "../../assets/UserCir";
import Alert from "../../assets/AlertNotice";
import KeyWord from "../KeyWord/KeyWord";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import fullHeart from "../../assets/fullHeart.svg";
import { useState, useEffect } from "react";
import DocPost from "../DocPost/DocPost";
import axios from "../../../api";

function PostItem({ item }) {
  const userId = JSON.parse(sessionStorage.getItem("user"));
  const [liked, setLiked] = useState(
    item.postLike.some((like) => like.idUser === userId.user.id)
  );

  const handleLike = () => {
    setLiked(true);
    axios
      .post("/likePost", {
        idPost: item.id,
        idUser: userId.user.id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

const handleDislike = () => {
  setLiked(false);
  axios
    .delete("/deletelikedPost", {
      data: {
        idPost: item.id,
        idUser: userId.user.id,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};


  return (
    <div className="post-item" key={item.id}>
      <div className="item-1">
        <div className="parte-11">
          <div>
            <Person />
          </div>
          <div>
            <h3 className="userName" key={item.id}>
              {item.User.fullName}
            </h3>
          </div>
        </div>
        <div className="parte-12">
          <div>
            <Alert />
          </div>
        </div>
      </div>
      <div className="item-2">
        <p>{item.description}</p>
      </div>
      <div className="item-3" />
      <div>
        <DocPost title={item.media} />
      </div>
      <div className="item-4">
        <div className="item-keys">
          {item.postTag.map((subItem, index) => (
            <KeyWord key={index} title={subItem.Tag.name} />
          ))}
        </div>
        <div className="item-41">
          {!liked && <img onClick={handleLike} src={heart} alt="like" />}
          {liked && <img onClick={handleDislike} src={fullHeart} alt="like" />}
          <img src={chat} alt="comment" />
        </div>
      </div>
    </div>
  );
}

function Post() {
  //GET All Posts
  const [dados, setDados] = useState(null);
  useEffect(() => {
    axios
      .get("/getPost")
      .then((response) => {
        // Store the response data in the state
        setDados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (dados === null) {
    return <div>Loading...</div>;
  }

  //to revert the data order on the feed
  const dadosInvertidos = [...dados].reverse();

  return (
    <ul className="post-ul">
      {dadosInvertidos.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default Post;
