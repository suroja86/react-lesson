import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import appConfig from "./appConfig";

let renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    componentClass={'content'}
                    state={store.getState()}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    appConfig={appConfig}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

renderPage(store.getState());

store.subscribe(() => {
    renderPage(store.getState());
})
