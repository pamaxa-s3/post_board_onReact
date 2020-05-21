import React from 'react';
import './app-header.css';
// import { style } from "./app.module";

const AppHeader = ({liked, allPost}) => {
    return (
        <div className="app-header d-flex">
            <h1>Roman Strynzha</h1>
            <h2>{allPost} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;