import React from 'react';
import './messages.scss'
import {sedMessageCreator, updateNewMessageCreator} from "../reducer/messages";
import Button from "../button/button";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

const Messages = (props) => {
    const state = props.store.getState().messagePage;
    const listMessages = state.messages.map((m) => <p>{m.message}</p>);
    const onSendMessageClick = () => {
        dispatch(sedMessageCreator());
    };

    const onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(updateNewMessageCreator(newMessage));
    };

    const dispatch = useDispatch()

    return (
        <div className={'wrapper'}>
            <h1>{props.pageTitle}</h1>
            <div>
                {listMessages}
            </div>
            <input
                value={state.newMessage}
                onChange={onNewMessageChange}
                placeholder={props.placeHolder}
            />
            <div>
                <Button onClick={onSendMessageClick} name={'Send message'}/>
            </div>
        </div>
    );
};

Messages.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

Messages.defaultProps = {
    pageTitle: 'Сторiнка повiдомлень',
    placeHolder: 'Введiть повiдомлення'
};

export default Messages;