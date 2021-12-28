import React from 'react';
import './messages.scss'
import {sedMessageCreator, updateNewMessageCreator} from "../reducer/messages";
import Button from "../button/button";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import messageState from './messagesState';
import {renderPage} from "../../index";

const MessagesLocal = (props) => {
    const listMessages = messageState.messagesData.map((m) => <p>{m.message}</p>);
    const onSendMessageClick = () => {
        messageState.messagesData.push({
            id: 5,
            message: messageState.newMessage
        });
        messageState.newMessage = '';
        renderPage();
    };

    const onNewMessageChange = (e) => {
        // debugger;
        messageState.newMessage = e.target.value;
        renderPage();
    };


    return (
        <div className={'wrapper'}>
            <h1>{props.pageTitle}</h1>
            <div>
                {listMessages}
            </div>
            <input
                value={messageState.newMessage}
                onChange={onNewMessageChange}
                placeholder={props.placeHolder}
            />
            <div>
                <Button event={onSendMessageClick} name={'Send message'}/>
            </div>
        </div>
    );
};

MessagesLocal.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

MessagesLocal.defaultProps = {
    pageTitle: 'Сторiнка повiдомлень',
    placeHolder: 'Введiть повiдомлення'
};

export default MessagesLocal;