import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Post from "./components/Profile/MyPosts/Post/Post";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.contentWrapper}>
                    {/*<Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}

                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} />}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;