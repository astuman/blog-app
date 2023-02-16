import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
    const [formData, setformData] = useState({});

    const changeHandler = (e) => {
        setformData({[e.target.name]: e.target.value});
    };

    
//     // const history = useNavigate();
//     const onSubmiting = (e) => {
//         e.preventDefault();
//         fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       //Just log it for now, because the fake API can not store the value
//       .then(data => console.log(data));
//   }




  const client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/posts"});
  useEffect(() => {
    client.get('?').then((response) => {
        setPosts(response.data)
    })

  },[]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([102]);

  // ...






  const handleSubmit = (e) => {
     e.preventDefault();
     addPosts(title, body);
  };

  const addPosts = (title, body) => {
     client.post('', {
           title: title,
           body: body,
        })
        .then((response) => {
        setPosts([response.data, ...posts]);
        console.log(response.data)
        });
    //  setTitle('');
    //  setBody('');
  };

    return (
        <div className='addPostField'>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' onChange={e => setPosts(e.target.value)} placeholder='Title' /><br/>
                <input type="text" name='body' onChange={e => setPosts(e.target.value)} placeholder='Post content'/><br/>
                
                <button type='submit'>Add</button>
                
            </form>
            </div>
    );
}

export default PostForm;
