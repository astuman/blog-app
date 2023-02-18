import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Store from '../store/store'
import { FETCH_POSTS, FETCH_ALBUMS, NEW_POST, DELETE_POST } from './types'



export const fetchPosts = () => async dispatch =>{
    // const [posts, setPost] = useState([])
    try{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res =>{
            dispatch({
                type:FETCH_POSTS,
                payload: res.data
            })
        }) 

    } catch(err){
        console.log(err)
    }   
}

export const fetchAlbums = () => async dispatch =>{
    try{
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then(res =>{
            dispatch({
                type:FETCH_ALBUMS,
                payload: res.data
            })
        }) 

    } catch(err){
        console.log(err)
    }   
}


export const deletePost = (id) => {
return ({
        type:DELETE_POST,
        payload:id
    })

}
