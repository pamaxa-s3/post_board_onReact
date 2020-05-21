import React, { Component } from 'react';
import './post-list-item.css';
// import { style } from "./app.module";

export default class PostListItem extends Component {

    render() {

        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        (important && (classNames += ' important'));
        (like && (classNames += ' like'));

        return (
            <div className={classNames}>
                <span className='app-list-item-label' onClick={onToggleLiked}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        className='btn-star btn-sm'
                        type='button'
                        onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button
                        className='btn-trash btn-sm'
                        type='button'
                        onClick={onDelete}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}