import './OwndedPost.css';
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
// import axios from 'axios';
import KeepUserId from '../KeepUserId/KeepUserId';
import axios from "../../../api";



function OwnedPost (props)  {
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
    
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // DELETE a post

    useEffect(() => {
        const idPost = (dados.id)
        // DELETE a post
        const handleClick = () => {
          const id = dados.id;
          axios.delete(`/deletePost/${idPost}`)
            .then(response => {
              console.log('Requisição DELETE bem-sucedida!');
              // Faça algo com a resposta, se necessário
            })
            .catch(error => {
              console.error('Erro na requisição DELETE:', error);
              // Trate o erro, se necessário
            });
        }
    }, []);

    //GET All Posts


    useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("user"));
    axios
        .get(`/getPostByUserId/${userId.user.id}`)
        .then((response) => {
        setDados(response.data);
        setLoading(false); // set loading to false once data is fetched
        })
        .catch((error) => {
        console.error(error);
        });
    }, []);

    console.log(dados); // Log state here

    if (loading) {
    return <div>Loading...</div>;
    }

  //to revert the data ordem on the feed
  const dadosInvertidos = [...dados].reverse();

    return (
        <ul className="owned-post-ul">
            {dadosInvertidos.map(item => (
                    <div className='owned-post-item' key={item.id}>
                        <div className='owned-item-1' >
                            <div className='owned-parte-11'>
                                <div><Person></Person></div>
                                <div><h3 className='userName' key={item.id}>{item.User.fullName}</h3></div>
                                 </div>
                            <div className='owned-parte-12'>
                                    <button onClick={this.handleClick}><Trash></Trash></button>
                                
                                <div><Alert></Alert></div>
                            </div>
                        </div>
                        <div className='owned-item-2'>
                            <p>{item.description}</p>
                        </div>
                        <div className='owned-item-3'>
                        </div>
                        <div>
                        <DocPost urlDoc={item.media}></DocPost>
                        </div>
                        <div className='owned-item-4'>
                        <div className='owned-item-keys'>
                                

                                {(item.postTag).map((subItem,index) => (
                                    <KeyWord key={index}  title={subItem.Tag.name}></KeyWord>
                                ))}
                                
                            </div>
                            
                            <div className='owned-item-41'>
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
            ))}
        </ul>
    );
};
export default OwnedPost;