import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/app.css'
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Programming Language' },
    { id: 2, title: 'Javascript1', body: 'Programming Language' },
    { id: 3, title: 'Javascript2', body: 'Programming Language' },

  ])
  const createNewPost =(post)=> {
    setPosts([
      ...posts,post
    ])
  }
  return (
    <div className="App">
      <PostForm create={createNewPost}/>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
