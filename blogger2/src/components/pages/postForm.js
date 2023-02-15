import React from 'react'; 
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
    const [formData, setformData] = useState({});

    const changeHandler = (e) => {
        setformData({[e.target.name]: e.target.value});
    };
    // const history = useNavigate();
    const onSubmiting = (e) => {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      //Just log it for now, because the fake API can not store the value
      .then(data => console.log(data));
  }

    return (
        <div className='addPostField'>
            <h1>Add Post</h1>
            <form onSubmit={onSubmiting}>
                <input type="text" name='title' onChange={e => setformData(e.target.value)} placeholder='Title' /><br/>
                <input type="text" name='body' onChange={e => setformData(e.target.value)} placeholder='Post content' value={formData.body} /><br/>
                
                <button type='submit'>Add</button>
                
            </form>
            </div>
    );
}

export default PostForm;
