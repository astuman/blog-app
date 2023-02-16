import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Posts from './components/pages/posts';
import NoPage from './components/pages/nopage';
import About from './components/pages/about';
import Albums from './components/pages/albums';

import Main from './components/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from './components/pages/comments';
import Photos from './components/pages/photos';
import Todos from './components/pages/todos';
import Users from './components/pages/users';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Sidebar>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/users' element={<Users />} />


          <Route path='*' element={<NoPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
