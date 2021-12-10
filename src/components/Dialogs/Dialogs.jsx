import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div lassName={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Serg</div>
                <div className={s.dialog}>Maks</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Andrey</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>adasd asdasd asdasd</div>
                <div className={s.message}>ffffff ffffff ffff</div>
                <div className={s.message}>kuyt hgfgh ty uytrtyu ytyu</div>
                <div className={s.message}>asdas asdasdas asd asd asd asd asd</div>
            </div>
        </div>
    );
}

export default Dialogs;