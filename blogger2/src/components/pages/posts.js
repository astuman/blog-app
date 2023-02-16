import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostForm from './postForm';
import {SearchPostModal} from '../modals/searchPostModal'

const Posts = () => {
    const [posts, setPost] = useState([])


    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res =>{
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    //modale start here
    return (
    <div  className='ui container' style={{backgroundColor:'#d9dbdb'}}>
    <div className='homPageWelcome'>Wel come to Blogs</div>
    <SearchPostModal />
        {
            posts.map(post => 
                ( <div className='posts' key={post.id}>Title: {post.title}<br/><div className='postBodyContent'>Content: <br/>{post.body}</div></div> 
                
                    
                ))
        }
    </div>
    );
}

export default Posts