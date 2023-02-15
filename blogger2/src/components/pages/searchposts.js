import React from 'react';

const Searchposts = () => {
    return (
        <div>
    const [posts, setPosts] = useState([]);//to search all from posts
    const [id, setId] = useState([]);//to search by id on text field using onChange
    const [searchButtonId, setSearchButtonId] = useState([]);//define for search button by ID

    

    //fetch posts using get method using axios
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
        <button style={{fontSize:'30px'}} onClick={handleSearchId}>Add Post</button>
        <h2>View posts by searching by id or title</h2>
        <input type='text' placeholder='write your post Id here' value={id} onChange={e =>setId(e.target.value)} />
        <button onClick={handleSearchId}>Search ID</button>
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
        </div>
    );
}

export default Searchposts;
