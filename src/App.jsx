import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import ButtonsWithCounter from "./components/button/buttons";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import './main.scss';
import MessagesLocal from "./components/Messages/MessagesLocal";
import Table from "./components/TableView/Table";

const App = (props) => {
    return (
        <div className={props.componentClass}>
            <div>
                <Navigation componentClass={'navigation'}/>
            </div>
            <div>
                <Route
                    path='/page'
                    render={() => <Messages
                        store={props.store}
                    />}/>
                <Route
                    path='/messages'
                    render={() => <MessagesLocal
                        store={props.store}
                    />}/>
                <Route
                    path='/login'
                    render={() => <ButtonsWithCounter
                    />}/>
                <Route
                    path='/table'
                    render={() => <Table />}/>
            </div>
        </div>
    );
}



export default App;