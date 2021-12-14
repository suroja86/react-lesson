import React from "react";
import './Navigation.sass'
import {NavLink} from "react-router-dom";

let Navigation = (props) => {
    return (
        <nav className={props.componentClass}>
            <div>
                <NavLink to="/page">Some Page</NavLink>
            </div>
            <div>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;