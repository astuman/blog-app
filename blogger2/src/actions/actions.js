import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_POSTS, NEW_POST } from './types'


const dispatch = useDispatch
export const fetchPosts = () => dispatch =>{
    const [posts, setPost] = useState([])
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res =>{
            setPost(res.data)
        })       
           return ({
                type:FETCH_POSTS,
                payload:posts
           })
}

