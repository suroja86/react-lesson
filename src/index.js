import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, subscribe, updateNewPostText} from "./state";
import {BrowserRouter} from "react-router-dom";
import state from './state'

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree();
subscribe(renderEntireTree);
