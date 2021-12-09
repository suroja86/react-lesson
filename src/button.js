import React from 'react';
import s from './css/button.css'

const Button = (props) => {
    return(
        <button
            className={s.loginButton}
            style={{background: "linear-gradient(90deg, "+props.linearColorStop+" 3.64%, "+props.colorHint+" 100%"}}
        >
            {props.name}
        </button>
    );
}

export default Button;