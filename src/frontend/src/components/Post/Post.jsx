import './Post.css';
import Person from '../../assets/UserCir'
import Alert from '../../assets/AlertNotice'
import Trash from '../../assets/Trash'
import KeyWord from '../KeyWord/KeyWord';
import heart from "../../assets/heart.svg"
import chat from "../../assets/chat.svg"
import fullHeart from "../../assets/fullHeart.svg"
import { useState } from "react";
import DocPost from '../DocPost/DocPost';

function Post(props) {
    // const[cardLiked,setCardLiked]=useState(false)
    // const[cardDisliked,setCardDisliked]=useState(true)
  
  
    // function likeCard() {
    //     setCardLiked(true)
    //     setCardDisliked(false)
    // }
  
    //   function dislikeCard() {
    //       setCardLiked(false)
    //       setCardDisliked(true)
    //   }
    

    return (
        <div className='post-item'>
            <div className='item-1'>
                <div className='parte-11'>
                    <div><Person></Person></div>
                    <div><h3 className='userName'>Daniel Cunha</h3></div>
                </div>
                <div className='parte-12'>
                    <div><Trash></Trash></div>
                    <div><Alert></Alert></div>
                </div>
            </div>
            <div className='item-2'>
                <p>Found out this really interesting podcast about Artifical Intelligence! Check it out:</p>
            </div>
            <div className='item-3'>
            </div>
            <DocPost></DocPost>
            <div className='item-4'>
                <div className='item-keys'>
                    <KeyWord></KeyWord>
                    <KeyWord></KeyWord>
                </div>
                
                <div className='item-41'>
                    {props.cardDisliked && 
                        <img 
                        onClick={()=>props.onLike()}
                        src={heart} 
                        alt="like"/>
                    }
                    {props.cardLiked && 
                        <img
                        onClick={()=> props.onDisLike()}
                        src={fullHeart}
                        alt="like"/>
                    }
                    <img src={chat} alt="comment"/>
                </div>
            </div>
            

            
        </div>
    );
};
export default Post;