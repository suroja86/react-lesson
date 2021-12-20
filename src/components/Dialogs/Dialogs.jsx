import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sedMessageCreator, updateNewMessageBodyCreator} from "../redux/dialog-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogsData.map(
        (d) => <DialogItem name={d.name} id={d.id} />
    );

    let messages = state.messagesData.map(
        (m) => <Message message={m.message} />
    );

    let onSendMessageClick = () => {
        props.store.dispatch(sedMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div lassName={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
               <div>{messages}</div>
                <div>
                    <textarea
                        value={state.newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter new message'}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send </button></div>
            </div>
        </div>
    );
}

export default Dialogs;