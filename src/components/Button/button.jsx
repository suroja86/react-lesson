import React from 'react';
import s from './button.module.css'

const Button = (props) => {
    return(
        <button
            className={s.loginButton}
            style={{background: "linear-gradient(90deg, "+props.linearColorStop+" 3.64%, "+props.colorHint+" 100%"}}
            onClick={props.event}
        >
            {props.name}
        </button>
    );
}

export default Button;