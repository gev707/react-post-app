import React from 'react'
import Button from './UI/button/Button'

export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}.{props.post.title}</strong>
                <div className="post__description">{props.post.body}</div>
            </div>
            <Button>Delete</Button>
        </div>
    )
}
