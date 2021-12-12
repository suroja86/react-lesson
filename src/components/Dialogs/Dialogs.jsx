import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map(
        (d) => <DialogItem name={d.name} id={d.id} />
    );

    let messages = props.state.messagesData.map(
        (m) => <Message message={m.message} />
    );

    return (
        <div className={s.dialogs}>
            <div lassName={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;