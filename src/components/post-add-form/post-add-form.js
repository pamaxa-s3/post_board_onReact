import React, { Component } from 'react';
import './post-add-form.css';
// import { style } from "./app.module";

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                <input
                    className='form-control new-post-label'
                    placeholder='О чём Вы думаете сейчас?'
                    onChange={this.onValueChange}
                    value={this.state.text}
                    type="text" />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Добавить
            </button>
            </form>
        )
    }

}
