import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';
// import { style } from "./app.module";

export default class PostStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'Все' },
        { name: 'like', label: 'Понравилось' }
    ]

    render() {

        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            const active = filter === name;
            const classes = active ? 'btn-info' : 'btn-outline-secondary';

            return (<button
                type='button'
                name={name}
                key={name}
                className={`btn ${classes}`}
                onClick={() => onFilterSelect(name)}
            >{label}</button>)
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
