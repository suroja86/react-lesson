import React from 'react';
import './button.scss';
import PropTypes from "prop-types";

const Button = (props) => {
    let color = props.color ? props.color : 'blue';
    return(
        <button
            className={'loginButton ' + color}
            onClick={props.event}
        >
            {props.name}
        </button>
    );
}

export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['', 'blue', 'red']),
    event: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}