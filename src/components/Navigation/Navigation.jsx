import React from "react";
import './Navigation.scss'
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className={props.componentClass}>
            <div>
                <NavLink to="/page">Messages</NavLink>
            </div>
            <div>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;