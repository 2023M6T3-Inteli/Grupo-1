import './Post.css';
import Person from '../../assets/UserCir'
import Alert from '../../assets/AlertNotice'
import Trash from '../../assets/Trash'

function Post() {

    return (
        <div className='post-item'>
            <div className='item-1'>
                <div className='parte-11'>
                    <Person></Person>
                    <h3>Daniel Cunha</h3>
                </div>
                <div className='parte-12'>
                    <Trash></Trash>
                    <Alert></Alert>
                </div>
            </div>
            <div className='item-2'>
                <p>Found out this really interesting podcast about Artifical Intelligence! Check it out:</p>
            </div>
            <div className='item-3'>

            </div>

        </div>
    );
};

export default Post;