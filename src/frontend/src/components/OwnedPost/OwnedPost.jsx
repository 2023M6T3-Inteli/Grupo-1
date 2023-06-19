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

  //DELETE post
  const handleDelete = async (itemId) => {
    const url = `/deletePost/${itemId}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data); // Você pode fazer algo com os dados da resposta, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  //modal delete post
    const[deletePost,setDeletePost]=useState(false)

    function showDeletePost(){
      setDeletePost((prevState)=>!prevState)
    }


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
        <div className="owned-parte-12" key={item.id}>
          <div key={item.id}>
            <button key={item.id} onClick={() => handleDelete(item.id)}>
              <Trash></Trash>
            </button>

          </div>
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

      {/* {deletePost && (
      <div className="div-deletepost">
          <DeletePost
          onShowDeletePost={showDeletePost}
          />
      </div>
    )}   */}
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
