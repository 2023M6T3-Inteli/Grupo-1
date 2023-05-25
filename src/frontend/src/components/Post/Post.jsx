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
import React, { useEffect } from 'react';
import axios from 'axios';



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

    
    //GET All Posts
    const [dados, setDados] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/getPost')
      .then(response => {
        // Armazena os dados da resposta no estado
        setDados(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (dados === null) {
    return <div>Loading...</div>;
  }

    

    return (
        <ul>
            {dados .map(item => (
                <div key={item.id}>
                    <div className='post-item'>
                        <div className='item-1'>
                            <div className='parte-11'>
                                <div><Person></Person></div>
                                <div><h3 className='userName' key={item.id}>{item.fullName}</h3></div>
                            </div>
                            <div className='parte-12'>
                                <div><Trash></Trash></div>
                                <div><Alert></Alert></div>
                            </div>
                        </div>
                        <div className='item-2'>
                            <p>{item.description}</p>
                        </div>
                        <div className='item-3'>
                        </div>
                        <div>
                        <DocPost urlDoc={item.media}></DocPost>
                        </div>
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
                </div>
            ))}
        </ul>
    );
};
export default Post;