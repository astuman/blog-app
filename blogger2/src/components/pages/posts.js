import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostForm from './postForm';
import {SearchPostModal} from '../modals/searchPostModal'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions/actions';
import { PostReducer } from '../../reducer/postReducer';
import Store from '../../store/store';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.PostReducer.posts)
    useEffect(() =>{
        dispatch(fetchPosts)
    },[])
    //modale start here()

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