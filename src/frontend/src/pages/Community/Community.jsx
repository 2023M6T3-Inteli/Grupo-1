import './Community.css';
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/Post/Post';
import TopBar from '../../components/TopBar/TopBar'


function Community() {

  return (
    <div className='body'>
      <TopBar title={"Community"}></TopBar>
      <div className='posts'>
      <Post></Post>
      <Post></Post>
      </div>
      
      <NavBar></NavBar>
    </div>
  );
};

export default Community;