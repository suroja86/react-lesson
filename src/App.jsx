import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import ButtonsWithCounter from "./components/button/buttons";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import './main.scss';

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
                        appConfig={props.appConfig}
                    />}/>
                <Route
                    path='/login'
                    render={() => <ButtonsWithCounter state={props.appConfig}/>}/>
            </div>
        </div>
    );
}



export default App;