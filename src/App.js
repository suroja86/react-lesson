import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.contentWrapper}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;