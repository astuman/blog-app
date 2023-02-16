import React,{useEffect, useState} from 'react';
import axios from 'axios';
const Comments = () => {
    const [homePagePost, setHomePagePost] = useState([])    

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res =>{
            setHomePagePost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })

    return (
    
    <div  className='ui container' style={{backgroundColor:'#d9dbdb'}}>
    <div className='homPageWelcome'>Wel come to Blogs</div>
    <h2>Comments</h2>
    {
            homePagePost.map(post => 
        ( <div className='posts' key={post.id}>ID: {post.id}<br/>Name: {post.name}<br/>Email: {post.email}<br/>Content: <br/>{post.body}</div>
                
            ))
    }
        
 
    </div>
    );
}

export default Comments;
