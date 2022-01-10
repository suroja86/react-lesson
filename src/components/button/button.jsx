import React from 'react';
import './button.scss';
import PropTypes from "prop-types";

const Button = (props) => {
    const color = props.color ? props.color : 'blue';
    return(
        <button
            className={'loginButton ' + color}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
}

export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['', 'blue', 'red']),
    onClick: PropTypes.func,
    name: PropTypes.string,
}