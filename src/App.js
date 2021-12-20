import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Route from "react-router-dom/es/Route";

const App = (props) => {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.contentWrapper}>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route
                        path='/dialogs'
                        render={() => <Dialogs
                            store={props.store}
                        />}/>
                </div>
            </div>
    );
}

export default App;