import React, {useState, useEffect} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([1]);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(res =>{
            setTodos(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })


    return (
    <div className='ui container'>
    <div className='homPageWelcome'>Wel come to Blogs</div>
    <h2>Todos</h2>
    <div className='grid-container'>

    
    {
        todos.map(album =>(
      <div className='grid-item' key={album.id}>
        {album.id}<br/>
        {album.title}
      </div>

      ))
    }
    </div>
    </div>
    
    );
}

export default Todos;
