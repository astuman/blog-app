import { Input } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';


const Searchposts = () => {

    const [posts, setPosts] = useState([]);//to search all from posts
    const [id, setId] = useState([]);//to search by id on text field using onChange
    const [searchButtonId, setSearchButtonId] = useState([]);//define for search button by ID

    

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${searchButtonId}`)
        .then(res =>{
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[searchButtonId]);

    const handleSearchId =() =>{
        setSearchButtonId(id);
    }
    return (
        <div>
        
        {/* <ul>
        {
            posts.map(post => ( <li key={post.id}>{post.title}</li> ))
            
        }
        </ul> */}
        <div className='ui container'>
        <h2>View posts by searching by id or title</h2>
        <Input type='text' placeholder='write post id' value={id} onChange={e =>setId(e.target.value)} />
        <Button onClick={handleSearchId}>Search ID</Button>
        <div className='postId'>
                Post ID: {posts.id}
            </div>
            <div className='postTitle'>
                Title: <br/>

                {posts.title}
            </div>
            <div className='postBody'>
                Main Content: <br/>
            </div>
            <div className='postBodyContent'>
                {posts.body}
            </div>
            
        </div>

        </div>
    );
}

export default Searchposts;
