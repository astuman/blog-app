import axios from 'axios';
import { Search, Input } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Searchposts from '../pages/searchposts';

export const SearchPostModal = () => {
    const [open, setOpen] =useState(false)
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

    
    //////////////////////////
    return (
        <div>
            <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Filter posts </Button>}
    >
      <Modal.Header>Search by post ID</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <div>
        <div className='ui container'>
        <Input type='text' placeholder='write your post Id here' value={id} onChange={e =>setId(e.target.value)} />
        <div className='postId'>
                {posts.id}
            </div>
            <div className='postTitle'>
               <br/>

                {posts.title}
            </div>
            <div className='postBody'>
                <br/>
            </div>
            <div className='postBodyContent'>
                {posts.body}
            </div>
            
        </div>

        </div>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Search"
          labelPosition='right'
          icon='checkmark'
          onClick={handleSearchId}
          positive
        />
      </Modal.Actions>
    </Modal>
        </div>
    );
}

export default SearchPostModal;
