import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.contentWrapper}>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            store={props.store}
                        />}/>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer
                            store={props.store}
                        />}/>
                </div>
            </div>
    );
}

export default App;