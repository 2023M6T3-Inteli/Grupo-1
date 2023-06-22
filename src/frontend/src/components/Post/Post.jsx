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
import Comments from "../../components/Comments/Comments.jsx";
import ArrowUp from "../../assets/ArrowUp.svg";
import Search from "../Search/Search"; 

function PostItem({ item }) {
  // console.log(item); // Log to check the item data
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
        console.log(comments)
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

  function showComments() {
    setCommentsOpen((prevState) => !prevState);
  }

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

function Post() {
 
  const [dados, setDados] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearch = (event) => {
 
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    axios
      .get("/getPost?tag=Oi")
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
        ).then((updatedPosts) => setDados(updatedPosts));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(dados);
  if (dados === null) {
    return <div>Loading...</div>;
  }
  const filteredPosts = dados.filter((post) =>
    post.postTag.some((tag) =>
      tag.Tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const dadosInvertidos = [...filteredPosts].reverse();
  return (
      <ul className="post-ul">
        {dadosInvertidos.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </ul>
  );
}

export default Post;
