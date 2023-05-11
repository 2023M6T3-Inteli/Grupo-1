import './Community.css';
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components//Post/Post';


function Community() {

  return (
    <div className='body'>
      <Post></Post>
      <Post></Post>
      <NavBar></NavBar>
    </div>
  );
};

export default Community;