import React from 'react'
import PostItem from './PostItem'

function PostList(props) {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Posts List</h1>
      {
        props.posts.map((post,index) => <PostItem key={post.id} post={post} number={index+1} />)
      }
    </>
  )
}

export default PostList