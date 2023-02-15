import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { List, Header } from 'semantic-ui-react'

const Main = () =>{
    const [homePagePost, setHomePagePost] = useState([])
    

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
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
        {
                homePagePost.map(post => 
                ( <div className='posts' key={post.id}>Title: {post.title}<br/><div className='postBodyContent'>Content: <br/>{post.body}</div></div> 
                
                    
                ))
        }
            
     
    </div>
    );
}
export default Main;