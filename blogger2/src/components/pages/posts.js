import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import PostForm from './postForm';
import {SearchPostModal} from '../modals/searchPostModal'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/actions';
import { PostReducer } from '../../reducer/postReducer';
import Store from '../../store/store';
import { rootReducer } from '../../reducer/reducer';
import { Button } from 'semantic-ui-react';

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchPosts())
        
    },[dispatch])
    const posts = useSelector(state => state.rootPost.postedItems)


    const handlePostDelete =(id) =>{
        dispatch(deletePost(id))
        // console.log(deletePost(id))
    }


    return (
    <div  className='ui container' style={{backgroundColor:'#d9dbdb'}}>
    <div className='homPageWelcome'>Wel come to Blogs</div>
    <SearchPostModal />
        {
            posts.map(post => 
                ( <div className='posts' key={post.id}>Title: {post.id}<br/>
                <div className='postBodyContent'>Content: <br/>{post.title}</div>
                <div className='postBodyContent'>Content: <br/>{post.body}</div>
                <Button onClick={()=>handlePostDelete(post.id)}>Delete</Button>
                </div> 
                
                    
                ))
        }
    </div>
   );
}

export default Posts