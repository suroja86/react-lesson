import React from 'react';
import './messages.scss'
import {sedMessageCreator, updateNewMessageCreator} from "../reducer/messages";
import Button from "../button/button";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

let Messages = (props) => {
    let state = props.store.getState().messagePage;
    let listMessages = state.messages.map( (m) => <p>{m.message}</p> );
    let onSendMessageClick = () => {
        // props.store.dispatch(sedMessageCreator())
        dispatch(sedMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(updateNewMessageCreator(newMessage));
    }

    const dispatch = useDispatch()

    return (
        <div className={'wrapper'}>
            <h1>{props.appConfig.titles.messages}</h1>
            <div>
                {listMessages}
            </div>
            <input
                value={state.newMessage}
                onChange={onNewMessageChange}
                placeholder={props.appConfig.placeHolders.messPlaceholder}
            />
            <div>
                <Button event={onSendMessageClick} name={'Send message'}/>
            </div>
        </div>
    );
}

Messages.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default Messages;