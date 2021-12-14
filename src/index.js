import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from './store'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import state from './state';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App componentClass={'content'} state={state}/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);