import "./OwndedPost.css";
import Person from "../../assets/UserCir";
import Alert from "../../assets/AlertNotice";
import Trash from "../../assets/Trash";
import KeyWord from "../KeyWord/KeyWord";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import fullHeart from "../../assets/fullHeart.svg";
import { useState, useEffect } from "react";
import DocPost from "../DocPost/DocPost";
import axios from "../../../api";

function OwnedPostItem({ item }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
  };

  const handleDislike = () => {
    setLiked(false);
  };

  return (
    <div className="owned-post-item" key={item.id}>
      <div className="owned-item-1">
        <div className="owned-parte-11">
          <div>
            <Person />
          </div>
          <div>
            <h3 className="userName" key={item.id}>
              {item.User.fullName}
            </h3>
          </div>
        </div>
        <div className="owned-parte-12">
          <div>
            <Alert />
          </div>
        </div>
      </div>
      <div className="owned-item-2">
        <p>{item.description}</p>
      </div>
      <div className="owned-item-3"></div>
      <div>
        <DocPost urlDoc={item.media}></DocPost>
      </div>
      <div className="owned-item-4">
        <div className="owned-item-keys">
          {item.postTag.map((subItem, index) => (
            <KeyWord key={index} title={subItem.Tag.name}></KeyWord>
          ))}
        </div>
        <div className="owned-item-41">
          {!liked && <img onClick={handleLike} src={heart} alt="like" />}
          {liked && <img onClick={handleDislike} src={fullHeart} alt="like" />}
          <img src={chat} alt="comment" />
        </div>
      </div>
    </div>
  );
}

function OwnedPost() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("user"));
    axios
      .get(`/getPostByUserId/${userId.user.id}`)
      .then((response) => {
        setDados(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const dadosInvertidos = [...dados].reverse();

  return (
    <ul className="owned-post-ul">
      {dadosInvertidos.map((item) => (
        <OwnedPostItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default OwnedPost;
