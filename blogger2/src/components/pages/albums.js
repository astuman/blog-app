import React, {useState, useEffect} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchAlbums} from '../../actions/actions';

const Albums = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchAlbums())
        
    },[dispatch])
    const albums = useSelector(state => state.rootPost.postedItems)

    


    return (
    <div className='ui container'>
    <div className='homPageWelcome'>Wel come to Blogs</div>
    <h2>Albums</h2>
    <div className='grid-container'>

    
    {
        albums.map(album =>(
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

export default Albums;
