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
import Comments from "../../components/Comments/Comments.jsx";
import ArrowUp from "../../assets/ArrowUp.svg";

function OwnedPostItem({ item }) {
  const userId = JSON.parse(sessionStorage.getItem("user"));
  const [liked, setLiked] = useState(
    item.postLike.some((like) => like.idUser === userId.user.id)
  );

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(item.comments);
  const handleCommentSubmit = () => {
    axios
      .post("/createComment", {
        idPost: item.id,
        idUser: userId.user.id,
        comment: commentText,
      })
      .then((response) => {
        console.log(response);

        setCommentText("");
        const newComment = {
          ...response.data,
          User: { fullName: userId.user.fullName },
        };
        setComments((prevComments) => [...prevComments, newComment]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

  const handleDelete = async (itemId) => {
    const url = `/deletePost/${itemId}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [deletePost, setDeletePost] = useState(false);

  function showDeletePost() {
    setDeletePost((prevState) => !prevState);
  }

  function showComments() {
    setCommentsOpen((prevState) => !prevState);
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
            <button
              className="button-trash-post"
              key={item.id}
              onClick={() => handleDelete(item.id)}
            >
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
          <img onClick={() => showComments()} src={chat} alt="comment" />
        </div>
      </div>
      {commentsOpen && (
        <div className="item-5">
          <p>Comments</p>
          {comments.map((comment) => (
            <Comments
              key={comment.id}
              message={comment.comment}
              userName={comment.User.fullName}
            />
          ))}
        </div>
      )}
      <div className="sendMessage">
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <img src={ArrowUp} onClick={handleCommentSubmit} />
      </div>
    </div>
  );
}

function OwnedPost({ searchTerm }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("user"));
    axios
      .get(`/getPostByUserId/${userId.user.id}`)
      .then((response) => {
        Promise.all(
          response.data.map((post) => {
            return axios
              .get(`/getComment/${post.id}`)
              .then((commentResponse) => {
                post.comments = commentResponse.data;
                return post;
              });
          })
        ).then((updatedPosts) => {
          setDados(updatedPosts);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredPosts = dados.filter((post) =>
    post.postTag.some((tag) =>
      tag.Tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  console.log(dados)
  const dadosInvertidos = [...filteredPosts].reverse();

  return (
    <ul className="owned-post-ul">
      {dadosInvertidos.map((item) => (
        <OwnedPostItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default OwnedPost;
