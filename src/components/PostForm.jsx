import React, { useState } from 'react'
import Input from '../components/UI/input/Input'
import Button from './UI/button/Button'


function PostForm({create}) {

  const [post,setPost] = useState({
    title:"",
    body:""
  })
  
  const addNewPost = (e) =>{
      e.preventDefault();
      const newPost = {
        ...post,
        id:Date.now()
      }
      create(newPost)
      setPost({
        title:"",
        body:""
      })
  }

  return (
    <form>
      <Input 
        type='text'
        placeholder='add title'
        value={post.title}
        onChange={e=>setPost({...post,title:e.target.value})}
      />
      <Input 
        type='text'
        placeholder='add description'
        value={post.body}
        onChange={e=>setPost({...post,body:e.target.value})}
      />
      <Button onClick={addNewPost}>Add post</Button>

    </form>
  )
}

export default PostForm