import React from 'react';
import './button.sass'

const Button = (props) => {
    return(
        <button
            className={props.class}
            onClick={props.event}
        >
            {props.name}
        </button>
    );
}

export default Button;