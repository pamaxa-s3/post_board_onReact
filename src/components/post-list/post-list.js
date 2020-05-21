import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
// import { ListGroup } from 'reactstrap';
import './post-list.css';
// import { style } from "./app.module";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elements = posts.map((item) => {
        if (typeof item === 'object' && isEmpty(item)) {
            const { id, ...itemProps } = item;
            return (
                <li className='list-group' key={id}>
                    <PostListItem
                        {...itemProps}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                        onDelete={() => onDelete(id)} />
                </li>
            )
        }
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList;