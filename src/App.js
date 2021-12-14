import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import ButtonsWithCounter from "./components/Button/buttons";
import Page from "./components/Paage/Page";
import {Route} from "react-router-dom";
import './main.sass';

const App = (props) => {

    return (
        <div className={props.componentClass}>
            <div>
                <Navigation componentClass={'navigation'}/>
            </div>
            <div>
                <Route
                    path='/page'
                    render={() => <Page />}/>
                <Route
                    path='/login'
                    render={() => <ButtonsWithCounter />}/>
            </div>
        </div>
    );
}



export default App;