import './Post.css';
import People from '../assets/user-group.svg'

function Post(){

  return (
    <div className='post-item'>
        <div className='item-1'>
            <img src={People} alt="people"/>
            <h3>Daniel Cunha</h3>
        </div>
        <div className='item-2'>
            <p>Found out this really interesting podcast about Artifical Intelligence! Check it out:</p>
        </div>
        
    </div>
  );
};

export default Post;