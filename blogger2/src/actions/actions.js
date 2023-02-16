import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch =>{
    // const dispatch = useDispatch()
    fetch('https://jsonplaceholder.typicode/posts')
    .then(res => res.json())
    .then(posts =>
        dispatch({
            type:FETCH_POSTS,
            payload:posts}))
 
}

